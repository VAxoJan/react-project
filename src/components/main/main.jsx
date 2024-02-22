import "./main.css";
import "../text/text.css";
import logo from "../../images/avarat.jpg"
import Name from "../text/title";
import Date from "../born/date";


function MainDiv() {
  return (
    <>
      <div className="mainDiv">
        <div className="top" style={{backgroundColor:"red", borderRadius:"40px"}}>
            <img className="avatar" src={logo} />
            <Date location="Georgia"/>
        </div>
        <div className="bottom">
            <Name name="vaxo janiashvili"/>
        </div>
      </div>
    </>
  );
}

export default MainDiv;