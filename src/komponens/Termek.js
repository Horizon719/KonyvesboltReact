import "./Termek.css";

function Termek(props) {
    function katt(){
        props.katt(props);
    }
    return (
        <div className="termek">
            <p>{props.adat.cim}</p>
            <p>{props.adat.szerzo}</p>
            <p>{props.adat.ar}</p>
            <button onClick={katt}>OK</button>
        </div>
    );
}

export default Termek;