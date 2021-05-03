import React from 'react'
import Card from './Card'

const CardsList = ({robots}) =>
{
    return(
        <div>
        {
            robots.map((user,i) => {
            return(
                <Card key={user.id} id={user.id} userName={user.username} email={user.email}/>
            )
            })
        }
        </div>
    )
}

export default CardsList