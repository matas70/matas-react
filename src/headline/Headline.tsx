import "./HeadlinePopups.css";
import Modal from "react-modal";
import styles from "./Headline.module.css";
import logo from "../icons/HeaderLogo.svg";
import {About} from "./About/About";
import {MenuButtonProps} from "../Menu/MenuButton";
import React from "react";

export interface HeadlineProps {
    menuButton: React.FunctionComponentElement<MenuButtonProps>
}

export interface HeadlineState {
    isAboutOpen: boolean
}

export class Headline extends React.Component<HeadlineProps, HeadlineState> {
    constructor(props: HeadlineProps) {
        super(props);

        this.state = {
            isAboutOpen: false
        };

        Modal.setAppElement('#root');
        this.openAbout = this.openAbout.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    private openAbout(): void {
        this.setState({isAboutOpen: true});
    }

    private closeModal(): void {
        this.setState({isAboutOpen: false});
    }

    render() {
        return (
            <div className={styles.headline}>
                {this.props.menuButton}
                <img alt={"logo"} src={logo} className={styles.logo} onClick={this.openAbout}/>
                <div className={"location"}></div>
                <Modal
                    id="aboutPopup"
                    isOpen={this.state.isAboutOpen}
                    onRequestClose={this.closeModal}
                    className={styles.aboutPopup}
                    overlayClassName={styles.aboutPopupOverlay}
                    closeTimeoutMS={400}
                >
                    <About onExit={this.closeModal}/>
                </Modal>
            </div>
        )
    }
}
