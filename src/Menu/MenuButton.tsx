import React from "react";
import "hamburgers/dist/hamburgers.css";
import "./Hamburger-custom.css"

export interface MenuButtonState {
    isOpen: boolean;
}

export class MenuButton extends React.Component<any, MenuButtonState> {

    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    private toggleMenu(): void {
        this.setState({isOpen: !this.state.isOpen})
    }

    render(): React.ReactNode {
        return (
            <button className={"hamburger hamburger--spin " + (this.state.isOpen ? "is-active" : "")} type="button" onClick={() => this.toggleMenu()}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        );
    }
}