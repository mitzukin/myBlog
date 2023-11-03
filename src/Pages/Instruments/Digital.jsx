import React from "react";

const Digital = () => {
  return (
    <div className="mt-20">
      <h1 className="pl-1 text-2xl font-semibold font-Roboto">
        Digital Instruments
      </h1>
      <p className="px-1 mt-5 text-justify text-md md:text-left font-Roboto">
        Digital instruments in music refer to electronic musical instruments
        that produce sound using digital technology rather than traditional
        analog methods. These instruments are designed to create, manipulate,
        and reproduce sound using digital signals and processors. Digital
        instruments have become increasingly popular in the music industry due
        to their versatility, portability, and the wide range of sounds and
        effects they can produce. Here are some common types of digital
        instruments in music
      </p>
      <div className="grid grid-cols-2 grid-rows-1 gap-2 p-2 font-Roboto md:grid-cols-4 md:grid-rows-1 md:p-10">
        <div className="relative shadow-lg group">
          <img
            src="https://i.pinimg.com/564x/7b/0a/66/7b0a66ff45329c52e3c913e36fbdc395.jpg"
            alt="Image"
            className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
            <p className="text-2xl font-bold text-center text-white">
              Digital Keyboards and Synthesizers
            </p>
            <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
              Digital keyboards and synthesizers use digital signal processing
              to generate and modify sounds.{" "}
            </p>
          </div>
        </div>
        <div className="relative group ">
          <img
            src="https://i.pinimg.com/564x/23/fe/71/23fe714d9a0d310447dfe07dfffc3431.jpg"
            alt="Image"
            className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
            <p className="text-2xl font-bold text-center text-white">
              Electronic Drum Kits
            </p>
            <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
              Digital drum kits replace traditional acoustic drum sets with
              electronic pads and triggers.
            </p>
          </div>
        </div>
        <div className="relative group ">
          <img
            src="https://i.pinimg.com/236x/88/65/d0/8865d0b90b00a52240a8feeca882415b.jpg"
            alt="Image"
            className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
            <p className="text-2xl font-bold text-center text-white">
              Digital Audio Workstations (DAWs)
            </p>
            <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
              DAWs are software applications used for music production,
              recording, and mixing.
            </p>
          </div>
        </div>
        <div className="relative group ">
          <img
            src="https://i.pinimg.com/564x/0c/7f/d5/0c7fd5fdaad670f00f74949b766c65ec.jpg"
            alt="Image"
            className="object-cover w-full h-full transition-transform duration-300 scale-100 rounded-lg transform-gpu group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black rounded-md opacity-0 bg-opacity-60 group-hover:opacity-100">
            <p className="text-2xl font-bold text-center text-white">
              Virtual Instruments
            </p>
            <p className="px-3 mt-2 text-sm text-center text-white font-Roboto">
              Virtual instruments are software-based instruments that can be
              played using MIDI controllers, such as MIDI keyboards or
              electronic drum pads.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Digital;
