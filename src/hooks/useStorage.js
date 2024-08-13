import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, "images");

        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on(
            "state_changed",
            (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            try {
                const downloadUrl = await getDownloadURL(storageRef);
                await addDoc(collectionRef, {url: downloadUrl, createdAt: Timestamp.now()});
                setUrl(downloadUrl);
            } catch (err) {
                console.error("Error getting url: ", err);
                setError(err);
            }
        });
    }, [file]);

    return { progress, url, error }
}

export default useStorage;