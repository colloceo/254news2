
import React from 'react';
import { teamMembers } from '../../data/mockData';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-neutral-light dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-neutral-text dark:text-white">About News254</h1>
          <p className="text-primary font-semibold mt-2 text-lg">Your Source for Unbiased Kenyan News</p>
          <p className="mt-4 text-lg text-neutral dark:text-gray-400">
            Founded on the principles of integrity, accuracy, and impartiality, News254 is dedicated to providing Kenyans with news that matters. We strive to cover stories that shape our nation, empower our communities, and hold power to account. Our mission is to foster an informed and engaged citizenry through high-quality journalism.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-text dark:text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 text-center p-6 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary" />
                <h3 className="text-xl font-bold text-neutral-text dark:text-white">{member.name}</h3>
                <p className="text-primary dark:text-primary-light font-semibold">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4 text-neutral dark:text-gray-400">
                  <a href={member.social.twitter} className="hover:text-primary"><i className="fab fa-twitter"></i></a>
                  <a href={member.social.linkedin} className="hover:text-primary"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
