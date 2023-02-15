import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { registerUser } = useContext(AuthContext);

  const passwordRef = useRef();

  const onSubmit = async (data) => {
    if (data.password !== passwordRef.current.value) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      await registerUser(data.username, data.password, data.confirmPassword);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <hr />
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} placeholder="Username" required />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} placeholder="Password" required />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" {...register("confirmPassword")} placeholder="Confirm Password" required ref={passwordRef} />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <div>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <button>Register</button>
      </form>
    </section>
  );
}

export default Register;
