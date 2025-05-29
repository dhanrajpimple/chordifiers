import React from 'react';
import tcs from '../../assets/tcs.jpg'
export default function Abouthome() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F0E81B]  p-8">
      <h1 className="text-4xl font-bold text-yellow-600 mb-4 text-center">
        Welcome to The Chordifiers Studio
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto text-center">
        Where creativity meets technology. We empower artists and producers to shape the future of sound through innovation and collaboration.
      </p>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 px-4 md:px-0">
        <img
          src={tcs}
          alt="Creative Workspace"
          className="w-full max-w-xs md:max-w-md rounded-full shadow-lg"
        />
        <div className="max-w-md text-left">
          <p className="text-lg text-gray-600 leading-relaxed">
            At The Chordifiers Studio, we provide a nurturing space for aspiring musicians, sound engineers, and digital creators. Our environment is designed to spark imagination, support creative growth, and foster collaboration. With industry-standard tools, mentoring, and community support, we help turn raw ideas into polished productions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Whether you're a beginner exploring your passion or a professional refining your craft, our studio is your launchpad into the world of modern music production.
          </p>
        </div>
      </section>
    </div>
  );
}
