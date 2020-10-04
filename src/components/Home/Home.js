import React, {Component} from 'react';
import './Home-style.css';
// import TextTransition from "react-text-transition/src/components/TextTransition";
import TextTransition, { presets } from "react-text-transition";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prefix: "r",
            suffix: "",
            middle: ".",
            link: "http://raj.Bar",
        }
    }

    changeText = (prefix, middle, suffix, link) => {
        this.setState({
            ...this.state,
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
        const link = this.state.link;

        return (
            <div style={{ marginTop: "50px" }}>
                <a href={link} style={{ textDecoration: "none", color: "black"}}>
                    <section style={{ fontSize: 90 }}>
                        <TextTransition
                            text={prefix}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                        />
                        aj
                        <TextTransition
                            text={middle}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                        />
                        Bar
                        <TextTransition
                            text={suffix}
                            springConfig={presets.wobbly}
                            inline
                            overflow
                        />
                    </section>
                </a>
                <div style={{ marginTop: "80px" }}>
                    <p onClick={() => this.changeText("r", "", "", "https://github.com/rajBar/")}>GitHub</p>
                    <p onClick={() => this.changeText("Gulraj (R", ")‎‎‎ ‎", "iah", "https://uk.linkedin.com/in/gulrajbariah")}>LinkedIn</p>
                    <p onClick={() => this.changeText("@R", "", "iah", "https://www.instagram.com/rajbariah/?hl=en")}>Instagram</p>
                    <p onClick={() => this.changeText("R", "‎‎‎ ‎", "iah", "https://www.strava.com/athletes/59236473")}>Strava Account</p>
                    <p onClick={() => this.changeText("r", "", ".github.io/strava-stats", "https://rajbar.github.io/strava-stats/")}>Strava Stats</p>
                    <p onClick={() => this.changeText("me@r", ".", "‎‎‎ ‎(Not Active)", "mailto:me@raj.Bar")}>E-mail</p>
                    <p onClick={() => this.changeText("r", "", ".github.io/movie-list", "https://rajbar.github.io/movie-list/")}>Movie List</p>
                    <p onClick={() => this.changeText("r", "", ".github.io/blogs", "https://rajbar.github.io/blogs/")}>Blog</p>
                </div>
            </div>
        )
    }
}

export default Home;
