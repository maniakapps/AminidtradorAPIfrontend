/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

function UserInfo({user = {}}) {
    const {username} = user;
    return (
        <div>
            <h1 className="d-flex justify-content-center">
                Hola, {username || "invitado"}
            </h1>
        </div>
    );
}

export default UserInfo;
