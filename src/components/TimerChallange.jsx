import {useRef,useState} from "react";

export const TimerChallange = (title,targetTime) =>{
    const timer =useRef()
    const amount =useRef("")
    const [timerStarted,setTimerStarted] =useState(false)
    const [timerExpired,setTimerExpired] =useState(false)
    const [length,setLength]=useState(0)
    let word
    const handleStart =()=>{
        timer.current = setTimeout(() =>{
            setTimerExpired(true)
        }, targetTime * 1000)
        setTimerStarted(true)
    }
    const changeHandler =()=>{
        amount.current = word
        setLength(word.length)
    }
    const handlestop =() =>{
        clearTimeout(timer.current)
    }
    return(
        <section className={"challenge"}>
            <h2>{title}</h2>
            {timerExpired && <p>lets see the finish you have written {length} characters gj </p>}
            <p className={"challenge-time"}>
                {targetTime} second{targetTime >1 ? "s" : ''}
            </p>
            <p>
                <input onChange={changeHandler}></input>
                <button onClick={timerStarted ? handlestop: handleStart}>
                    start challange
                </button>

            </p>
            <p className={timerExpired ? "active" :undefined}>
                time is running... /timer inactive
            </p>
        </section>
    )
}