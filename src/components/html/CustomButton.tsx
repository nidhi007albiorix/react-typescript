import React from "react";


type ButtonPropType = {
    varient: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
function CustomButton({ varient, children, ...rest }: ButtonPropType) {
    return (
        <button className={`class-with-${varient}`} {...rest}>
            {children}
        </button>
    );
}

export default CustomButton;