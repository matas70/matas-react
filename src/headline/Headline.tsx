import React, {FunctionComponent} from "react";
import styles from "./Headline.module.css";
import logo from '../icons/headerLogo.svg';
import {MenuButton} from "../Menu/MenuButton";
import {ReturnToHomeButton} from "../ReturnToHome/ReturnToHome";

export interface HeadlineProps {
    menuButtonAction: () => void;
    isMenuActive: boolean;
    goHome: () => void;
}

export const Headline: FunctionComponent<HeadlineProps> = (props) => {
    return (
        <div className={styles.headline}>
            <MenuButton onClick={props.menuButtonAction} isOpen={props.isMenuActive}></MenuButton>
            <img alt="logo" src={logo} className={styles.logo}/>
            <div className={"location"}></div>
            <ReturnToHomeButton onClick={props.goHome}/>
        </div>
    );

};
