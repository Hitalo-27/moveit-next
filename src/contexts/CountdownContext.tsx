import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import { ChallengesContext } from '../contexts/ChallengesContext';

interface CountdownContextData{
    minutes: number;
    secunds:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountdown: ()=>void;
    resetCountdown: ()=>void;


}

interface CountdownProviderProps{
    children:ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}:CountdownProviderProps){
    const { startNewChallenge} = useContext(ChallengesContext)

    

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    const[hasFinished, setHasFinished] = useState(false);

    const minutes= Math.floor(time / 60);
    const secunds= time % 60;

    function startCountdown(){
        setIsActive(true);

    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(25*60);


    }

    useEffect(() => {
     if(isActive && time>0){
        countdownTimeout = setTimeout(()=>{
             setTime(time - 1);
         }, 1000)
     } else if(isActive && time == 0){
         setHasFinished(true);
         setIsActive(false);
         startNewChallenge();

     }

    }, [isActive, time])

    return(
        <CountdownContext.Provider value = {{
        minutes, 
        secunds, hasFinished,
        isActive,
        startCountdown,
        resetCountdown}}>
            {children}

        </CountdownContext.Provider>

    )
}