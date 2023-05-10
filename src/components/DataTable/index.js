import React, {useState, useEffect} from 'react'
import useWebSocket from 'react-use-websocket'
import './DataTable.css'
import axios from 'axios'



const DataTable = (props) => {
    const {isCalling} = props
    const [humidData, setHumidData] = useState([])
    const [moistData, setMoistData] = useState([])
    const [tempData, setTempData] = useState([])
    const [pumpData, setPumpData] = useState([])
    const ws_url = 'ws://localhost:3000'

    // useWebSocket(ws_url, {
    //     onOpen: (res) => {
    //       console.log('WebSocket connection established.');
    //     }
    // });

    useWebSocket(ws_url, {
        onMessage: (res) => {
            const obj_res = JSON.parse(res.data)
            if (obj_res[0].name === "humid") {
                setHumidData(obj_res)
            }
            else if (obj_res[0].name === "moist") {
                setMoistData(obj_res)
            }
            else if (obj_res[0].name === "temp") {
                setTempData(obj_res)
            }
            else if (obj_res[0].name === "pump") {
                setPumpData(obj_res)
                console.log('data received:', res.data)
            }

        }
    });

    useEffect(() => {
            if (isCalling === "humidity") {
                axios.get('http://localhost:3000/humidData')
                .then((res) => {
                    // console.log(res.data)
                    setHumidData(res.data)     
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else if (isCalling === "moisture") {
                axios.get('http://localhost:3000/moistData')
                .then((res) => {
                    // console.log(res.data)
                    setMoistData(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else if (isCalling === "temperature") {
                axios.get('http://localhost:3000/tempData')
                .then((res) => {
                    // console.log(res.data)
                    setTempData(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else if (isCalling === "watering"){
                axios.get('http://localhost:3000/pumpData')
                .then((res) => {
                    // console.log(res.data)
                    setPumpData(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
    },[])
    

    return(
        <div className='datatable'>
             { isCalling === "temperature" &&
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Temperature</th>
                        <th>Sensor</th>
                        {/* <th>Area</th> */}
                    </tr>
                    {tempData.map((object) => {
                    return (
                        <tr key={object._id}>
                            <td>{object.time}</td>
                            <td>{object.value}</td>
                            <td>{object.name}</td>
                            {/* <td>{val.sensor}</td>
                            <td>{val.area}</td> */}
                        </tr>
                    )
                    })}
                </table>
            }
            { isCalling === "humidity" &&
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Humidity</th>
                        <th>Sensor</th>
                        {/* <th>Area</th> */}
                    </tr>
                    {humidData.map((object) => {
                    return (
                        <tr key={object._id}>
                            <td>{object.time}</td>
                            <td>{object.value}%</td>
                            <td>{object.name}</td>
                            {/* <td>{val.sensor}</td>
                            <td>{val.area}</td> */}
                        </tr>
                    )
                    })}
                </table>
            }

            { isCalling === "moisture" &&
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Moisture</th>
                        <th>Sensor</th>
                        {/* <th>Area</th> */}
                    </tr>
                    {moistData.map((object) => {
                    return (
                        <tr key={object._id}>
                            <td>{object.time}</td>
                            <td>{object.value}</td>
                            <td>{object.name}</td>
                            {/* <td>{val.sensor}</td>
                            <td>{val.area}</td> */}
                        </tr>
                    )
                    })}
                </table>
            }

            { isCalling === "watering" &&
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Name</th>
                    </tr>
                    {pumpData.map((object) => {
                    return (
                        <tr key={object._id}>
                            <td>{object.time}</td>
                            <td>{object.status}</td>
                            <td>{object.name}</td>
                        </tr>
                    )
                    })}
                </table>
            }

        </div>
    )
}

export default DataTable