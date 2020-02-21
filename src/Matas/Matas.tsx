import React from "react";
import {SwipeableDrawer, withStyles} from "@material-ui/core";
import Menu, {TabContent} from "../Menu/Menu";
import {Headline} from "../Headline/Headline";
import {MenuButton} from "../Menu/MenuButton";

const styles = {
    paper: {
        height: "calc(100% - 64px)",
        top: 64,
        width: "100%"
    },
    root: {
        background: "transparent"
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
}

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

    public toggleSidebar(isOpen: boolean) {
        this.setState({isSidebarOpen: isOpen});
    }

    render(): React.ReactNode {
        return (
            <div>
                <Headline menuButton={
                    <MenuButton onClick={this.handleSidebarOpen} isOpen={this.state.isSidebarOpen}>

                    </MenuButton>}>
                </Headline>
                {/*Tested on my phone */}
                <SwipeableDrawer
                    onClose={() => this.toggleSidebar(false)}
                    onOpen={() => this.toggleSidebar(true)}
                    anchor={"right"}
                    open={this.state.isSidebarOpen}
                    classes={{paper: this.props.classes.paper}}
                    hideBackdrop={true}
                    ModalProps={
                        {
                            BackdropProps: {
                                classes: {
                                    root: this.props.classes.root,
                                }
                            }
                        }
                    }

                    disableBackdropTransition={true}
                >
                    <Menu tabs={tabContents}>

                    </Menu>
                </SwipeableDrawer>
                <span>{"ניצן הגבר רצח"}</span>
            </div>
        );
    }
}

export default withStyles(styles)(Matas);
