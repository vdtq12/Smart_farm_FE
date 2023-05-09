import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './ManualButton.css'

const ManualButton = (props) => {
    const { isCalling } = props

    function handlePumpClick(e) {
        e.preventDefault();
        console.log("The link was clicked.");
        
    fetch('http://localhost:3000/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
    }

    
    return (
        <div> 
            {/* { isCalling === "humidity" &&
                <div>
                    <button style={{backgroundColor: 'aqua'}}>CHECK NOW</button>
                </div>
            }

            { isCalling === "temperature" &&
                <div>
                    <button style={{backgroundColor: 'orange'}}>CHECK NOW</button>
                </div>
            }  

            { isCalling === "moisture" &&
                <div>
                    <button style={{backgroundColor: 'aqua'}}>CHECK NOW</button>
                </div>
            }   */}

            { isCalling === "watering" &&
                <div>
                    <button onClick={handlePumpClick} style={{backgroundColor: 'chartreuse'}}>WATERING NOW</button>
                </div>
            }  
        </div>
    )
}
export default ManualButton