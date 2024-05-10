import CalculatorTeclado from "./CalculatorTeclado";
import { useModifyValue } from "../hooks/useModifyValue";

export default function CalculatorMain(){

    const {actualValue, modificarValor} = useModifyValue();

    return(
        <>
        <section style={{display:"grid", placeItems:"center", textAlign:"center"}}>
            <div>
                <p>{actualValue}</p>
            </div>
            <CalculatorTeclado modificarValor={modificarValor}/>
        </section>
        </>
    )
}