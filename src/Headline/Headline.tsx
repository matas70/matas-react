import React from "react";
import Modal from "react-modal";
import styles from "./Headline.module.css";
import logo from "../icons/HeaderLogo.svg";
import bigLogo from "../icons/bigLogo.png";
import exitIcon from "../icons/aboutExitLogo.svg";
import iafLogo from "../icons/iaf-small.png";
import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";
import twitterIcon from "../icons/twitter.svg";

export class Headline extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openAbout = this.openAbout.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    private openAbout(): void {
        this.setState({modalIsOpen: true});
    }

    private afterOpenModal(): void {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    private closeModal(): void {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className={styles.headline}>
                <div className={"hamburger"}></div>
                <img alt={"logo"} src={logo} className={styles.logo} onClick={this.openAbout}/>
                <div className={"location"}></div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className={styles.about}
                    contentLabel={"Example Modal"}
                >
                    <div id={"aboutPopup"} className={"aboutPopup"}>
                        <img alt={"exitIcon"} id={"aboutExitLogo"} className={"aboutExitLogo"} src={exitIcon}/>
                        <div id={"aboutHeaderSpacing"} className={"aboutHeaderSpacing"}></div>
                        <div id={"aboutLogoDiv"}>
                            <div id={"aboutHeader"} className={"aboutHeader"}></div>
                            <img alt={"bigLogo"} id={"aboutLogo"} className={"{aboutLogo"} src={bigLogo}/>
                        </div>
                        <div className={"aboutSpacing"}></div>
                        <div id={"aboutTitle"} className={"aboutTitle"}>
                            חג עצמאות שמח!
                        </div>
                        <div className={"aboutSpacing"}></div>
                        <div id={"aboutBody"} className={"aboutBody"}>
                            האפליקציה פותחה ע"י <span style={{fontWeight: 600}}>יחידת אופק 324</span>, היחידה
                            הטכנולוגית המבצעית של חיל האוויר, לטובת הצגת מיקום כלי הטיס בזמן אמת במהלך המטס החגיגי
                            של יום העצמאות לכבוד חגיגות 71 שנה למדינת ישראל
                        </div>
                        <div className={"aboutSpacing"}></div>
                        <img alt={"iafLogo"} id={"iafLogo"} src={iafLogo} className={"iafLogo"}/>
                        <div className={"aboutSpacing"}></div>
                        <div className={"bottomText"}>
                            לידיעתכם, ייתכנו שינוים בלוחות הזמנים
                        </div>
                        <div id={"aboutBottomLink"} className={"aboutBottomLink"}>
                            <a id={"facebookLink"} href={"https://www.facebook.com/IsraeliAirForce.HE/"}>
                            </a>
                            <img alt={"facebookIcon"} src={facebookIcon} className={"aboutBottomImg"}/>
                            <a id={"instagramLink"} href={"https://www.instagram.com/israeliairforcea/"}>
                            </a>
                            <img alt={"instagramIcon"} src={instagramIcon} className={"aboutBottomImg"}/>
                            <a id={"twitterLink"} href={"https://twitter.com/iafsite"}>
                            </a>
                            <img alt={"twitterIcon"} src={twitterIcon} className={"aboutBottomImg"}/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
