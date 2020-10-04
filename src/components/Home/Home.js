import React, {Component} from 'react';
import './Home-style.css';
// import TextTransition from "react-text-transition/src/components/TextTransition";
import TextTransition, { presets } from "react-text-transition";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rajBar: ".",
        }
    }

    render() {
        const rajBar = this.state.rajBar;

        return (
            <h2>
                <TextTransition
                    text={rajBar}
                    spring={presets.gentle}
                />
            </h2>
        )
    }
}

export default Home;
