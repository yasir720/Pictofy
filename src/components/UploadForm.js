import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  // //const [file, setFile] = useState(null);
  // const [error, setError] = useState(null);

  // const types = ['image/png', 'image/jpeg'];
  // const [file, setFile] = useState([]);

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];





  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  // const handleChange = (e) => {
  //   for (let i = 0; i < e.target.files.length; i++){
  //     const selected = e.target.files[i];

  //     if (selected && types.includes(selected.type)) {
  //       setFile((prevState) => [...prevState, selected]);
  //       setError('');
  //     } else {
  //       setFile(null);
  //       setError('Please select an image file (png or jpg)');
  //     }
  //   }
    
  // };

  return (
    // the weird condition and jsx thing is shorthand conditional rendering
    <form>
      <label>
        <input type="file" multiple onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;