import Link from 'next/link';
import { FaUser, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-center p-4 fade-in">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Portfolio!</h1>
      <p className="text-xl text-white mb-4">
        Hello, I'm Dwayne, a passionate developer who loves creating web applications.
      </p>
      <p className="text-lg text-gray-600 mt-2">Explore my journey and projects below.</p>

      {/* Links container */}
      <div className="flex space-x-6 mt-6">
        {/* About Link */}
        <Link
          href="/about"
          className="text-white flex items-center transition transform hover:scale-110 hover:text-teal-300 duration-300"
        >
          <FaUser className="mr-2" /> About
        </Link>

        {/* Projects Link */}
        <Link
          href="/projects"
          className="text-white flex items-center transition transform hover:scale-110 hover:text-blue-300 duration-300"
        >
          <FaProjectDiagram className="mr-2" /> Projects
        </Link>

        {/* Contact Link */}
        <Link
          href="/contact"
          className="text-white flex items-center transition transform hover:scale-110 hover:text-indigo-300 duration-300"
        >
          <FaPhoneAlt className="mr-2" /> Contact
        </Link>
      </div>
    </div>
  );
}
