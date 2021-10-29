import { useRef, useState } from "react";
import { Modal } from "./index";

let processing, setProcessing;
let mobileEmailSubscribe, setMobileEmailSubscribe;
let emailRef, firstnameRef, lastnameRef;

export function ModalEmailSubscribe() {
  [processing, setProcessing] = useState(false);
  [mobileEmailSubscribe, setMobileEmailSubscribe] = useState(false);
  emailRef = useRef();
  lastnameRef = useRef();
  firstnameRef = useRef();

  return (
    mobileEmailSubscribe && (
      <Modal>
        <div>
          <form onSubmit={(e) => subscribe(e)}>
            <div className="">
              <input
                ref={emailRef}
                required
                type="email"
                className="border-gray-200 border-2 bg-white inline-block w-full px-4 py-2 rounded-md mb-4"
                placeholder="Enter your email address"
              />
              <div className="flex">
                <input
                  ref={firstnameRef}
                  required
                  className="border-gray-200 border-2 bg-white inline-block w-full px-4 py-2 rounded-md mb-4 mr-4"
                  placeholder="Enter your firstname"
                />
                <input
                  ref={lastnameRef}
                  required
                  className="border-gray-200 border-2 bg-white inline-block w-full px-4 py-2 rounded-md mb-4"
                  placeholder="Enter your lastname"
                />
              </div>
              {processing ? (
                <button className="inline-block px-5 py-2 text-white bg-black rounded text-base font-semibold bg-opacity-30 cursor-not-allowed">
                  Subscribe
                </button>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="inline-block px-5 py-2 text-white bg-black hover:bg-gray-700 rounded text-base font-semibold bg-opacity-90"
                  >
                    Subscribe
                  </button>
                  <button
                    onClick={toggleEmailSubscribe}
                    type="submit"
                    className="ml-2 px-5 py-2 text-black hover:text-gray-600 text-base font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </Modal>
    )
  );
}

function subscribe(e) {
  e.preventDefault();

  //Loader
  setProcessing(true);

  fetch(
    `${
      process.env.PROXY_SERVER ?? "https://obscure-brook-72299.herokuapp.com/"
    }https://emailoctopus.com/api/1.5/lists/a884fe8f-37f2-11ec-96e5-06b4694bee2a/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        api_key:
          process.env.EMAIL_OCTOPUS_API_KEY ??
          "0006e14f-1c9a-44c7-a546-fedf561ee67b",
        email_address: emailRef.current.value,
        fields: {
          FirstName: firstnameRef.current.value,
          LastName: lastnameRef.current.value,
        },
        status: "SUBSCRIBED",
      }),
    }
  )
    .then((response) => {
      window.localStorage.setItem("popped", true);
      setProcessing(false);
      emailRef.current.value = "";
      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
    })
    .catch((error) => {
      //@Todo Sentry
      console.log(error);
      setProcessing(false);
    });
}

export function toggleEmailSubscribe() {
  setMobileEmailSubscribe(!mobileEmailSubscribe);
}
