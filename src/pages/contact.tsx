import Link from 'next/link';

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for empty fields
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    alert("Message Sent!");
    // can add logic to handle the form data (e.g., sending it to an API or email service)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-center p-4 fade-in">
      <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
      <p className="text-xl text-white mb-4">
        Feel free to reach out to me via the form below.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded"
            placeholder="Write your message here"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      <Link href="/" className="mt-6 text-white hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
