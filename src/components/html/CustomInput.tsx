import React from 'react';
type InputProp=React.ComponentProps<'input'>
function CustomInput(props:InputProp) {
    return (
   <input {...props} />
    );
}

export default CustomInput;