
import styled  from "styled-components";
import React, {useState, useEffect} from "react";


export default function Input(){

    const [msg, setmsg] = useState({
        msg: "",
    });

    const handleSubmit = (event)=>{
        alert(msg.msg);
        
    };

    const handleChange = (event)=> {
        setmsg({ ...msg,[event.target.name]:event.target.value })
    };

    return (
        <Container4>
            <div className="input">
                <input type="text" placeholder="" name="msg" onChange={(e)=>handleChange(e)}/>
            </div>
            <form className="submitForm" onSubmit={(event)=>handleSubmit(event)}> 
                <button type="submit">send</button> 
            </form>
        </Container4>
    );
}

const Container4 =styled.div`
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    background-color: #000000;

    .input {
        width: 100%;
        height 100%
        display: flex;
        background-color: #ffffff34;
        input {
            width: 100%;
            height: 100%;
            background-color: transparent;
            color: white;
            border: none;
            padding left: 1rem;
            font-size: 1.2rem;
            &::selection {
                background-color: #9186f3; 
            }
            &:focus {
                outline: none;
            }
        }
    }
    form {
        height: 100%;
        width: 100%;
        button {
            height: 100%;
            width: 100%;  
        }
    }
`;