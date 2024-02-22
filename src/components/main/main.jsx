import "./main.css";
import "../text/text.css";
import logo from "../../images/avarat.jpg"
import Date from "../born/date";
import Profession from "../profession/profession";
import Languages from "../languages/languages";
import LangTitle from "../languages/languageTitle";

function MainDiv() {
  return (
    <>
      <div className="mainDiv">
        <div className="top">
            <img className="avatar" src={logo} />
            <Date location="Georgia"/>
            <Profession color="white" display="flex" justifyContent="center" fontWeight="400"/>
            <LangTitle display="flex" justifyContent="center" color="red" margin="10px 0"/>
            <div className="middle">
              <Languages image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" width="40px" height="40px"/>
              <Languages image="https://cdn-icons-png.flaticon.com/512/919/919826.png" width="40px" height="40px"/>
              <Languages image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" width="40px" height="40px"/>
              <Languages image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="40px" height="40px"/>
              <Languages image="https://miro.medium.com/v2/resize:fit:1400/1*CStP06JrfLSevaOkPZavvg.png" width="40px" height="40px"/>
              <Languages image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" width="40px" height="40px"/>
              </div>
          </div>
        <div className="bottom">
        </div>
      </div>
    </>
  );
}

export default MainDiv;