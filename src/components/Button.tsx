import React from "react";

type handleClickProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
const Button = (props:handleClickProps) => {
    return (
        <button onClick={props.handleClick}>
            Click me
        </button>
    );
};


export default Button;