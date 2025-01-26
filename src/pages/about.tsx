import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-red-500 to-yellow-600 text-center p-4 fade-in">
      <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
      <p className="text-xl text-white mb-4">
        I am a passionate developer with a love for creating seamless user experiences.
      </p>

      <Link href="/" className="mt-6 text-white hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
