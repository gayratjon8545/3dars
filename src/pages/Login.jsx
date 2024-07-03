import { Form, Link, useActionData } from "react-router-dom";

// components
// import { FormInput } from "./components";

import { FormInput } from "../components";
//custom hooks

import { useLogin } from "../hooks/useLogin";
import { useEffect, useState } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { signInWithEmail, isPending } = useLogin();

  const [errors, setErros] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      if (userData.email.trim() && userData.password.trim()) {
        signInWithEmail(userData.email, userData.password);
      }
      if (
        !userData.email.trim(
          setErros((prev) => {
            return { ...prev, email: "input-error" };
          })
        )
      ) {
      }
      if (
        !userData.password.trim(
          setErros((prev) => {
            return { ...prev, password: "input-error" };
          })
        )
      ) {
      }
    }
  }, [userData]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      <div className="bg-[url('https://picsum.photos/1200/1500')] bg-center bg-cover bg-no-repeat lg:block md:hidden"></div>
      <div className="bg-[url('https://picsum.photos/1200/1500')] bg-center bg-cover bg-no-repeat lg:bg-none grid place-items-center min-h-screen">
        <Form
          method="post"
          className="flex flex-col items-center gap-4 card bg-base-100 w-96 shadow-xl p-5"
        >
          <h1 className="text-4xl font-semibold">Login</h1>
          <FormInput
            type="email"
            name="email"
            labelText="email
           "
            status={errors.email}
          />
          <FormInput
            type="password"
            name="password"
            labelText="password "
            status={errors.password}
          />

          <div className="w-full">
            {!isPending && (
              <button className="btn btn-primary btn-block">Login</button>
            )}
            {isPending && (
              <button disabled className="btn btn-primary btn-block">
                Loading...
              </button>
            )}
          </div>
          <div className="text-center">
            Do you not have accout yet?{" "}
            <Link className="link link-primary" to="/register">
              Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
