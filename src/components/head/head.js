import React from 'react'
import "./head.css"
// import Img from './image.png'

export default function head() {
    return (
        <div className='header'>
            <div className="head1">
                <h1>An inspiring design delivered to your inbox every morning</h1>
                <p>
                    Our team scouts the internet for the best designs, illustrations and
                    art and delivers a truly inspiring one every day to your inbox
                </p>
                <strong>Show me how it looks</strong>
                <form>
                    <input type="text" placeholder="Your e-mail address" />
                    <button>Register Now</button>
                </form>
                <div className="spanData">
                    <span>Free - No Spam - No Data Sharing</span>
                </div>
            </div>
            <div className="head2">
                <img src={require('./image.png')} alt='img' />
            </div>
        </div>
    )
}
