import React from 'react'
import './Button.css'

export default function Button({children}) {
    console.log(children);
    return (
        <button className='btn'>
            {children}
        </button>
    )
}
