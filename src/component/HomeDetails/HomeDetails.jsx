import React from 'react'

import './HomeDetails.css'

const HomeDetails = () => {
  return (
    <section>
        <div className="homeDetails__bg">
        <div className="container homeDetails__container">
            <div className='details'>
                <h1 className="heading">INTERIOR DETAILS</h1>
                <ul>
                    <li>Interior Size: <span>2500 sq ft</span></li>
                    <li>Bedrooms: <span>4</span></li>
                    <li>Bathrooms: <span>3</span></li>
                    <li>Garage: <span>3 car</span></li>
                    <li>Laundry Room: <span>Washer/Dryer Hookups</span></li>
                </ul>
            </div>

            <div className='details'>
                <h1 className="heading">EXTERIOR DETAILS</h1>
                <ul>
                    <li>Lot Size: <span>0.5 acres</span></li>
                    <li>Roof: <span>Partial Tile Roof</span></li>
                    <li>Sewer: <span>Septic in and connected</span></li>
                    <li>Construction: <span>Frame/wood construction</span></li>
                    <li>Cooling: <span>Electric Airconditioning</span></li>
                </ul>
            </div>

            <div className='details'>
                <h1 className="heading">ROOM DIMENSIONS</h1>
                <ul>
                    <li>Living Room: <span> 29×18</span></li>
                    <li>Dining Room: <span>12×11</span></li>
                    <li>Kitchen: <span>15×14</span></li>
                    <li>Master Bedroom: <span>23×14</span></li>
                    <li>Bedroom 2: <span>12×11</span></li>
                </ul>
            </div>
        </div>
        </div>
    </section>
  )
}

export default HomeDetails