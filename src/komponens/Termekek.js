import "./Termekek.css";
import Termek from "./Termek.js";

function Termekek(props) {
    return (
        <div className="termekek">
            {props.lista.map((elem, index) => {
                return (<Termek adat={elem} key={index} katt={props.katt} index={index}></Termek>)
            })}
        </div>
    );
}

export default Termekek;