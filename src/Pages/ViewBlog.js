import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GridLoader } from 'react-spinners';
import { GetPosts } from '../config/api';
import TopNavbar from '../Shared/TopNavbar';

const ViewBlog = () => {

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);

    const params = useParams();
    console.log(params);

    const fetchPost = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${GetPosts}/${params.id}`)
            //"https://jsonplaceholder.typicode.com/posts/5"
            setPost(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err)
            setLoading(false);
        }
    }

    useEffect(() => {
        //fetch single post as per id
        fetchPost();
    }, [])

    return (
        <div>
            <TopNavbar />
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
            {loading &&
                <div className='loader-container'>
                    <GridLoader loading={loading} color="#000" />
                </div>
            }
        </div>
    )
}

export default ViewBlog