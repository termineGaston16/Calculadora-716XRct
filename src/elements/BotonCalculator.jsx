export default function BotonCalculator(props) {

    return (
        <>
            <button onClick={props.onClick} style={{cursor:"pointer"}}>{props.text}</button>
        </>
    )
}