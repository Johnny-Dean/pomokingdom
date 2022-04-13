import { useEffect, useState } from "react";
import convSecondsToFancyTime from "../../services/seconds-conversion";
import TimerButtons from "./timer-buttons";
import TimerState from "./timerstate";
import './timer.css'
import { Button } from "@mui/material";
function Timer(){
    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const [currTimerState, setTimerState] = useState<TimerState>(TimerState.STUDY)
    const [seconds, setSeconds] = useState<number>(currTimerState)

    const handleClick = (): void => {
        setTimerRunning(!timerRunning);
    }

    const handleTimerStateChange = (newTimerState: TimerState): void => {
        setTimerState(newTimerState);
        setSeconds(newTimerState);
        setTimerRunning(false);
    }
    
    useEffect(() => {
        let timeInterval: number | undefined;
        if (timerRunning){
            timeInterval = window.setInterval(() => setSeconds(seconds - 1), 1000);
        } else if (!timerRunning && seconds > 0) {
            clearInterval(timeInterval);
        }
        return () => clearInterval(timeInterval);
    }, [timerRunning, seconds])
    
    return (
        <div className="timer-container">
            <h1>{convSecondsToFancyTime(seconds)}</h1>
            <TimerButtons newTimerState={handleTimerStateChange} currTimerState={currTimerState}/>
            <Button className='Button' variant='contained' onClick={handleClick}>{timerRunning?'Stop':'Start'}</Button>
        </div>
    )
} 
export default Timer;
