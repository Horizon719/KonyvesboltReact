import "./Termek.css";

function Termek(props) {
    function katt(szoveg){
        props.katt(szoveg);
    }
    return (
        <div className="termek">
            <p>{props.adat.cim}</p>
            <p>{props.adat.szerzo}</p>
            <p>{props.adat.ar}</p>
            <button>OK</button>
        </div>
    );
}

export default Termek;