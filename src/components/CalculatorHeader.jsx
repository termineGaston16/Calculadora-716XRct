import { useActualDate } from "../hooks/useActualDate"
import { useActualTime } from "../hooks/useActualTime";

export default function CalculatorHeader() {

    const {actualDate} = useActualDate();
    const {actualTime} = useActualTime();

    return (<>
        <section style={{display:"grid", placeItems:"center", textAlign:"center"}}>
            <h5>calculator owner:</h5>
            <p>Names</p>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{margin:"0px 5%"}}>
                    <h5>date</h5>
                    <p>{actualDate}</p>
                </div>
                <div>
                    <h5>time</h5>
                    <p>{actualTime}</p>
                </div>
            </div>
        </section>
    </>)
}