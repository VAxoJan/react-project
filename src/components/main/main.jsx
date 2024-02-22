import "./main.css";
import "../text/text.css";
import logo from "../../images/avarat.jpg"
import Name from "../text/title";
import Date from "../born/date";
import Profession from "../profession/profession";


function MainDiv() {
  return (
    <>
      <div className="mainDiv">
        <div className="top">
            <img className="avatar" src={logo} />
            <Date location="Georgia"/>
            <Profession color="white" display="flex" justifyContent="center" fontWeight="400"/>
        </div>
        <div className="bottom">
        </div>
      </div>
    </>
  );
}

export default MainDiv;