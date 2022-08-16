import React from 'react';
type TextOwnProps<E extends React.ElementType>={
    size?:'lg'|'md'|'sm'
    color?:'primary'|'secondary'
    children:React.ReactNode
    as?:E
}

type TextProps<E extends React.ElementType>=TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>
function Text<E extends React.ElementType>({size,color, children, as}:TextProps<E>) {
    let Component=as||'div'
    return (
        <Component className={`class-with-${size}-${color}`}>
            {children}
        </Component>
    );
}

export default Text;