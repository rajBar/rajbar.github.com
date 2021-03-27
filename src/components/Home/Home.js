import React, {Component} from 'react';
import './Home-style.css';
import TextTransition, {presets} from "react-text-transition";
import {BrowserView, MobileView} from "react-device-detect";
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
        }
    }

    async notifyPhone() {
        const publicIp = require('public-ip');
        const ipv4 = await publicIp.v4();

        const url = 'https://raj.bariah.com:2010/location?ipAddress=' + ipv4 + "&device=" + navigator.platform + "&site=raj.Bar";
        if (!this.state.alerted) {
            fetch(url, {
                method: 'post'
            });
            this.setState({
                ...this.state,
                alerted: true,
            });
        }
    }

    changeText = (buttonSelected, prefix, r, middle, suffix, link) => {

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && buttonSelected === "linkedin") {
            link = "linkedin://profile/gulrajbariah";
        }

        this.setState({
            ...this.state,
            selected: buttonSelected,
            r: r,
            prefix: prefix,
            suffix: suffix,
            middle: middle,
            link: link,
        });
    };

    render() {
        const prefix = this.state.prefix;
        const suffix = this.state.suffix;
        const middle = this.state.middle;
        const r = this.state.r;
        const link = this.state.link;

        // this.notifyPhone();

        return (
            <div style={{marginTop: "50px"}}>
                <a href={link} target="_blank" className="header-text">
                    <section style={{fontSize: "7vw"}}>
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
                        className={this.state.selected === "raj.Bar" ? "raj-bar-large" : "raj-bar-small"}
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
                    <BrowserTable changeText={this.changeText} selected={this.state.selected}/>
                </BrowserView>
                <MobileView>
                    <MobileTable changeText={this.changeText} selected={this.state.selected}/>
                </MobileView>
            </div>
        )
    }
}

export default Home;
