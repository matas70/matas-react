import React from "react";
import {Tab, Tabs, withStyles} from "@material-ui/core";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const tabsStyle = {
    root: {
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)",
    },
    tabRoot: {
        minHeight: "65px"
    },
    wrapper: {
        fontSize: "13.5pt",
        color: "black"
    },
    wrapperSelected: {
        fontSize: "13.5pt",
        color: "rgb(59, 181, 242)",
        fontFamily: "Heebo-Bold"
    },
    indicator: {
        background: "#3bb5f2",
        height: "0.4em"
    }
}

export type TabContent = { title: string, component: React.ReactNode };

interface MenuState {
    currentTabIndex: number
}

interface MenuProps {
    tabs: TabContent[];
    classes?: any;
}

class Menu extends React.Component<MenuProps, MenuState> {

    classes = this.props.classes;

    constructor(props: any) {
        super(props);

        this.state = {
            currentTabIndex: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    private buildTabs(): React.ReactNode {
        let index: number = 0;
        return this.props.tabs.map((tab: TabContent) => {
            return <Tab key={index++} label={tab.title} component={Link} to={tab.title} textColor={"primary"}
                        classes={{
                            wrapper: this.state.currentTabIndex === index - 1 ?
                                this.classes.wrapperSelected : this.classes.wrapper, root: this.classes.tabRoot
                        }}>
            </Tab>;
        });
    }

    private buildTabsRoutes(): React.ReactNode {
        let index: number = 0;
        return <Switch>{
            this.props.tabs.map((tab: TabContent) => {
                return <Route key={index++} path={"/" + tab.title}>{tab.component}</Route>;
            })
        }
        </Switch>
    }

    private handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        this.setState({currentTabIndex: newValue});
    }

    render(): React.ReactNode {
        return (
            <BrowserRouter>
                <Tabs value={this.state.currentTabIndex} onChange={this.handleChange} variant={"fullWidth"}
                      classes={{indicator: this.classes.indicator, root: this.classes.root}}>
                    {this.buildTabs()}
                </Tabs>
                {this.buildTabsRoutes()}
            </BrowserRouter>
        );
    }
}

export default withStyles(tabsStyle)(Menu);