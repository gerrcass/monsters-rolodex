import React from 'react'
import Card from '../card/card.component'

const CardList = ({monsters}) => {
    return <div>
        {
            monsters.map(monster =>{
                return <Card key={monster.id} name={monster.name} email={monster.email} />
            })

        }
    </div>
}

export default CardList