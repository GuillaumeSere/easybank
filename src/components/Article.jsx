import React from 'react'
import './article.css'
import image1 from '../images/image-currency.jpg'
import image2 from '../images/image-restaurant.jpg'
import image3 from '../images/image-plane.jpg'
import image4 from '../images/image-confetti.jpg'

const Article = () => {
    return (
        <div className='container-article'>
            <h1>Latest Articles</h1>
            <div className="content-card">
                <div className="card-article">
                    <img src={image1} alt="currency" />
                    <div className="card-information">
                        <span>By Claire Robinson</span>
                        <div className="title">Receive money in any currency with no fees</div>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
                </div>

                <div className="card-article">
                    <img src={image2} alt="restaurant" />
                    <div className="card-information">
                        <span>By Wilson Hutton</span>
                        <div className="title">Treat yourself without worrying about money</div>
                        <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </div>
                </div>

                <div className="card-article">
                    <img src={image3} alt="plane" />
                    <div className="card-information">
                        <span>By Wilson Hutton</span>
                        <div className="title">Take your Easybank card wherever you go</div>
                        <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </div>
                </div>

                <div className="card-article">
                    <img src={image4} alt="confetti" />
                    <div className="card-information">
                        <span>By Claire Robinson</span>
                        <div className="title">Our invite-only Beta accounts are now live!</div>
                        <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
