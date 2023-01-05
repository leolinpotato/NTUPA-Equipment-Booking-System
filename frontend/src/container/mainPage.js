import React from 'react'
import '../css/mainPage.css'
import Duck from "../css/duckduck.png"

const MainPage = () => {
    return (
        <div className='mainPageContainer'>
            <h2 className='mainPage'>What do you want to do?</h2>
            <img src= { Duck } className='duckduck'/>
        </div>
    )
}
export default MainPage