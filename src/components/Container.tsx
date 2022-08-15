type styleProps={
    styles:React.CSSProperties
}
const Container = (props:styleProps) => {
    return (
        <div style={props.styles}>
            this is a container
        </div>
    );
};

export default Container;