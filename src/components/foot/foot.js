import React from 'react'
import "./foot.css"
import Card from './card.js'

export default function foot() {
    return (
        <div className='footer'>
            <div className="foot1">
                <Card content='Drompt Generator' /> <br />
                <Card content='Dweep Daily' /> <br />
                <Card content='All Contributors' /> <br />
                <Card content='DrYour data on Dweep.io' /> <br />
                <Card content='Contribute to Dweep' />
            </div>
            <div className="foot2">
                <Card content='Dweep.io' /> <br />
                <Card content='Made with love in India' /> <br />
                <Card content={
                    <div>
                        <i className="ri-linkedin-box-line"></i>
                        <i className="ri-instagram-line"></i>
                    </div>} /> <br />
                <Card content='hello@dweep.io' />
            </div>
        </div>
    )
}
