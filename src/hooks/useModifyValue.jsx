import { useEffect, useState } from "react"

export function useModifyValue() {

    const [effectAplicado, setEffectAplicado] = useState(false)
    const [igual, setIgual] = useState(false)
    const [actualValue, setActualValue] = useState("0")
    const [decimalActivo, setDecimalActivo] = useState(false)
    const [numeroAlmacenado, setNumeroAlmacenado] = useState("")

    const [sumarActivo, setSumarActivo] = useState(false)
    const [restarActivo, setRestarActivo] = useState(false)

    /* ejecutar la cuenta en el numeroAlmacenado */
    useEffect(() => {

        if (numeroAlmacenado !== "") {
            setActualValue(numeroAlmacenado)
            setEffectAplicado(true)
        }

    }, [igual]);

    console.log(numeroAlmacenado);

    const modificarValor = (value) => {

        /* limpiar toda la calculadora */
        if (value == "clear") {
            setNumeroAlmacenado("")
            setActualValue("0")

            setDecimalActivo(false)
            setIgual(false)
            setEffectAplicado(false)

            setSumarActivo(false)
            setRestarActivo(false)
            return;
        }

        /* volver decimal el numero */
        if (value == ".") {
            if (decimalActivo || sumarActivo || restarActivo) return;

            if (numeroAlmacenado === "") {
                setNumeroAlmacenado("0.")
            } else {
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + ".")
            }

            setActualValue((actualValue) + ".")
            setDecimalActivo(true)
            return;
        }

        /* aplicar suma a la cuenta */
        if (value == "sumar") {

            /* impedir que, si un operador ya está activado, no se pueda agregar otro */
            if (restarActivo) return;

            /* si se agregar este operador, que no pueda repetirse */
            if (numeroAlmacenado !== "" && numeroAlmacenado.charAt(numeroAlmacenado.length - 1) == "+") return;

            /* si no hay nada en el numero almacenado, agregar un 0*/
            if (numeroAlmacenado === "") {
                setNumeroAlmacenado("0 + ")
            } else {
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + "+")
            }

            setDecimalActivo(false)
            setActualValue("0")
            setSumarActivo(true)
            return;
        }

        /* aplicar resta a la cuenta */
        if (value == "restar") {

            /* impedir que, si un operador ya está activado, no se pueda agregar otro */
            if (sumarActivo) return;

            /* si se agregar este operador, que no pueda repetirse */
            if (numeroAlmacenado !== "" && numeroAlmacenado.charAt(numeroAlmacenado.length - 1) == "-") return;

            /* si no hay nada en el numero almacenado, agregar un 0*/
            if (numeroAlmacenado === "") {
                setNumeroAlmacenado("0 - ")
            } else {
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + "-")
            }

            setDecimalActivo(false)
            setActualValue("0")
            setRestarActivo(true)
            return;
        }

        /* ejecutar cuenta y esperar resultado en el useEffect */
        if (value == "igual") {

            if (numeroAlmacenado == "") return;

            if (sumarActivo || restarActivo) {
                if (actualValue === "0") {
                    setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado.slice(0, -1))
                }
            }

            setNumeroAlmacenado(numeroAlmacenado => eval(numeroAlmacenado))
            !igual ? setIgual(true) : setIgual(false);
            return;
        }

        if (actualValue === "0" && value === "0") {

            if (sumarActivo || restarActivo) {
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + "0")
                setSumarActivo(false)
                setRestarActivo(false)
                return
            }

            if (numeroAlmacenado !== "") return;

            setNumeroAlmacenado("0")
            setActualValue("0")
            return;
        }

        if (actualValue === "0" && value !== "0") {
            if (sumarActivo || restarActivo) {
                setActualValue(value);
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + value)
                setSumarActivo(false)
                setRestarActivo(false)
                return;
            }

            if (numeroAlmacenado !== "") {
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado.slice(0, -1))
                setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + value);
                setActualValue(value)
                return;
            }

            setNumeroAlmacenado(value)
            setActualValue(value);
            return;
        }

        if (actualValue.length >= 1) {
            setNumeroAlmacenado(numeroAlmacenado => numeroAlmacenado + value)
            setActualValue((actualValue) + value)
            return;
        }

        if (effectAplicado) {
            setActualValue(value);
            setNumeroAlmacenado(value)
            setEffectAplicado(false)
            return;
        }
    }

    return { actualValue, modificarValor }
}