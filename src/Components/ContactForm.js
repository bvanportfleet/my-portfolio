import React, { useState } from "react";

const ContactForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, "");

    // Format the phone number
    let formattedNumber = "";
    for (let i = 0; i < phoneNumber.length; i++) {
      if (i === 0) {
        formattedNumber = "(" + phoneNumber[i];
      } else if (i === 2) {
        formattedNumber += phoneNumber[i] + ") ";
      } else if (i === 5) {
        formattedNumber += phoneNumber[i] + "-";
      } else {
        formattedNumber += phoneNumber[i];
      }
    }
    return formattedNumber;
  };

  const handlePhoneChange = (e) => {
    let { value } = e.target;
    // Remove non-numeric characters
    value = value.replace(/\D/g, "");
    // Limit to 10 characters
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    e.target.value = formatPhoneNumber(value);
  };

  // Dynamic styling for the form to enable smooth transitioning
  const formStyle = {
    right: isFormOpen ? "0" : "-330px", // Adjust as needed
    transition: "right 0.5s ease-in-out",
    position: "fixed",
  };
  const screenDimStyle = {
    display: isFormOpen ? "block" : "none",
  };

  return (
    <div>
      <div
        style={screenDimStyle}
        className="screen-dim"
        onClick={toggleForm}
      ></div>
      <div style={formStyle} className="contact-form">
        <h1>Contact Brian</h1>
        <div
          onClick={toggleForm}
          className="contact-tab cursor-pointer absolute top-0 right-0  bg-blue-500 text-white p-2"
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            {isFormOpen ? "Close" : "Contact"}
          </a>
        </div>

        {/* Form fields */}
        <form action="/submitForm" method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength="14"
              required
              aria-required="true"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handlePhoneChange}
            />
            <small>( Format: (000) 000-0000 )</small>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              aria-required="true"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
