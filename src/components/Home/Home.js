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
            selected: "",
            r: "r",
            prefix: "",
            suffix: "",
            middle: ".",
            link: "http://raj.Bar",
        }
    }

    changeText = (buttonSelected, prefix, r, middle, suffix, link) => {
        this.setState({
            ...this.state,
            selected: buttonSelected,
            r: r,
            prefix: prefix,
            suffix: suffix,
            middle: middle,
            link: link,
        });
    }

    render() {
        const prefix = this.state.prefix;
        const suffix = this.state.suffix;
        const middle = this.state.middle;
        const r = this.state.r;
        const link = this.state.link;

        return (
            <div style={{ marginTop: "50px" }}>
                <a href={link} target="_blank" style={{ textDecoration: "none", color: "black"}}>
                    <section style={{ fontSize: 90 }}>
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
                <div style={{ marginTop: "40px" }}>
                    <img className={this.state.selected === "github" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("github", "", "r","", "", "https://github.com/rajBar/")} src={GitHub} /><br />
                    <img className={this.state.selected === "linkedin" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("linkedin", "Gulraj (", "R", ")‎‎‎ ‎", "iah", "https://uk.linkedin.com/in/gulrajbariah")} src={LinkedIn} /><br />
                    <img className={this.state.selected === "instagram" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("instagram", "@", "R", "", "iah", "https://www.instagram.com/rajbariah/?hl=en")} src={Instagram} /><br />
                    <img className={this.state.selected === "strava" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("strava", "", "R", "‎‎‎ ‎", "iah", "https://www.strava.com/athletes/59236473")} src={Strava} /><br />
                    <p className={this.state.selected === "strava-stats" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("strava-stats", "", "r", "", ".github.io/strava-stats", "https://rajbar.github.io/strava-stats/")}>Strava Stats</p>
                    <img className={this.state.selected === "email" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("email", "", "r", "", "iah@gmail.com‎‎‎", "mailto:me@rajbariah@gmail.com")} src={Email} /><br />
                    <p className={this.state.selected === "movie-list" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("movie-list", "", "r", "", ".github.io/movie-list", "https://rajbar.github.io/movie-list/")}>Movie List</p>
                    <p className={this.state.selected === "blogs" ? "link-button-selected" : "link-button"} onClick={() => this.changeText("blogs", "", "r", "", ".github.io/blogs", "https://rajbar.github.io/blogs/")}>Blog</p>
                </div>
            </div>
        )
    }
}

export default Home;
