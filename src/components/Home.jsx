import React from 'react'
import './home.css'
import bg1 from '../images/bg-intro-desktop.svg'
import bg2 from '../images/bg-intro-mobile.svg'
import mockup from '../images/image-mockups.png'

const Home = () => {
    return (
        <div className='container'>
            <div className="card-info">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online.
                    Your Easybank account will be a
                    one-stop-shop for spending, saving,
                    budgeting, investing, and much more.</p>
                <button className="btn">Request Invite</button>
            </div>
            <div className="card-bg">
                <img className='bg-desktop' src={bg1} alt="background" />
                <img className='bg-mobile' src={bg2} alt="background" />
                <img className='mockup' src={mockup} alt="mobile background" />
            </div>
        </div>
    )
}

export default Home
