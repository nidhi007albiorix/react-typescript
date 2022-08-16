import React, { ComponentProps } from 'react';
import Greet from '../Greet';

function CustomComp(props:ComponentProps<typeof Greet>) {
    return (
        <div>
            {props.messageCount}
        </div>
    );
}

export default CustomComp;