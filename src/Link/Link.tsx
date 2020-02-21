import styles from "./Link.module.css";
import React from "react";

export function Link(props: {href: string, src: string}) {
    return (
        <a href={props.href}>
            <img alt={props.href} src={props.src} className={styles.linkImage}/>
        </a>
    )
}
