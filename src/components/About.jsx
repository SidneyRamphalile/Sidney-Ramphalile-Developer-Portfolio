import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Greetings! I'm an affable and enthusiastic individual with a profound
          passion for technology. Holding a National Diploma in Electrical
          Engineering from the Central University of Technology, Free State,
          South Africa, and a Google IT Support Professional Certificate from
          Coursera, I've embarked on an exciting journey in the tech realm.
        </p>

        <br />

        <p className="text-xl">
          My venture into programming commenced in 2020 during a global
          lockdown. Embracing the world of online learning, I delved into HTML,
          CSS, and JavaScript through platforms like Free Code Camp. As time
          progressed, I expanded my educational horizons, incorporating
          Coursera, LinkedIn Learning, and other platforms to deepen my
          understanding and skills in the vast landscape of technology.
        </p>

        <br />
        
        <p className="text-xl">
          Presently, I am immersed in the Full-Stack Web Development training
          program with DevTown, a dynamic company dedicated to cultivating
          developers in India. This journey, undertaken remotely, has provided
          me with opportunities to work on diverse projects and engage with
          various technologies. Below, you'll find a glimpse of some of my
          projects and the technologies I've had the pleasure of working with.
          Eagerly anticipating the endless possibilities that lie ahead in the
          ever-evolving world of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
