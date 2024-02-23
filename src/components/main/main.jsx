import "./main.css";
import "../text/text.css";
import logo from "../../images/avarat.jpg"
import Date from "../born/date";
import Profession from "../profession/profession";
import Languages from "../languages/languages";
import LangTitle from "../languages/languageTitle";
import {HtmlLink, CSSLink, jsLink, ReactLink, NextLink, BootstrapLink, gifImg} from "../links/links";

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
              <Languages image={HtmlLink} width="40px" height="40px"/>
              <Languages image={CSSLink} width="40px" height="40px"/>
              <Languages image={jsLink} width="40px" height="40px"/>
              <Languages image={ReactLink} width="40px" height="40px"/>
              <Languages image={NextLink} width="40px" height="40px"/>
              <Languages image={BootstrapLink} width="40px" height="40px"/>
              </div>
          </div>
        <div className="bottom">
          <img className="botImg" src={gifImg}/>
        </div>
      </div>
    </>
  );
}

export default MainDiv;