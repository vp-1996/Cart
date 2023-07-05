import React, { useEffect } from 'react'
import TopNavbar from '../Shared/TopNavbar'
import UseMemo from './UseMemo'
import { FetchComments } from '../config/api';
import axios from 'axios';

const Contact = () => {

    const fetchComments = async () => {
        try {
            const comments = await axios.get(FetchComments)
            console.log(comments)
        } catch (error) {
            console.log(error)
            //Open a modal and show error
        }
    }

    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <div>
            <TopNavbar />
            <UseMemo />
        </div>
    )
}

export default Contact