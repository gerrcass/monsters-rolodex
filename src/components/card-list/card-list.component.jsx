import React from 'react'
import Card from '../card/card.component'
import CardListStyles from './card-list.module.css'

const CardList = props => (
    <div className={CardListStyles.cardList}>
        {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
    </div>
)

export default CardList