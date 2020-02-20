import {Headline} from "../headline/Headline";
import React from "react";
import {Drawer, withStyles} from "@material-ui/core";
import Menu, {TabContent} from "../Menu/Menu";

const styles = {
    paper: {
        height: "calc(100% - 64px)",
        top: 64,
        width: "100%"
    }
};

export const tabContents: TabContent[] = [
    {
        title: 'מקומות',
        component: <div>מקומות</div>
    },
    {
        title: 'כלי טיס',
        component: <div>כלי טיס</div>
    }
];

export interface MatasState {
    isSidebarOpen: boolean;
};

class Matas extends React.Component<any, MatasState> {

    constructor(props: any) {
        super(props);

        this.state = {
            isSidebarOpen: false
        };

        this.handleSidebarOpen = this.handleSidebarOpen.bind(this);
    }

    public handleSidebarOpen() {
        this.setState({isSidebarOpen: !this.state.isSidebarOpen});
    }

    render(): React.ReactNode {
        let drawerClass: any = this.props.classes.paper;
        return (
            <div>
                <Headline isMenuActive={this.state.isSidebarOpen} menuButtonAction={this.handleSidebarOpen}></Headline>
                <Drawer anchor={"right"} open={this.state.isSidebarOpen} classes={{paper: drawerClass}}>
                    <Menu tabs={tabContents}></Menu>
                </Drawer>
                <span>{"ניר הגבר רצח"}</span>
            </div>
        );
    }
}

export default withStyles(styles)(Matas);
