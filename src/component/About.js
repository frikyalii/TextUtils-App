import React, { useState } from 'react'



export default function About() {

    const [mystyle,SetmyStyle]=useState({
        color:"white",
        backgroundColor:"black"
    })
    

    const [btntext,setbtntext]=useState("enable Dark Mode")
    
   const toggleStyle=()=>
    {
        if(mystyle.color=="white")
        {
            SetmyStyle(
                {
                    color:"black",
                    backgroundColor:"white"
                }
            )
            setbtntext("enable dark mode");
            }
            else
            {
                SetmyStyle({
                    color:"white",
                    backgroundColor:"black"
                })
                setbtntext("disable dark mode");
            }
        
    }





    return (
        <div>
        <h3>About Us</h3>
        <div className='container rounded' style={mystyle}>
            <div className="card"  style={mystyle}>
           
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body rounded">

                    Text Utility is a React application designed to manipulate text. It provides various features to modify and analyze text input. The main functionalities of the app include:

Text Manipulation: It offers different operations to modify the input text, such as converting text to uppercase, lowercase, or title case. Additionally, it provides options to remove extra spaces, capitalize words, and give email list from text                 </div>
                </div>
            </div>
            
           
        </div>
        </div>
    )
}
