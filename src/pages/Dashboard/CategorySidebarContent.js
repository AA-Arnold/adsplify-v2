import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
    changeLayout,
    changeLayoutWidth,
    changeSidebarTheme,
    changeSidebarType,
    changePreloader
} from "../../store/actions";
import { Col, Input, Label } from "reactstrap";

class CategorySidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {

            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }

        }
    }

    initMenu() {
        new MetisMenu("#side-menu");

        var matchingMenuItem = null;
        var ul = document.getElementById("side-menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div id="sidebar-menu">

                    <ul className="metismenu list-unstyled" id="side-menu">


                    <h6 > Filter By</h6>
                    <hr/>
                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                             
                                <span className="ml-1">{this.props.t('Category')}</span>
                            </Link>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><Link to="auth-login">{this.props.t('All categories')}</Link></li>
                                <li><Link to="auth-register">{this.props.t('Music')}</Link></li>
                                <li><Link to="auth-recoverpw">{this.props.t('Lifestyle')}</Link></li>
                                <li><Link to="auth-lock-screen">{this.props.t('Food')}</Link></li>
                                <li><Link to="auth-login">{this.props.t('Blogging')}</Link></li>
                                <li><Link to="auth-register">{this.props.t('Entertainment')}</Link></li>
                                <li><Link to="auth-recoverpw">{this.props.t('Technology')}</Link></li>
                                <li><Link to="auth-lock-screen">{this.props.t('Dance')}</Link></li>
                                <li><Link to="auth-login">{this.props.t('Comedy')}</Link></li>
                                <li><Link to="auth-register">{this.props.t('Model')}</Link></li>
                                <li><Link to="auth-recoverpw">{this.props.t('Fashion')}</Link></li>
                            </ul>
                        </li>
                        <hr/>

                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                           
                                <span className="ml-1">{this.props.t('Location')}</span>
                            </Link>
                            <ul className="sub-menu" aria-expanded="false">
                                <div className="search-box chat-search-box">
                                    <Input type="text" className="form-control" placeholder="Select locations" />
                                </div>
                            </ul>
                        </li>

                        <hr/>
                           <li>
                            <Link to="/#" className="has-arrow waves-effect">
                          
                                <span className="ml-1">{this.props.t('Influencer rate')}</span>
                            </Link>
                            <ul className="sub-menu" aria-expanded="false">
                        
                        <div className="control-group" id="toastTypeGroup">
                          <div className="controls mb-4">
                           

                            <div className="custom-control custom-radio mb-2">
                              <Input
                                type="radio"
                                id="radio1"
                                name="toastType"
                                className="custom-control-input"
                                value="success"
                                defaultChecked
                              />
                              <Label
                                className="custom-control-label"
                                for="radio1"
                              >
                                $50 and below
                              </Label>
                            </div>

                            <div className="custom-control custom-radio mb-2">
                              <Input
                                type="radio"
                                id="radio2"
                                name="toastType"
                                className="custom-control-input"
                                value="info"
                              />
                              <Label
                                className="custom-control-label"
                                for="radio2"
                              >
                                $50 - $150
                              </Label>
                            </div>

                            <div className="custom-control custom-radio mb-2">
                              <Input
                                type="radio"
                                id="radio3"
                                name="toastType"
                                className="custom-control-input"
                                value="warning"
                              />
                              <Label
                                className="custom-control-label"
                                for="radio3"
                              >
                                $150 - $300


                              </Label>
                            </div>

                            <div className="custom-control custom-radio mb-2">
                              <Input
                                type="radio"
                                id="radio4"
                                name="toastType"
                                className="custom-control-input"
                                value="error"
                              />
                              <Label
                                className="custom-control-label"
                                for="radio4"
                              >
                                $300 and Above
                              </Label>
                            </div>
                          </div>
                        </div>
                   
                    
                            </ul>
                        </li>

                      
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return { ...state.Layout };
};

export default withRouter(connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader
})(withNamespaces()(CategorySidebarContent)));
