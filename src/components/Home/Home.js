import React, {Component} from 'react';
import './Home-style.css';
import TextTransition, { presets } from "react-text-transition";
import GitHub from '../../icons/GitHub.png';
import LinkedIn from '../../icons/LinkedIn.png';
import Instagram from '../../icons/Instagram.png';
import Strava from '../../icons/Strava.png';
import Email from '../../icons/Email.png';


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
        const url = 'https://maker.ifttt.com/trigger/Notifies-phone/with/key/b_Yu8_AU_JIDYDYR_WXF5-?value1=' + navigator.platform + "&value2=" + ipv4;
        if(!this.state.alerted) {
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

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && buttonSelected === "linkedin" ) {
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
            <div style={{ marginTop: "50px" }}>
                <a href={link} target="_blank" className="header-text">
                    <section style={{ fontSize: "7vw" }}>
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
                <div
                    className={this.state.selected === "raj.Bar" ? "raj-bar-large" : "raj-bar-small"}
                    onClick={() => this.changeText("raj.Bar", "", "r",".", "", "")}
                >
                    {/*{`${this.state.selected === "raj.Bar" ? "↓ Select below ↓" : "↑ Link above ↑"}`.split("").map((n, i) => (*/}
                    {/*    n == " " ?*/}
                    {/*    <TextTransition*/}
                    {/*        key={i}*/}
                    {/*        text="_"*/}
                    {/*        delay={250 + (i * 150)}*/}
                    {/*        overflow*/}
                    {/*        inline*/}
                    {/*        style={{ visibility: "hidden" }}*/}
                    {/*    />*/}
                    {/*    :*/}
                    {/*    <TextTransition*/}
                    {/*        key={i}*/}
                    {/*        text={n}*/}
                    {/*        delay={250 + (i * 150)}*/}
                    {/*        overflow*/}
                    {/*        inline*/}
                    {/*    />*/}
                    {/*))}*/}
                    <TextTransition
                        text={this.state.selected === "raj.Bar" ? "↓ Select below ↓" : "↑ Link above ↑"}
                        springConfig={presets.wobbly}
                        inline
                        overflow
                        delay={200}
                        className="other-text"
                    />
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="table-left">
                                <img
                                    className={this.state.selected === "github" ? "link-button-selected" : "link-button"}
                                    onClick={() => this.changeText("github", "", "r","", "", "https://github.com/rajBar/")} src={GitHub} /><br />
                            </td>
                            <td className="table-right">
                                <img className={this.state.selected === "linkedin" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("linkedin", "Gulraj (", "R", ")‎‎‎ ‎", "iah", "https://uk.linkedin.com/in/gulrajbariah")} src={LinkedIn} /><br />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-left">
                                <img className={this.state.selected === "strava" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("strava", "", "R", "‎‎‎ ‎", "iah", "https://www.strava.com/athletes/59236473")} src={Strava} /><br />
                            </td>
                            <td className="table-right">
                                <img className={this.state.selected === "instagram" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("instagram", "@", "R", "", "iah", "https://www.instagram.com/rajbariah/?hl=en")} src={Instagram} /><br />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-left">
                                <p className={this.state.selected === "movie-list" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("movie-list", "", "r", ".", "/movies", "https://rajbar.github.io/movies/")}>Movie List</p>
                            </td>
                            <td className="table-right">
                                <img className={this.state.selected === "email" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("email", "me@", "r", ".", "", "mailto:me@raj.bar")} src={Email} /><br />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-left">
                                <p className={this.state.selected === "blogs" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("blogs", "", "r", ".", "/blogs", "https://rajbar.github.io/blogs/")}>Blog</p>
                            </td>
                            <td className="table-right">
                                <p className={this.state.selected === "strava-stats" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("strava-stats", "", "r", ".", "/strava", "https://rajbar.github.io/strava/")}>Strava Stats</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;
