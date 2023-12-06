import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import axios from "axios";

export default function Channel({channel}){

    const [chan, setchan] = useState(undefined);

    const getChannel = async()=>{
        const data = await axios.post('http://localhost:8080/api/db/channel',{channel});
        setchan(data.data[0].question);
    };

    useEffect(()=>{
        getChannel();
    });

    return (
        <Container3>
            <div className="channel">
                <span>{chan}</span>
            </div>
        </Container3>
    );
}

const Container3 =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .channel {
        align-items: center;
        text-align: center;
        
    }
    
`;