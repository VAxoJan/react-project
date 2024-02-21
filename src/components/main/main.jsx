import "./main.css";
import logo from  "../../images/avatar.png";
function MainDiv() {
  return (
    <>
      <div className="mainDiv">
        <div className="top" style={{backgroundColor:"red", borderRadius:"40px"}}>
            <img className="avatar" src={logo} />
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
}

export default MainDiv;