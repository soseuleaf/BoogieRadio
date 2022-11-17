import React from "react";
import styles from "./font.css";

class font extends React.Component {
  render() {
    const { title, boogieradio1, boogieradio2, boogieradio3, boogieradio4 } = this.props;

    return (
      
      <div className="container-center-horizontal">

        <div className="f_ont screen">
          {/* <div className={styles.title}><div/> */}
          <div className="overlap-group">
              <h1 className="title inter-bold-white-150px">{title}</h1>
              <div className="boogie-radio inter-bold-white-150px">{boogieradio1}</div>
              <div className="boogie-radio-1 inter-bold-white-150px">{boogieradio2}</div>
              <div className="boogie-radio-2 inter-bold-white-150px">{boogieradio3}</div>
              <div className="boogie-radio-3">{boogieradio4}</div>
          </div>

          <div className="group">
              <div className="overlap-group1">
                <div className="ellipse"></div>
                <div className="rectangle-5"></div>
                <div className="rectangle-5-1"></div>
                <div className="rectangle-5-2"></div>
                <div className="rectangle-5-3"></div>
                <div className="rectangle-5-4"></div>

                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="rectangle-1"></div>
                <div className="rectangle-2"></div>
                <div className="rectangle-3"></div>
                <div className="rectangle-4"></div>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default font;
