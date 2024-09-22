import React, { useRouter } from "next/router";
import { signIn } from "../utils/helperFunctions";
import { toast } from "react-toastify";
import { useState } from "react";
import Cookies from "js-cookie";
export default function SignInSide() {
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await signIn(
        userData.username,
        userData.password.toString()
      );
      console.log("🚀 ~ onSubmit ~ result:", result);
      if (result) {
        Cookies.set("user_jwt", result.jwt, { expires: 7, path: "" });
        Cookies.set("user_id", result.user.id, { expires: 7, path: "" });
        toast.success("login successful");
        router.push("/");
        return;
      } else {
        toast.error("Invalid details");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        paddingTop: "50px",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full  text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login in
              </button>
              <p
                style={{ pointer: "cursor" }}
                onClick={() => router.push("_signup")}
                className="text-sm font-light text-gray-500"
              >
                Create have an account?{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
