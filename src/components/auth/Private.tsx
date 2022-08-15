import React from "react"
import Login from "./Login"
import { ProfileProp } from "./Profile"

type privateProps={
    isLoggedIn:boolean,
    component:React.ComponentType<ProfileProp>
}
const Private = ({ isLoggedIn, component:Component }:privateProps) => {
    if (isLoggedIn) {
        return <Component name={"Nidhi"}/>

    } else {
        return <Login />
    }

}

export default Private;