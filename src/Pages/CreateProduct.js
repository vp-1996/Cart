import axios from 'axios';
import React, { useState } from 'react'
import { CreateProducts, UploadFile } from '../config/api';
import TopNavbar from '../Shared/TopNavbar'
import FileDropUI from './FileDropUI'
import { GridLoader } from 'react-spinners';

const initialState = {
    title: "",
    price: "",
    description: "",
    category: "",
}

const CreateProduct = () => {

    const [file, setFile] = useState(null);
    const [product, setProduct] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMsg, setPopupMsg] = useState("");

    const { title, price, description, category } = product

    const handleChange = (e) => {
        const { name, value } = e.target;
        //Regex for allowing only numbers and one decimal
        let isPriceValid = /^\d*\.?\d*$/.test(value);
        if (name !== "price" || isPriceValid) {
            setProduct((prev) => ({ ...prev, [name]: value }));
        }
    }

    const createProduct = (imgUrl) => {
        const data = {
            title: title,
            price: price,
            description: description,
            image: imgUrl,
            category: category
        }
        axios
            .post(
                CreateProducts,
                data
            )
            .then((res) => {
                console.log(res);
                setPopupMsg("Product created successfully!");
                setShowPopup(true);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
                setPopupMsg("Something went wrong!");
                setShowPopup(true);
                setLoading(false);
            })
    }

    const uploadFile = () => {
        setLoading(true);
        var formData = new FormData();
        formData.append('FileData', file);
        formData.append('FileName', file.name);

        axios.post(UploadFile, formData)
            .then((res) => {
                createProduct(res?.data?.Url);
            }).catch((err) => {
                console.log(err);
                setPopupMsg("Something went wrong!");
                setShowPopup(true);
                setLoading(false);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        uploadFile();
    }

    const handleClosePopup = () => {
        setProduct(initialState)
        setFile(null);
        setShowPopup(false)
    }

    const categoryOptions = ["Electronics", "Fashion", "Home Goods", "Beauty and Personal Care", "Sports and Outdoors", "Toys and Games", "Automotive", "Health and Wellness", "Grocery and Gourmet Food", "Books, Music, and Media"]
    const isFormValid = !title.trim() || !price.trim() || !description.trim() || !category.trim() || !file

    return (
        <>
            <TopNavbar />
            <form onSubmit={handleSubmit}>
                <div className='product-container row m-0'>
                    <FileDropUI
                        file={file}
                        setFile={setFile}
                    />
                    <div className='input-container col-9'>
                        <div className='row'>
                            <div className='col-md-5 '>
                                <label>Title</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={title}
                                    name='title'
                                    placeholder='Title'
                                />
                            </div>
                            <div className='col-md-5 '>
                                <label>Price</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={price}
                                    name='price'
                                    placeholder='Price'
                                    className='rupee'
                                    autoComplete='off'
                                />
                            </div>
                            <div className='col-md-5 mt-3'>
                                <label>Description</label>
                                <input
                                    type='text'
                                    onChange={handleChange}
                                    value={description}
                                    name='description'
                                    placeholder='Description'
                                />
                            </div>
                            <div className='col-md-5 mt-3'>
                                <label>Category</label>
                                <select
                                    onChange={handleChange}
                                    value={category}
                                    name='category'
                                    className='form-control'
                                >
                                    <option value="" disabled>Select category</option>
                                    {categoryOptions.map((category, i) => {
                                        return (
                                            <option key={i}>{category}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <button
                                    className='submitBtn'
                                    type="submit"
                                    disabled={isFormValid}
                                >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {loading &&
                <div className='loader-container'>
                    <GridLoader loading={loading} color="#000" />
                </div>
            }

            <>
                {showPopup && (
                    <div className="popup-background">
                        <div className="popup-content">
                            <h2>{popupMsg}</h2>
                            <button
                                className="close-popup-button"
                                onClick={handleClosePopup}
                            >
                                Okay
                            </button>
                        </div>
                    </div>
                )}
            </>
        </>
    )
}

export default CreateProduct