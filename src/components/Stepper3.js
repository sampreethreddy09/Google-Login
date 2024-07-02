import React, { useState } from 'react';

const Stepper3 = () => {
    const [files, setFiles] = useState({
        photo: null,
        tenth: null,
        ug: null
    });

    const handleFileChange = (event) => {
        const { name, files: [file] } = event.target;
        setFiles(prevFiles => ({
            ...prevFiles,
            [name]: file
        }));
    };

    const renderPhotoPreview = () => {
        if (files.photo) {
            return (
                <div>
                    <h4>Photo Preview:</h4>
                    <img src={URL.createObjectURL(files.photo)} alt="Photo Preview" width="400" height="300" />
                </div>
            );
        }
        return null;
    };

    const renderTenthPreview = () => {
        if (files.tenth) {
            return (
                <div>
                    <h4>10th Preview:</h4>
                    <iframe
                        src={URL.createObjectURL(files.tenth)}
                        title="10th Preview"
                        width="400"
                        height="300"
                    />
                </div>
            );
        }
        return null;
    };
    

    const renderUGPreview = () => {
        if (files.ug) {
            return (
                <div>
                    <h4>10th Preview:</h4>
                    <iframe
                        src={URL.createObjectURL(files.ug)}
                        title="10th Preview"
                        width="400"
                        height="300"
                    />
                </div>
            );
        }
        return null;
    };
    

    const handleSave = () => {
        
    };

    return (
        <div>
            <h4>Photo:</h4>
            <input type="file" name="photo" onChange={handleFileChange} />
            {renderPhotoPreview()}

            <h4>10th:</h4>
            <input type="file" name="tenth" onChange={handleFileChange} />
            {renderTenthPreview()}

            <h4>UG:</h4>
            <input type="file" name="ug" onChange={handleFileChange} />
            {renderUGPreview()}

            <button onClick={handleSave}>Save Files</button>
        </div>
    );
};

export default Stepper3;
