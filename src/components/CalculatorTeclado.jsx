import BotonCalculator from "../elements/BotonCalculator"
import { getValueBtnCalculator } from "../js/logicaCalculadora"

export default function CalculatorTeclado(props) {

    const tecla = ["(⌐■_■)", "√", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "─", "1", "2", "3", "+", "0", ".", "Clear", "="]

    const handleClick = (index) => {
        props.modificarValor(getValueBtnCalculator(index));
    }

    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
                {tecla.map((tecla, index) => {
                    return (<BotonCalculator index={index} key={index} text={tecla} onClick={() => handleClick(index)} />)
                })}
            </div>
        </>
    )
}