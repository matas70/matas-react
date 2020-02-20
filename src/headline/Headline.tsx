import React, {FunctionComponent} from "react";
import styles from "./Headline.module.css";
import logo from '../icons/headerLogo.svg';
import {MenuButton} from "../Menu/MenuButton";

export interface HeadlineProps {
    menuButtonAction: () => void;
    isMenuActive: boolean;
}

export const Headline: FunctionComponent<HeadlineProps> = (props) => {
    return (
        <div className={styles.headline}>
            <MenuButton onClick={props.menuButtonAction} isOpen={props.isMenuActive}></MenuButton>
            <img alt="logo" src={logo} className={styles.logo}/>
            <div className={"location"}></div>
        </div>
    );
}
