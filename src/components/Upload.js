import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg'];

    const uploadOccured = (e) => {
        let selected = e.target.files[0];

        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select a png or jpeg image');

        }
    };
    
    return (
      <form>
        <input type="file" onChange={uploadOccured} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{ file.name }</div>}
        </div>
      </form>
    );
}

export default UploadForm;