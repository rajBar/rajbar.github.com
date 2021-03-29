import React, {Component} from 'react';
import ReactToolTip from 'react-tooltip';
import '../Home/Home-style.css';
import GitHub from '../../icons/GitHub.png';
import LinkedIn from '../../icons/LinkedIn.png';
import Instagram from '../../icons/Instagram.png';
import Strava from '../../icons/Strava.png';
import Email from '../../icons/Email.png';


class BrowserTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <ReactToolTip effect={"solid"} place={"left"} id={"ToolTipLeft"} offset="{'right': 8}"
                              className="my-tooltip"/>
                <ReactToolTip effect={"solid"} place={"right"} id={"ToolTipRight"} offset="{'left': 6}"
                              className="my-tooltip"/>
                <table className="table">
                    <tbody>
                    <tr>
                        <td className="table-left">
                                <img
                                    className={this.props.selected === "github" ? "link-button-selected" : "link-button"}
                                    onMouseEnter={() => this.props.changeText("github", "", "r", "", "", "https://github.com/rajBar/")}
                                    onClick={() => this.props.changeText("github", "", "r", "", "", "https://github.com/rajBar/")}
                                    src={GitHub}
                                    data-tip="GitHub"
                                    data-for="ToolTipLeft"
                                /><br/>
                        </td>
                        <td className="table-right">
                            <a href="https://uk.linkedin.com/in/gulrajbariah" target="_blank" className="header-text">
                                <img
                                    className={this.props.selected === "linkedin" ? "link-button-selected" : "link-button"}
                                    onMouseEnter={() => this.props.changeText("linkedin", "Gulraj (", "R", ")‎‎‎ ‎", "iah", "https://uk.linkedin.com/in/gulrajbariah")}
                                    src={LinkedIn}
                                    data-tip="LinkedIn"
                                    data-for="ToolTipRight"
                                /><br/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-left">
                            <a href="mailto:me@raj.bar" target="_blank" className="header-text">
                                <img
                                    className={this.props.selected === "email" ? "link-button-selected" : "link-button"}
                                    onMouseEnter={() => this.props.changeText("email", "me@", "r", ".", "", "mailto:me@raj.bar")}
                                    src={Email}
                                    data-tip="E-mail"
                                    data-for="ToolTipLeft"
                                /><br/>
                            </a>
                        </td>
                        <td className="table-right">
                            <a href="https://www.instagram.com/rajbariah/?hl=en" target="_blank"
                               className="header-text">
                                <img
                                    className={this.props.selected === "instagram" ? "link-button-selected" : "link-button"}
                                    onMouseEnter={() => this.props.changeText("instagram", "@", "R", "", "iah", "https://www.instagram.com/rajbariah/?hl=en")}
                                    src={Instagram}
                                    data-tip="Instagram"
                                    data-for="ToolTipRight"
                                /><br/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-left">
                            <a href="https://rajbar.github.io/movies/" target="_blank" className="header-text">
                                <p className={this.props.selected === "movie-list" ? "link-button-selected" : "link-button"}
                                   onMouseEnter={() => this.props.changeText("movie-list", "", "r", ".", "/movies", "https://rajbar.github.io/movies/")}>
                                    Movie List
                                </p>
                            </a>
                        </td>
                        <td className="table-right">
                            <a href="https://www.strava.com/athletes/59236473" target="_blank" className="header-text">
                                <img
                                    className={this.props.selected === "strava" ? "link-button-selected" : "link-button"}
                                    onMouseEnter={() => this.props.changeText("strava", "", "R", "‎‎‎ ‎", "iah", "https://www.strava.com/athletes/59236473")}
                                    src={Strava}
                                    data-tip="Strava"
                                    data-for="ToolTipRight"
                                /><br/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-left">
                            <a href="https://rajbar.github.io/blogs/" target="_blank" className="header-text">
                                <p className={this.props.selected === "blogs" ? "link-button-selected" : "link-button"}
                                   onMouseEnter={() => this.props.changeText("blogs", "", "r", ".", "/blogs", "https://rajbar.github.io/blogs/")}>
                                    Blog
                                </p>
                            </a>
                        </td>
                        <td className="table-right">
                            <a href="https://rajbar.github.io/strava/" target="_blank" className="header-text">
                                <p className={this.props.selected === "strava-stats" ? "link-button-selected" : "link-button"}
                                   onMouseEnter={() => this.props.changeText("strava-stats", "", "r", ".", "/strava", "https://rajbar.github.io/strava/")}>
                                    Strava Stats
                                </p>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BrowserTable;
