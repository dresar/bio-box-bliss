
import React from 'react';
import { MessageCircle, Instagram, Github, Mail } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: "Chat via WhatsApp",
      icon: MessageCircle,
      gradient: "from-green-500 to-green-600",
      fullWidth: true
    }
  ];

  const socialIcons = [
    { name: "TikTok", icon: "🎵", gradient: "from-red-500 to-pink-600" },
    { name: "Instagram", icon: Instagram, gradient: "from-purple-500 to-pink-500" },
    { name: "GitHub", icon: Github, gradient: "from-gray-700 to-gray-900" },
    { name: "Email", icon: Mail, gradient: "from-blue-500 to-indigo-600" }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">💬</span>
        <h2 className="text-xl font-semibold text-white">Let's Connect</h2>
      </div>
      
      {/* WhatsApp Button */}
      {socialLinks.map((link, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${link.gradient} p-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer mb-6 animate-fade-in delay-100`}
        >
          <div className="flex items-center justify-center">
            <link.icon className="w-6 h-6 text-white mr-3" />
            <span className="text-lg font-semibold text-white">{link.name}</span>
          </div>
        </div>
      ))}

      {/* Social Media Grid */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">🔗</span>
          <h3 className="text-lg font-semibold text-white">Social Media</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {socialIcons.map((social, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${social.gradient} p-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in delay-${(index + 2) * 100}`}
            >
              <div className="flex items-center justify-center">
                {typeof social.icon === 'string' ? (
                  <span className="text-2xl mr-2">{social.icon}</span>
                ) : (
                  <social.icon className="w-5 h-5 text-white mr-2" />
                )}
                <span className="text-white font-medium text-sm">{social.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm space-y-1">
        <p>✨ Made with ❤️ for Codingin Fans & TikTok Tech Community</p>
        <p>🚀 Creating content & building dreams!</p>
      </div>
    </div>
  );
};

export default SocialSection;
