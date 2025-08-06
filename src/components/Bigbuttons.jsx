import './Button.css'
function Bigbutton(props){
    return(
        <>
        <div>
            <button className="buttonx">{props.choice}</button>
        </div>
        </>
    );
}
export default Bigbutton