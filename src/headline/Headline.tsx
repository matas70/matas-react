import React from "react";
import styles from "./Headline.module.css";
import logo from '../icons/headerLogo.svg';

export class Headline extends React.Component {
    render() {
        return (
            <div className={styles.headline}>
                <div className={"hamburger"}></div>
                <img alt="logo" src={logo} className={styles.logo} />
                <div className={"location"}></div>
            </div>
        )
    }
}
