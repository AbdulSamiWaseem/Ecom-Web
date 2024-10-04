import React from 'react'
import mens from '../../assets/shopMens.jpg'
import Womens from '../../assets/shopWomens.jpg'
import './directory.css'


const Directory = () => {
    return (
        <div className='Directory'>
            <div className='item1'>
                <a>
                <h3 style={{color:"white"}}>Shop Mens</h3>
                </a>

            </div>
            <div className='item2'>
                <a>
                <h3 style={{color:"white"}}>Shop Womens</h3>
                </a>

            </div>

        </div>
    )
}

export default Directory
