import { useEffect, useState } from "react"

export function useModifyValue() {

    const [igual, setIgual] = useState(false)
    const [actualValue, setActualValue] = useState("0")
    const [decimalActivo, setDecimalActivo] = useState(false)
    const [numeroAlmacenado, setNumeroAlmacenado] = useState("0")
    const [sumarActivo, setSumarActivo] = useState(false)

    useEffect(() => {
        if (sumarActivo) {
            console.log(numeroAlmacenado);
        }
    }, [igual]);


    const modificarValor = (value) => {

        if (value == "clear") {
            setDecimalActivo(false)
            setActualValue("0")
            setNumeroAlmacenado("0")
            return;
        }

        if (value == ".") {
            if (decimalActivo) {
                return;
            }

            setDecimalActivo(true)
            setActualValue((actualValue) + ".")
            return;
        }

        if (value == "sumar") {
            setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + "+" + actualValue)
            setActualValue("0")
            setSumarActivo(true)
            return;
        }

        if (value == "igual") {
            if (sumarActivo){
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + "+" + actualValue)
            } 

            setIgual(igual => igual ? false : true)
        }

        if (actualValue === "0" && value === "0") return setActualValue("0")
        if (actualValue === "0" && value !== "0") return setActualValue(value);
        if (actualValue.length >= 1) return setActualValue((actualValue) + value)
    }

    return { actualValue, modificarValor }
}