import React from "react";
import styles from "./ReturnToHome.module.css";
import ReturnToHome from "../icons/returnToHome.svg";

class ReturnToHomeButton extends React.Component {
    handleGoHome() {
        console.log("bla");
    }

    render() {
        return (<button className={styles.returnToHomeButton} onClick={this.handleGoHome}>
                <img alt={"returnToHome"} src={ReturnToHome} className={styles.returnToHome}/>
            </button>
        )
    }
}

export default ReturnToHomeButton;
