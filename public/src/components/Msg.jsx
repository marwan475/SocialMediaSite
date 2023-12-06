import styled  from "styled-components";
import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Msg({chan}){

    const [msgs, setmsgs] = useState([]);

    var channel = chan;

    const getMsgs = async()=>{
        const data = await axios.post('http://localhost:8080/api/db/msgs',{
            channel,
        });
        setmsgs(data.data);

    };

    useEffect(()=>{
        getMsgs();
    });

    return (
        <Container5>
            <div className="msgs">
                {
                    msgs.map((msg)=>{
                        return (
                            <div className="msg">
                                {msg.msg}
                            </div>
                        );
                    })
                }
            </div>
        </Container5>
    );
}

const Container5 =styled.div`
    height: 80%;
`;