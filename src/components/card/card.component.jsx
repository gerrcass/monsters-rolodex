import React from 'react'

const Card = ({name,email}) => {
    return <div>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}

export default Card