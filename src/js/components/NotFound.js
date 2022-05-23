import React from 'react'
import sorrySrc from '../../img/sad.svg';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <img src={sorrySrc} alt="This page doesn't exist!" />
            <h1>Oops! I think you're lost...</h1>
        </div> 
    )
}
