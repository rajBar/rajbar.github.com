import React, {Component} from 'react';
import './Home-style.css';
import TextTransition, {presets} from "react-text-transition";
import {BrowserView, MobileView, isMobile, mobileVendor, mobileModel} from "react-device-detect";
import {publicIpv4} from 'public-ip';
import BrowserTable from "../BrowserTable/BrowserTable";
import MobileTable from "../MobileTable/MobileTable";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "raj.Bar",
            r: "r",
            prefix: "",
            suffix: "",
            middle: ".",
            link: "",
            alerted: false,
            numberOfSelections: 0,
        }
    }

    async notifyPhone() {
        const ipv4 = await publicIpv4();
        const platform = isMobile ? `${mobileVendor} ${mobileModel}` : navigator.platform;

        // const url = 'https://raj.bariah.com:2010/location?ipAddress=' + ipv4 + "&device=" + navigator.platform + "&site=raj.Bar";
        const url = 'https://maker.ifttt.com/trigger/site_visited/with/key/b_Yu8_AU_JIDYDYR_WXF5-?value1=' + ipv4 + "&value2=" + platform + "&value3=raj.Bar";
        if (!this.state.alerted) {
            fetch(url, {
                method: 'post'
            }).catch(e => console.log(e));
            this.setState({
                ...this.state,
                alerted: true,
            });
        }
    }

    removeAlert() {
        this.setState({
            ...this.state,
            numberOfSelections: 6,
        });
    }

    changeText = (buttonSelected, prefix, r, middle, suffix, link) => {
        let { numberOfSelections } = this.state;
        numberOfSelections+=1;

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && buttonSelected === "linkedin") {
            link = "linkedin://profile/gulrajbariah";
        }

        if (numberOfSelections === 4 && isMobile) {
            alert("After the icon is selected, select the link above");
        }

        this.setState({
            ...this.state,
            selected: buttonSelected,
            r: r,
            prefix: prefix,
            suffix: suffix,
            middle: middle,
            link: link,
            numberOfSelections,
        });
    };

    render() {
        const prefix = this.state.prefix;
        const suffix = this.state.suffix;
        const middle = this.state.middle;
        const r = this.state.r;
        const link = this.state.link;

        this.notifyPhone();

        return (
            <div style={{marginTop: "50px"}}>
                <a onClick={() => this.removeAlert()} href={link} target="_blank" className="header-text">
                    <section className={isMobile ? "raj-bar-mobile" : "raj-bar"}>
                        <TextTransition
                            text={prefix}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            className="other-text"
                        />
                        <TextTransition
                            text={r}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            className="main-text"
                        />
                        <TextTransition
                            text="aj"
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            className="main-text"
                        />
                        <TextTransition
                            text={middle}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            delay={100}
                            className="other-text"
                        />
                        <TextTransition
                            text="Bar"
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            className="main-text"
                        />
                        <TextTransition
                            text={suffix}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            delay={200}
                            className="other-text"
                        />
                    </section>
                </a>
                <MobileView>
                    <div
                        className={this.state.selected === "raj.Bar" ? "info-text" : "info-text-select"}
                        onClick={() => this.changeText("raj.Bar", "", "r", ".", "", "")}
                    >
                        <TextTransition
                            text={this.state.selected === "raj.Bar" ? "↓ Select below ↓" : "↑ Link above ↑"}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            delay={200}
                            className="other-text"
                        />
                    </div>
                </MobileView>
                <BrowserView>
                    <BrowserTable changeText={this.changeText} selected={this.state.selected} />
                </BrowserView>
                <MobileView>
                    <MobileTable changeText={this.changeText} selected={this.state.selected} />
                </MobileView>
            </div>
        )
    }
}

export default Home;
