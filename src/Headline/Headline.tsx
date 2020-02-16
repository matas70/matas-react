import "./HeadlinePopups.css";
import React from "react";
import Modal from "react-modal";
import styles from "./Headline.module.css";
import logo from "../icons/HeaderLogo.svg";
import {About} from "./About/About";

export class Headline extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            isAboutOpen: false
        };

        Modal.setAppElement('#root');
        this.openAbout = this.openAbout.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    private openAbout(): void {
        this.setState({isAboutOpen: true});
    }

    private afterOpenModal(): void {
    }

    private closeModal(): void {
        this.setState({isAboutOpen: false});
    }

    render() {
        return (
            <div className={styles.headline}>
                <div className={"hamburger"}></div>
                <img alt={"logo"} src={logo} className={styles.logo} onClick={this.openAbout}/>
                <div className={"location"}></div>

                <Modal
                    data={{id: "aboutPopup"}}
                    isOpen={this.state.isAboutOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className={styles.aboutPopup}
                    overlayClassName={styles.aboutPopupOverlay}
                    closeTimeoutMS={400}
                >
                    <About onExit={this.closeModal} />
                </Modal>
            </div>
        )
    }
}
