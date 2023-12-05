import "./Termekek.css";
import Termek from "./Termek.js";

function Termekek(props) {
    function katt(szoveg){
        props.katt(szoveg);
    }
    return (
        <div className="termekek">
            {props.lista.map((elem, index) => {
                return (<Termek adat={elem} key={index}></Termek>)
            })}
        </div>
    );
}

export default Termekek;