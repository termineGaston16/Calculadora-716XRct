import { useEffect, useState } from "react";
import { getHoraActual } from "../js/datasInCalculatorHeader"

export function useActualTime() {
    const [actualTime, setActualTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActualTime(getHoraActual());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return { actualTime }
}