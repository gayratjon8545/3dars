import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

import { db } from "../firebase/firebaseConfig";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const querySnapShot = await getDocs(collection(db, collectionName));
      const data = [];
      querySnapShot.docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setData(data);
    };
    getData();
  }, [collectionName]);

  return { data };
};
