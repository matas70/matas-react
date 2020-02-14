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
                    closeTimeoutMS={400}
                >
                    <img alt={"exitIcon"} className={styles.aboutExitLogo} src={exitIcon} onClick={this.closeModal}/>
                    <div id={"aboutHeaderSpacing"} className={styles.aboutHeaderSpacing}></div>
                    <div id={"aboutLogoDiv"} className={styles.aboutLogoContainer}>
                        <div id={"aboutHeader"} className={styles.aboutHeader}></div>
                        <img alt={"bigLogo"} className={styles.aboutLogo} src={bigLogo}/>
                    </div>
                    <div className={styles.aboutSpacing}></div>
                    <div id={"aboutTitle"} className={styles.aboutTitle}>
                        חג עצמאות שמח!
                    </div>
                    <div className={styles.aboutSpacing}></div>
                    <div id={"aboutBody"} className={styles.aboutBody}>
                        האפליקציה פותחה ע"י <span style={{fontWeight: 600}}>יחידת אופק 324</span>, היחידה
                        הטכנולוגית המבצעית של חיל האוויר, לטובת הצגת מיקום כלי הטיס בזמן אמת במהלך המטס החגיגי
                        של יום העצמאות לכבוד חגיגות 71 שנה למדינת ישראל
                    </div>
                    <div className={styles.aboutSpacing}></div>
                    <img alt={"iafLogo"} id={"iafLogo"} src={iafLogo} className={styles.iafLogo}/>
                    <div className={styles.aboutSpacing}></div>
                    <div className={styles.bottomText}>
                        לידיעתכם, ייתכנו שינוים בלוחות הזמנים
                    </div>
                    <div id={"aboutBottomLink"} className={styles.aboutBottomLink}>
                        <a id={"facebookLink"} href={"https://www.facebook.com/IsraeliAirForce.HE/"}>
                        </a>
                        <img alt={"facebookIcon"} src={facebookIcon} className={styles.aboutBottomImg}/>
                        <a id={"instagramLink"} href={"https://www.instagram.com/israeliairforcea/"}>
                        </a>
                        <img alt={"instagramIcon"} src={instagramIcon} className={styles.aboutBottomImg}/>
                        <a id={"twitterLink"} href={"https://twitter.com/iafsite"}>
                        </a>
                        <img alt={"twitterIcon"} src={twitterIcon} className={styles.aboutBottomImg}/>
                    </div>
                </Modal>
            </div>
        )
    }
}
