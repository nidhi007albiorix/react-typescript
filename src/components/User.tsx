import React, { useState } from 'react';
type AuthUser={
    name:string,
    email:string
}
const User = () => {
    const [user, setuser] = useState<AuthUser|null>(null);

    // useState Type Assertion
    // const [user, setuser] = useState<AuthUser>({} as AuthUser);

    const handleLogin=()=>{
        setuser({
            name:"Nidhi",
            email:"n@b.com"
        })
    }
    const handleLogout=()=>{
        setuser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>
                login
            </button>
            <button onClick={handleLogout}>
                Logout
            </button>
            <h4>User name {user?.name}</h4>
            <h4>User email {user?.email}</h4>

            {/* when using type assertion */}
            {/* <h4>User name {user.name}</h4>
            <h4>User email {user.email}</h4> */}
        </div>
    );
};

export default User;