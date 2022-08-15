import React from 'react';
export type ProfileProp={
    name:string
}
function Profile({name}:ProfileProp) {
    return (
        <div>
            Private profile component {name}
        </div>
    );
}

export default Profile;