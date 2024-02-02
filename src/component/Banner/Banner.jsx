import React, { useState } from "react";
import  './banner.css'

const Banner = () => {
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);

  const handleNotifySubmit = async (event) => {
    event.preventDefault();

    const rowData = { row: [email] };
    const url =
      "https://backend.buildpicoapps.com/db/create?app_id=south-suddenly&table_name=subscribers";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rowData),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Your email address has been successfully registered.");
        setEmail("");
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSendMessage = async () => {
    const input = document.getElementById("input");
    const message = input.value.trim();

    if (!message) return;

    // Display user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "sent" },
    ]);

    try {
      const response = await fetch(
        "https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQmx0VGVwNEdvaktyNEZ4VXpOVWlBRE9YVGk1b21JbDRwTklROW5nUEtvQlIyZjIzNExoOE9zSFNmYzVSQVd3dFN0cFNaQXhnLXBzMWRmN2d5c21sMUFKd2V3T2c9PQ==",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: `You are an assistant that provides information about a Marketing Inc web application which is under construction. Users can ask you questions about the project, its features, and its status. User: ${message}`,
          }),
        }
      );

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.text, type: "received" },
      ]);
      input.value = "";
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="containerBanner">
      <div className="min-h-screen flex flex-col justify-center items-center py-8">
        <div className="container mx-auto px-4 text-white flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Marketing Inc Web Application
          </h1>
          <p className="text-base mb-8 mx-auto max-w-md">
            Express your opinion about Marketing Inc web application
          </p>

          <div className="bg-white glass shadow-lg flex flex-col justify-center items-center rounded-lg p-8 mb-4 max-w-md md:max-w-lg">
            <p className="text-white mb-4">Here you register your Gmail</p>
            <form
              id="notify-form"
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10"
              onSubmit={handleNotifySubmit}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="border-2 border-gray-300 text-black rounded-lg p-2 text-sm w-full text-center sm:w-64"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg w-40 px-4 py-2"
              >
                Submit
              </button>
            </form>
            <div className="bg-white glass shadow-lg rounded-lg p-3 mb-4">
              <div
                id="messages"
                className="mb-4 overflow-y-auto max-h-48 flex flex-col space-y-3"
              >
                {messages.map((msg, index) => (
                  <p key={index} className={`message ${msg.type}`}>
                    {msg.text}
                  </p>
                ))}
              </div>
              <div className="flex mb-4">
                <input
                  id="input"
                  placeholder="Got Questions?"
                  type="text"
                  required
                  className="border-2 border-gray-300 text-black rounded-lg p-2 text-sm w-full mr-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                />
                <button
                  id="send"
                  className="bg-blue-500 text-white rounded-lg px-4 py-2"
                  onClick={handleSendMessage}
                >
                  Ask
                </button>
              </div>
            </div>
          </div>

          <footer className="text-white">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p>&copy; 2024 Marketing Inc. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Banner;
