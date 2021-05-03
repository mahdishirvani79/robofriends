import React from 'react'

const Card = ({id , userName, email}) =>
{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'image' src={`https://robohash.org/${id}?200x200`}/>
            <h1>{userName}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card