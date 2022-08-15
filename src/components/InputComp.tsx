

type inputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

function InputComp(props:inputProps) {
    return (
     <input type="text" onChange={props.handleChange} value={props.value}/>
    );
}

export default InputComp;