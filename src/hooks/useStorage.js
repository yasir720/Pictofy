// these are hooks that allow use to change around states. They are basically functions
import { useState, useEffect } from 'react';
// this one allows use to import the storage from firebase that we are using
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

// We now set 3 states that we will be using. This in regards to the file that will be
// uploaded
const useStorage = (file) => {
  const [progress, setProgress] = useState(0); // Using this for a progress bar for the upload
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // This will run any time the dependancy changes (taling about file)
  useEffect(() => {
    // references --> where the file will be stored
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    // This part here will then actually go about uploading the file via the reference
    // that we set up in the above
    // This function is also asyncrouns meaning that it will take time, so we add in a 
    // listener to let us know about its progess via a progress bar
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // Setting the progress
      setProgress(percentage);
    }, (err) => { // This function will go off in the event of an error
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt }); // This bit here is what keeps track
                                                   // of all the uploads so we can show them
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error }; // This is what is returned to whoever calls
                                   // our funciton
}

export default useStorage; // This one means that we are making this hook avalible to other
                           // classes that want to use it