import 'babel-polyfill';
import React, {Component} from "react";
import ReactDOM from "react-dom";

require("../scss/app.scss");

import Talents from './components/talents.jsx';

const loader = jQuery('#loader');

export default class App extends React.Component {
    componentDidMount() {
		loader.hide();
    }

    render() {
        loader.show();

        return (
            <Talents/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("talent-app"));