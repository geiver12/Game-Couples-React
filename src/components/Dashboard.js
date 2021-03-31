import React, { Component } from 'react';
import Card from './Card';


export default class Dashboard extends Component {
    render() {
        return (
            < div className="Dashboard" >
                {
                    this.props.Mallet.map((card, index) => {
                        const CurrentCompare = this.props.SelectCouple.indexOf(card) > -1;
                        return <Card
                            key={index}
                            icono={card.icono}
                            CurrentCompare={CurrentCompare}
                            SelectCard={() => this.props.SelectCard(card)}
                            lookup={card.lookup}
                        />
                    })
                }
            </div >
        )
    }
};
