import Link from 'next/link';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-center p-4 fade-in">
      <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
      <p className="text-xl text-white mb-4">Here are some of the projects I’ve worked on:</p>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]} // Add modules explicitly
        className="w-full max-w-4xl mx-auto"
      >
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl text-white mb-4">Portfolio Website</h2>
            <p className="text-white">A personal portfolio to showcase my skills and projects.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl text-white mb-4">E-commerce Website</h2>
            <p className="text-white">An online store built with React and integrated with Stripe.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl text-white mb-4">Task Management App</h2>
            <p className="text-white">A web app to manage tasks with features like adding, deleting, and editing.</p>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      <Link href="/" className="mt-6 text-white hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
