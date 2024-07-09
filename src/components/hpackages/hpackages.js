import React from 'react'
import './hpackages.css'
import { Link } from 'react-router-dom'

function Hpackages() {
    return (
        <div className="family-tour-container f">
            <div className="">
                <h3>Why choose us?</h3>

               <Link to="/explore-more"> <input type="button" className="button" value="Explore more"></input></Link> &nbsp; &nbsp;
                <div className='gh content'>
                    <h3 >Exclusive Packages!!!</h3>

                  <Link to ="/packages">  <input type="button" className="button1" value="Click here"></input></Link>

                </div>

            </div>
        </div>
    )
}

export default Hpackages
