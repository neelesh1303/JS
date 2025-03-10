import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

export default function Profile() {
  const navigate = useNavigate();
  if (!localStorage.getItem("uid")) {
    localStorage.clear();
   return navigate("/login");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full p-4 bg-white shadow-md rounded-lg">
        <div className="relative">
          <img
            src="/img/landscape.jpg"
            alt="img"
            className="rounded-lg mix-blend-multiply h-40 w-full object-cover"
            width={100}
            height={100}
          />
          <div className="absolute bottom-0 left-0 aspect-square">
            <div className="">
              <img
                src="/img/square.jpg"
                alt="Profile"
                width={100}
                height={100}
                className="h-24 w-24 border-4 border-sky-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base font-bold text-gray-800">
                {localStorage.getItem("name") || "null"}
              </h1>
              <p className=" text-xs text-gray-500 mb-1">
                @{localStorage.getItem("name") || "null"}
              </p>
              <p className="text-xs text-sky-500 flex items-center">
                <FontAwesomeIcon icon={faLocationDot} className="h-3 w-3 text-gray-700 mr-1" />
                {localStorage.getItem("location") || "null"}
              </p>
            </div>
            <a
              href="/profile-edit"
              className="border-2 border-violet-950 px-3 py-1 rounded-full hover:bg-gray-200 flex items-center text-sm font-bold text-violet-950"
            >
              <FontAwesomeIcon icon={faPen} className="h-4 w-4 mr-1" /> Edit Profile
            </a>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-xs text-sky-500 font-medium decoration-violet-950">
              <span className="text-violet-950">24 </span> Incidents Reported
            </p>
            <button className="rounded-full bg-violet-950 text-white px-4 py-2">
              {" Report incidents >"}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-gray-700 mr-2" />
            <p className="text-sm bg-gray-200 px-3 py-2 rounded-md flex-1">
              {localStorage.getItem("phone") || "XXXXXXXXXX"}
            </p>
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-700 mr-2" />
            <p className="text-sm bg-gray-200 px-3 py-2 rounded-md flex-1">
              {localStorage.getItem("email") || "Re-login needed"}
            </p>
          </div>

          <div className="flex mt-1">
            <button
              className="text-violet-950 text-xs font-bold text-right flex-1 "
              onClick={() => {
                toast.success("Already verified");
              }}
            >
              Verify mail
            </button>
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-700 mr-2" />
            <p className="text-sm bg-gray-200 px-3 py-2 rounded-md flex-1">⁕⁕⁕⁕⁕⁕⁕⁕⁕</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold text-violet-950">Emergency Contacts</p>
          <p className="text-xs font-bold text-gray-500">
            Your emergency contacts would be notified in case of an emergency
          </p>
          <div className="flex items-center mt-2 bg-gray-200 p-2 rounded-md max-w-sm">
            <div className="h-8 w-8 border border-gray-300 rounded-full overflow-hidden mr-2">
              <img src="/img/square.jpg" alt="Abhideep Kumar" width={100} height={100} />
            </div>
            <p className="text-sm text-gray-700 font-bold">Abhideep Kumar</p>
          </div>
          <div className="flex items-center mt-2 bg-gray-200 p-2 rounded-md max-w-sm">
            <div className="h-8 w-8 border border-gray-300 rounded-full overflow-hidden mr-2">
              <img src="/img/square.jpg" alt="Rohan MS" width={100} height={100} />
            </div>
            <p className="text-sm text-gray-700 font-bold">Rohan</p>
          </div>
          <p className="text-xs text-sky-500 mt-2">(You can add upto two emergency contacts)</p>
        </div>

        <div className="flex justify-center mt-4">
          <button onClick={()=>{localStorage.clear();navigate("/login")}} className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}