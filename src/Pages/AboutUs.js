import axios from 'axios'
import React, { useState } from 'react'
import { UploadFile } from '../config/api';
import TopNavbar from '../Shared/TopNavbar'

const AboutUs = () => {

    const [file, setFile] = useState(null);

    const handleFile = (e) => {
        const fileData = e.target.files[0]
        fileData && setFile(fileData)
    }
    console.log(file)

    const handleSubmit = () => {
        // console.log(file)
        var formData = new FormData();
        formData.append('FileData', file);
        formData.append('FileName', file.name);

        // console.log(formData);
        // console.log([...formData]);

        // for (let i of formData) {
        //     console.log(i)
        // }

        axios.post(UploadFile, formData)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <TopNavbar />
            {/* <UseRef /> */}
            <div className='fileCompContainer'>
                <input
                    type='file'
                    onChange={handleFile}
                    accept="image/*"
                    id='img'
                    style={{ display: 'none' }}
                />
                <label className='fileUploadLabel' htmlFor="img">
                    Click here to upload
                </label>

                <button
                    onClick={handleSubmit}
                    disabled={!file}
                >Submit</button>
                <hr />

                <div className='d-flex justify-content-center'>
                    <div className='fileImageContainer'>
                        {file &&
                            <i
                                className="fa-solid fa-trash"
                                onClick={() => setFile(null)}
                            />
                        }
                        <img
                            src={file ? window.URL.createObjectURL(file) : "asset/preview.jpg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// FormData objects in JavaScript are designed to hold and manage data that is going to be sent to a server as part of an HTTP request.They are not meant to be looped through like regular JavaScript objects, and so they do not have an enumerable property that allows for direct iteration.

export default AboutUs