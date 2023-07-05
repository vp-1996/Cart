import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNavbar from '../Shared/TopNavbar'
import "./style1.css"
const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Assume you have made an api call
        // On success of your api call you want to go to another route/page
        // let timer = setTimeout(() => {
        //     navigate('/Contact')
        // }, 5000);

        //always clear your interval
        // return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <TopNavbar />
            Home
            <div>
                <Link to='/AboutUs'>Go to about us</Link>
            </div>
            <button onClick={() => navigate('/Users')}>Go to users</button>
        </div>
    )
}

export default Home