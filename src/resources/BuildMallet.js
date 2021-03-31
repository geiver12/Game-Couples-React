import shuffle from 'lodash.shuffle';
import FontAwesomeClasss from './FontAwesomeClass';
const CARDSIZE = 20;

export default () => {
    const FontAwesomeClass = FontAwesomeClasss();
    let Cards = [];

    while (Cards.length < CARDSIZE ) {
        const index = Math.floor(Math.random() * 30);
        const Card = {
            icono: FontAwesomeClass.splice(index, 1)[0],
            lookup: false
        };
        Cards.push(Card);
        Cards.push({...Card});
    }
    
    return shuffle(Cards);
};