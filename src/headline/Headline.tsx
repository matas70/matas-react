import React from "react";
import styles from "./Headline.module.css";
import logo from '../icons/headerLogo.svg';
import {MenuButton} from "../Menu/MenuButton";

export class Headline extends React.Component {
    render() {
        return (
            <div className={styles.headline}>
                <MenuButton></MenuButton>
                <img alt="logo" src={logo} className={styles.logo} />
                <div className={"location"}></div>
            </div>
        )
    }
}
