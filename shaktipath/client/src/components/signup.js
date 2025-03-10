import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const onSignUp = async (event) => {
    event.preventDefault(); 
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Successfully Signed Up");
      toast.success("Redirecting to Login");
      navigate('/login'); 
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center">
          <img src="/img/logo2.jpg" alt="ShaktiPath" width={250} height={250} />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-indigo-700">Welcome!</p>
          <p className="text-sm font-bold text-indigo-700">Create your account here</p>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700">Type Email and Password</p>
          </div>
          <form className="mt-2" onSubmit={onSignUp}>
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Email"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="Password"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 text-center">or create an account with</p>
          <div className="flex justify-center mt-2 space-x-4">
            <button
              className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 text-sm flex items-center "
              onClick={() => {
                toast.error("Currently not available");
              }}
            >
              <FontAwesomeIcon icon={faGoogle} className="h-4 w-4 text-gray-700 mr-1" />
              Google
            </button>
            <button
              className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 text-sm flex items-center "
              onClick={() => {
                toast.error("Currently not available");
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 text-blue-700 mr-1" />
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
