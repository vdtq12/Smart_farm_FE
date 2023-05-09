import React, {useState, useEffect} from 'react'
import axios from 'axios'
import humidity from "./Humidity.webp"
import temperature from "./Temperature.webp"
import watering from "./Watering.webp"
import './CurrentData.css'
import {ManualButton} from '../../components'
import useWebSocket from 'react-use-websocket'

const CurrentData = (props) => {
    const {isCalling} = props
    const [curHumid, setCurHumid] = useState(0)
    const [preHumid, setPreHumid] = useState(0)
    const [curTemp, setCurTemp] = useState(0)
    const [preTemp, setPreTemp] = useState(0)
    const [curMoist, setCurMoist] = useState(0)
    const [preMoist, setPreMoist] = useState(0)
    const [curPump, setCurPump] = useState('None')
    const [prePump, setPrePump] = useState('None')
    const ws_url = 'ws://localhost:3000'

    // useWebSocket(ws_url, {
    //     onMessage: (res) => {
    //         console.log(res)
    //         console.log(res.data)
    //         const obj_res = JSON.parse(res.data)
    //         if (obj_res[0].name === "humid") {
    //             setCurHumid(obj_res[0].value)
    //             setPreHumid(obj_res[1].value)
    //         }
    //         else if (obj_res[0].name === "temp") {
    //             setCurTemp(obj_res[0].value)
    //             setPreTemp(obj_res[1].value)
    //         }
    //         else if (obj_res[0].name === "moist") {
    //             setCurMoist(obj_res[0].value)
    //             setPreMoist(obj_res[1].value)
    //         }
    //         else if (obj_res[0].name === "pump") {
    //             const onData = obj_res.filter(data => data.status === 'On')
    //             setCurPump(onData[0].time)
    //             setPrePump(onData[1].time)
    //         }
    //     }
    // });
    return (
        <div className='content-hutempwa'>
            { isCalling === "humidity" &&
            <div>
                <img src={humidity}></img>
                {/* <div>
                    <h1> Current: {curHumid}%</h1>
                    <h2> Previous: {preHumid}%</h2>                    
                </div> */}
                <div className='buttonCheckNow'>
                    <ManualButton isCalling = {"humidity"}/>                    
                </div>
            </div>
            }

            { isCalling === "temperature" &&
            <div>
                <img src={temperature}></img>
                {/* <div>
                    <h1> Current: {curTemp} C</h1>
                    <h2> Previous: {preTemp} C</h2>
                </div> */}
                <div className='buttonCheckNow'>
                    <ManualButton isCalling = {"temperature"}/>                
                </div>
            </div>
            } 

            { isCalling === "moisture" &&
            <div>
                <img src={humidity}></img>
                {/* <div>
                    <h1> Current: {curMoist} %</h1>
                    <h2> Previous: {preMoist} %</h2>                    
                </div> */}
                <div className='buttonCheckNow'>
                    <ManualButton isCalling = {"humidity"}/>                    
                </div>
            </div>
            }

            { isCalling === "watering" &&
            <div>
                <img src={watering}></img>
                {/* <div>
                    <h1> Current: {curPump}</h1>
                    <h2> Previous: {prePump}</h2>
                </div> */}
                <div className='buttonCheckNow'>
                    <ManualButton isCalling = {"watering"}/>                    
                </div>
            </div>
            } 
        </div>
    )
}

export default CurrentData