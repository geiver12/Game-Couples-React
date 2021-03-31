import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo">
                    React-Game-Couples
                 </div>
                <button className="button-reset" onClick={this.props.ResetGame}>
                    Reset
                 </button>
                <div className="titulo">
                    Fails:{this.props.NumberFails}
                 </div>
            </header>
        );
    }
}