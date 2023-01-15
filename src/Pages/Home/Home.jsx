import React from 'react'
import './Home.css'
import Contacts from '../Contacts/Contacts'
import Photos from '../Photos/real-estate.webp'

const Home = () => {
  return (
    <>
        <section className = "main-container">
            <div>
                <ul className="nav1">
                    <li className="navitem">
                        <a className="navlink" href="/buy">Buy/Sell</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/rent" >Rent</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/map">Map</a>
                    </li>
                </ul>
            <div className = "search-bar">
                <h1>Location</h1>
                <form>
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>
                
            </div>

           
            <div className = "logo">
                <img src = {Photos} alt = 'background' />
            </div>
           
        </section>
        <Contacts />
        
        
    </>
  )
}

export default Home