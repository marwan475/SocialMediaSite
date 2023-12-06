import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import axios from "axios";
import Input from "./Input";
import Msg from "./Msg";

export default function Channel({channel}){

    const [chan, setchan] = useState(undefined);

    const getChannel = async()=>{
        const data = await axios.post('http://localhost:8080/api/db/channel',{channel});
        setchan(data.data[0].question);
    };

    useEffect(()=>{
        getChannel();
    });

    const handlesub = async (msg) => {

    };

    return (
        <Container3>
            <div className="channel">
                <h3>{chan}</h3>
            </div>
            <Msg/>
            <Input chan={channel}/>
        </Container3>
    );
}

const Container3 =styled.div`
    padding-top: 1rem;
    .channel {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0.2rem;
        background-color: #ffffff39;
        min-height 5rem;
        border-radius: 0.2rem;
        padding: 0.4rem;
        gap: 1rem;
    
    }
    
`;