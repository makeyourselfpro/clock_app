"use client"
import { useEffect, useState } from "react"

const Home = () => {
const [time , settime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(()=>{settime(new Date())},1000)
 return()=>{clearInterval(interval)}
  }, [])
  
  // now declare Hours , seconds , minutes
  const seconds = time.getSeconds() * 6
  const minutes = (time.getMinutes() + time.getSeconds() / 60) * 6
  const hours = (time.getHours() % 12 + time.getMinutes() / 60) * 30
  
  const clock = {
    height:"500px",
    width: "500px",
    borderRadius: "100%",
    border: "20px double blue",
    boxShadow: "0px 0px 10px",
    position: "relative",
  }
  const secondsHand = {
    height: "0",
    width: "40%",
    borderRadius: "100px",
    border: "10px double brown",
    boxShadow: "0px 0px 10px",
    position:"absolute",
    top: "50%",
    left:"5%",
    transform: `rotate(${seconds}deg)`,
    transformOrigin:"100%"
  }
  
  const minutesHand = {
    height: "0",
    width: "40%",
    borderRadius: "100px",
    border: "10px double purple",
    boxShadow: "0px 0px 10px",
    position:"absolute",
    top: "50%",
    left:"5%",
    transform: `rotate(${minutes}deg)`,
    transformOrigin:"100%"
    
  }
  
  const hoursHand = {
    height: "0",
    width: "40%",
    borderRadius: "100px",
    border: "10px double black",
    boxShadow: "0px 0px 10px",
    position:"absolute",
    top: "50%",
    left:"5%",
    transform: `rotate(${hours}deg)`,
    transformOrigin:"100%"
    
  }
  return (
    <main>
<h1>My clock Using NEXT JS & MODULAR CSS</h1>
    <div style={clock}>
      <div style={secondsHand}>Seconds</div>
      <div style={minutesHand}>Minutes</div>
      <div style={hoursHand}>Hours</div>
    </div>
    </main>
  )
}

export default Home;
