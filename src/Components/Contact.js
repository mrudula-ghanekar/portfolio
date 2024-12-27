// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent: ' + message);
    setMessage('');
  };

  return (
    <section className="p-12 bg-white">
      <h2 className="text-4xl font-semibold text-gray-800 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-3xl mx-auto">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg"
          rows="6"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
