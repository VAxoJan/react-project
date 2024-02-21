import "./main.css";
import "../text/text.css";
import logo from  "../../images/avatar.png";
import Name from "../text/title";
function MainDiv() {
  return (
    <>
      <div className="mainDiv">
        <div className="top" style={{backgroundColor:"red", borderRadius:"40px"}}>
            <img className="avatar" src={logo} />
        </div>
        <div className="bottom">
            <Name className="firstName" name="vaxo janiashvili"/>
        </div>
      </div>
    </>
  );
}

export default MainDiv;