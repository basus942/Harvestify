import { useRef } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
const Signup = () => {
  const emailref = useRef("");
  const passref = useRef("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((e) => {
        router.push("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="dark:bg-slate-900  flex h-full items-center py-16">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-green-400 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign Up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account yet?
              </p>
              <div className="text-blue-600 decoration-2 hover:underline font-medium">
                <Link href="/Login">Sign in here</Link>
              </div>
            </div>
            <div className="  flex items-center justify-center ">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 text-black font-bold"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email@xyz.com"
                          ref={emailref}
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required
                          aria-describedby="email-error"
                        />
                        <div className=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    {/* End Form Group */}

                    {/* Form Group */}
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2 text-black font-bold"
                        >
                          Password
                        </label>
                        <a
                          className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                          href="../examples/html/recover-account.html"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          ref={passref}
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required
                          aria-describedby="password-error"
                        />
                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    </div>
                    {/* End Form Group */}

                    {/* Checkbox */}
                    {/* <div className="flex items-center text-black font-bold">
                          <div className="flex">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              htmlFor="remember-me"
                              className="text-sm dark:text-white"
                            >
                              Remember me
                            </label>
                          </div>
                        </div> */}
                    {/* End Checkbox */}

                    <button
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
