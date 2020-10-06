import React, {Component} from 'react';
import './Home-style.css';
// import TextTransition from "react-text-transition/src/components/TextTransition";
import TextTransition, { presets } from "react-text-transition";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r: "r",
            prefix: "",
            suffix: "",
            middle: ".",
            link: "http://raj.Bar",
        }
    }

    changeText = (prefix, r, middle, suffix, link) => {
        this.setState({
            ...this.state,
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
        const other = "#484848"

        return (
            <div style={{ marginTop: "50px" }}>
                <a href={link} target="_blank" style={{ textDecoration: "none", color: "black"}}>
                    <section style={{ fontSize: 90 }}>
                        <TextTransition
                            text={prefix}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            style={{ color: other }}
                        />
                        <TextTransition
                            text={r}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            style={{ color: "black", fontWeight: "bold" }}
                        />
                        <TextTransition
                            text="aj"
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            style={{ color: "black", fontWeight: "bold" }}
                        />
                        <TextTransition
                            text={middle}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            delay={100}
                            style={{ color: other }}
                        />
                        <TextTransition
                            text="Bar"
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            style={{ color: "black", fontWeight: "bold" }}
                        />
                        <TextTransition
                            text={suffix}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                            delay={200}
                            style={{ color: other }}
                        />
                    </section>
                </a>
                <div style={{ marginTop: "80px" }}>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("", "r","", "", "https://github.com/rajBar/")}>GitHub</p>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("Gulraj (", "R", ")‎‎‎ ‎", "iah", "https://uk.linkedin.com/in/gulrajbariah")}>LinkedIn</p>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("@", "R", "", "iah", "https://www.instagram.com/rajbariah/?hl=en")}>Instagram</p>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("", "R", "‎‎‎ ‎", "iah", "https://www.strava.com/athletes/59236473")}>Strava Account</p>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("", "r", "", ".github.io/strava-stats", "https://rajbar.github.io/strava-stats/")}>Strava Stats</p>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("", "r", "", "iah@gmail.com‎‎‎", "mailto:me@rajbariah@gmail.com")}>E-mail</p>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("", "r", "", ".github.io/movie-list", "https://rajbar.github.io/movie-list/")}>Movie List</p>
                    <p style={{ cursor: "pointer" }} onClick={() => this.changeText("", "r", "", ".github.io/blogs", "https://rajbar.github.io/blogs/")}>Blog</p>
                </div>
            </div>
        )
    }
}

export default Home;
