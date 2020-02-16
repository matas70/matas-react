import styles from "./About.module.css";
import exitIcon from "../../icons/aboutExitLogo.svg";
import bigLogo from "../../icons/bigLogo.png";
import iafLogo from "../../icons/iaf-small.png";
import facebookIcon from "../../icons/facebook.svg";
import instagramIcon from "../../icons/instagram.svg";
import twitterIcon from "../../icons/twitter.svg";
import React from "react";

export function About(props: { onExit: () => void }) {
    return (
        <div className={styles.aboutContainer}>
            <img alt={"exitIcon"} className={styles.aboutExitLogo} src={exitIcon} onClick={props.onExit}/>
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
                    <img alt={"facebookIcon"} src={facebookIcon} className={styles.aboutBottomImg}/>
                </a>
                <a id={"instagramLink"} href={"https://www.instagram.com/israeliairforcea/"}>
                    <img alt={"instagramIcon"} src={instagramIcon} className={styles.aboutBottomImg}/>
                </a>
                <a id={"twitterLink"} href={"https://twitter.com/iafsite"}>
                    <img alt={"twitterIcon"} src={twitterIcon} className={styles.aboutBottomImg}/>
                </a>
            </div>
        </div>
    );
}
