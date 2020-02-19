import React, {FunctionComponent} from "react";
import "hamburgers/dist/hamburgers.css";
import "./Hamburger-custom.css"

export interface MenuButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export const MenuButton: FunctionComponent<MenuButtonProps> = (props) => {
    return (
        <button className={"hamburger hamburger--spin " + (props.isOpen ? "is-active" : "")} type="button"
                onClick={props.onClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
        </button>
    );
}