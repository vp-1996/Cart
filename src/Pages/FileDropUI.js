import React from 'react'

const FileDropUI = ({ file, setFile }) => {

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <div
            className="dropUploader col-3 p-0"
            style={{ border: !file && "2px dashed orange" }}
        >
            <input
                type='file'
                onChange={handleFile}
                accept="image/*"
                id='img'
                style={{ display: 'none' }}
            />
            {file
                ?
                <div className='backdrop'>
                    <img
                        src={file && window.URL.createObjectURL(file)}
                        className='dropImg'
                        alt='drop'
                    />
                    <label
                        className='changeText'
                        htmlFor='img'
                    >
                        Change Image
                    </label>
                </div>
                :
                <div className='file-upload-container'>
                    <i className="fas fa-cloud-upload-alt cloudIcon" />
                    <p>
                        <label
                            className='dropLabel'
                            htmlFor='img'
                        >Click Here to Upload</label>
                    </p>
                </div>
            }
        </div>
    )
}

export default FileDropUI