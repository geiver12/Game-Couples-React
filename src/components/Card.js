

import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';

export default class Card extends Component {

    render() {
        return (
            <div className="card" onClick={this.props.SelectCard}>
                <ReactCardFlip isFlipped={this.props.CurrentCompare || this.props.lookup} >
                    <div className="cover" key="front">
                    </div>
                    <div className="content" key="back">
                        <i className={"fa " + this.props.icono + " fa-5x"}></i>
                    </div>
                </ReactCardFlip>
            </div >
        );
    }
}