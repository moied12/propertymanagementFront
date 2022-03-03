import { Apartment, Cancel, Gavel, Group, House, LineStyle, LocalAtm, Settings, Timeline, TrendingUp } from "@material-ui/icons";
import { Menu } from '@material-ui/icons';
import React, { Component } from 'react';
import Link from 'next/link';
import Router from "next/router";


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: false
        }
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    hideDrawer = () => {
        this.setState({ drawer: !this.state.drawer })
    }
    render() {

        return (

            <div className="sidebar" id={this.state.drawer ? "hidden" : ""}>

                <div className="sidebarWrapper" id={this.state.drawer ? "hidden" : ""}>
                    <div className="sidebarMenu" id={this.state.drawer ? "hidden" : ""}>
                        <div className="sidebarTitle" id={this.state.drawer ? "hidden" : ""}>
                            Dashboard
                            <button className='drawerbutton' onClickCapture={this.hideDrawer.bind(this)}>
                                <Cancel />
                            </button>
                        </div>
                        <ul className="sidebarList" id={this.state.drawer ? "hidden" : ""}>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""}>
                                <button className='drawerbutton' id={this.state.drawer ? "hidden" : ""} onClickCapture={this.hideDrawer.bind(this)}>
                                    <Menu />
                                </button>
                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/")} >
                                <LineStyle className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Home
                                </div>
                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/property/residential")} >
                                <Apartment className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Residential
                                </div>

                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/property/commercial")} >
                                <House className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Commercial
                                </div>

                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/user/users")} >
                                <Group className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    User Management
                                </div>
                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/customer/customers")} >
                                <Group className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Customer Management
                                </div>
                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/sale/sales")} >
                                <TrendingUp className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Sales
                                </div>
                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/sale/sales")} >
                                <Gavel className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Rentals
                                </div>
                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/sale/sales")} >
                                <LocalAtm className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Cheques
                                </div>
                            </li>
                            <li className="sidebarListItem" id={this.state.drawer ? "hidden" : ""} onClickCapture={() => Router.push("/sale/sales")} >
                                <Settings className='sidebarIcon' id={this.state.drawer ? "hidden" : ""} />
                                <div className="sidebarItemTitle" id={this.state.drawer ? "hidden" : ""}>
                                    Settings
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }






}
export default Sidebar;