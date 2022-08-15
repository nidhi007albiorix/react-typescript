 type personProps={
    name:{
        first:String,
        last:String
    }
 }
function Person(props:personProps) {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    );
}

export default Person;