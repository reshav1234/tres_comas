import React from 'react'
import './Home.css'
import Contacts from '../Contacts/Contacts'


const Home = () => {
  return (
    <>
        <section className = "main-container">
            <div>
                <ul className="nav1">
                    <li className="navitem">
                        <a className="navlink" href="/buy">Buy</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/sell">Sell</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/rent" >Rent</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/map">Map</a>
                    </li>
                </ul>
                
            </div>
            <div className = "search-bar">
                <h1>Location</h1>
                <form>
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>
           
        </section>
        <Contacts />
        
        
    </>
  )
}

export default Home