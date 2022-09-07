/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

function UserInfo({user}) {
    return (
        <div>
            <h1 className="d-flex justify-content-center">Hola, {user.username}</h1>
        </div>
    );
}

export default UserInfo;
