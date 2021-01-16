import React from 'react';    


const Innermsg = (props) => { 
    
    
    return (
    <>
        <img src={props.imgsrc} alt="avatar" className={props.cname} />
        <h1>{props.msg}</h1>
    </>
    )
    
}
export default Innermsg;