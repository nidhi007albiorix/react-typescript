type statusProps={
    status:"loading"|"error"|"success"
}

const Status = (props:statusProps) => {
    let message;
    if(props.status==="loading"){
        message="loading"
    }else if(props.status==="error"){
        message="error fetching"
    }else if(props.status=="success"){

    }
    return (
        <div>
            Status - {message}
        </div>
    );
};


export default Status;