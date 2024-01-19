import React from 'react'
import { useState } from 'react'
import './Button.scss'
const Button = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false)

    return (
        <div className='add-button'>
            <button type='button' onClick={() => setIsOpenPopup(true)}>
                Add item
            </button>

        </div>
    )
}

export default Button