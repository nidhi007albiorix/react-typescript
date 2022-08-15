
type headingProps = {
    children: string
}
const Heading = (props: headingProps) => {
    return (
        <h3>
            {props.children}
        </h3>
    );
};


export default Heading;