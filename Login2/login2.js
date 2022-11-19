import React from "react";
import "./login2.css";
import {useNavigate, Navigate} from "react-router-dom";
import Button from "./btn";

class login2 extends React.Component {
  render() {
    const { login1, login2, login3, login4 } = this.props;
    

    return (
      <div className="lcontainer-center-horizontal">
        <div className="lLogin">

          <div className="lgroup-container">
            <div className="loverlap-group">
              <h1 className="ltitle linter-bold-white-70px">{login1}</h1>
              <div className="llogin linter-bold-white-70px">{login2}</div>
              <div className="llogin-1">{login3}</div>
            </div>

            <div className="lgroup">
              <div className="loverlap-group1">
                <div className="lrectangle-5"></div>
                <div className="lrectangle-5-1"></div>
                <div className="lrectangle-5-2"></div>
                <div className="lrectangle-5-3"></div>
                <div className="lrectangle-5-4"></div>
              </div>
            </div>

            
            <div className="lgroup-1">
              <div className="loverlap-group2">
                <div className="lrectangle-5-5"></div>
                <div className="lrectangle-5-6"></div>
                <div className="lrectangle-5-7"></div>
                <div className="lrectangle-5-8"></div>
                <div className="lrectangle-5-9"></div>
              </div>
            </div>

            <div className="lgroup-2">
              <div className="loverlap-group3">
                <div className="lrectangle-5-10"></div>
                <div className="lrectangle-5-11"></div>
                <div className="lrectangle-5-12"></div>
                <div className="lrectangle-5-13"></div>
                <div className="lrectangle-5-14"></div>
                {/* <div className="lblogin-2">{login4}</div> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login2;
