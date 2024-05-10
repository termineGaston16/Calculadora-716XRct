import { useEffect, useState } from "react";
import {getFechaActual} from "../js/datasInCalculatorHeader"

export function useActualDate(){
    
    const [actualDate, setActualDate] = useState(0);
    useEffect(()=>{
        setActualDate(getFechaActual())
    }, [])
    
    return {actualDate}
}