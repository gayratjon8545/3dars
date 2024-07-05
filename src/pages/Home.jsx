import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import { Form, useActionData } from "react-router-dom";
import { FormCheckbox, FormInput } from "../components";
import { useEffect } from "react";

import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let completed = formData.get("completed");

  return { title, completed };
};

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data: todos } = useCollection("todos", ["uid", "==", user.uid]);

  const userData = useActionData();

  useEffect(() => {
    if (userData) {
      const newDoc = {
        ...userData,
        uid: user.uid,
      };

      addDoc(collection(db, "todos"), newDoc);
    }
  }, [userData]);

  const deleteDocument = (id) => {
    deleteDoc(doc(db, "todos", id)).then(() => {
      toast.success("delete");
    });
  };

  return (
    <div className="site-container">
      <div className="grid grid-cols-2">
        <div>
          {todos &&
            todos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="flex gap-4 items-center w-96 justify-between p-5 shadow-xl"
                >
                  <h3 className="text-2xl">{todo.title}</h3>
                  <button
                    onClick={() => deleteDocument(todo.id)}
                    className="btn btn-primary btn-sm"
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
        <div className="pt-10">
          <Form
            method="post"
            className="flex flex-col items-center gap-4 card bg-base-100 w-96 shadow-xl p-5"
          >
            <h1 className="text-3xl font-semibold">Add New Todo</h1>
            <FormInput type="text" labelText="title" name="title" />
            <FormCheckbox name="completed" />
            <div className="w-full">
              <button className="btn btn-secondary btn-block">Add</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Home;
