
import React from 'react';

const ProfileSection = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-600 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{'</>'}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-6 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-white mb-2">Codingin</h1>
      <p className="text-gray-300 text-lg mb-1">Fullstack Developer & Content Creator</p>
      <p className="text-gray-400 text-sm">Website • Mobile App • AI Solutions • Jokian Services</p>
    </div>
  );
};

export default ProfileSection;
