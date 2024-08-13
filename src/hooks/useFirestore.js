import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        // Create a query with ordering
        const q = query(
            collection(projectFirestore, collectionName), 
            orderBy("createdAt", "desc")
        );

        // Subscribe to snapshot updates
        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });

        // Clean up subscription on component unmount
        return () => unsub();
    }, [collectionName]);

    return { docs };
};

export default useFirestore;