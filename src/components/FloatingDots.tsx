
import React from 'react';

const FloatingDots = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-60 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-80 right-10 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-40 left-16 w-2 h-2 bg-indigo-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-violet-400 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-8 w-4 h-4 bg-purple-300 rounded-full opacity-40 animate-bounce"></div>
    </div>
  );
};

export default FloatingDots;
