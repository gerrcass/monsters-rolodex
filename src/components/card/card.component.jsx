import React from 'react'
import CardStyles from './card.module.css'
const Card = props => (
        <div className={CardStyles.card}>
            <img alt="Robot" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )

export default Card