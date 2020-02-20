import React, {FunctionComponent} from "react";
import styles from "./ReturnToHome.module.css";
import ReturnToHome from "../icons/returnToHome.svg";

interface handleGoHome {
    onClick: () => void;
}

export const ReturnToHomeButton: FunctionComponent<handleGoHome> = (props) => {

    return (
        <button className={styles.returnToHomeButton} onClick={props.onClick}>
            <img alt={"returnToHome"} src={ReturnToHome} className={styles.returnToHome}/>
        </button>
    );
};

