
type GreetProps={
    name:string,
    messageCount?:number, //conditional type

    isLoggedIn:Boolean,
}

const Conditional = (props:GreetProps) => {
    const {messageCount=0}=props
    return (
        <div>
          { props.isLoggedIn ? <h1>Welcome {props.name}, you have {props.messageCount} messages</h1>:<h1>Welcome guests</h1>}
        </div>
    );
};


export default Conditional;