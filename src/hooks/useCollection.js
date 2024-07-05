import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

import { db } from "../firebase/firebaseConfig";

export const useCollection = (collectionName, whereOptions) => {
  const [data, setData] = useState(null);

  const q = query(collection(db, collectionName), where(...whereOptions));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() });
      });
      setData(todos);
    });
  }, [collectionName]);

  return { data };
};
