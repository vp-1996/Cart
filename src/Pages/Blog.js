import React, { useEffect, useState } from 'react'
import { GetPosts } from '../config/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../Shared/TopNavbar';
import { GridLoader } from 'react-spinners';

const Blog = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(GetPosts)
            setPosts(data);
            setLoading(false);
        } catch (err) {
            //Open modal and show message or do something when error comes
            alert(err.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const handleViewPost = (id) => {
        // console.log(id)
        navigate('/ViewBlog/' + id);
    }

    const filteredPosts = posts.filter(post =>
        post.id.toString().includes(query)
        ||
        post.title.toLowerCase().includes(query.toLowerCase())
    )
    console.log(filteredPosts)
    
    return (
        <div>
            <TopNavbar />
            <div className='customSearchBar mb-0 m-4'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type='search'
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    placeholder='search'
                    spellCheck={false}
                />
            </div>

            <div className='row mx-3 blogs'>
                {
                !filteredPosts?.length
                    ?
                    <h4>No records to display!</h4>
                    :
                    filteredPosts.map((post, i) => {
                        return (
                            <div
                                key={i}
                                className='col-sm-4 p-4'>
                                <div className='task-container p-3 row'>
                                    <i
                                        className="fa-solid fa-eye"
                                        onClick={() => handleViewPost(post.id)}
                                    />
                                    <div className='col-sm-5 card-label'>Id: </div>
                                    <div className='col-sm-5'>{post.id}</div>
                                    <div className='col-sm-5 card-label'>Title: </div>
                                    <div className='col-sm-7'>{post.title}</div>
                                </div>
                            </div>
                        )
                    })}
            </div>
            {loading &&
                <div className='loader-container'>
                    <GridLoader loading={loading} color="#000" />
                </div>
            }
        </div>
    )
}

export default Blog