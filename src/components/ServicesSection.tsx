
import React from 'react';
import { Globe, Smartphone, Bot, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Portfolio",
      description: "Modern, responsive websites",
      gradient: "from-blue-400 to-cyan-400",
      delay: "delay-100"
    },
    {
      icon: Github,
      title: "GitHub Projects",
      description: "Open source contributions",
      gradient: "from-gray-700 to-gray-900",
      delay: "delay-200"
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Custom AI applications & integrations",
      gradient: "from-green-400 to-emerald-500",
      delay: "delay-300"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "iOS & Android applications",
      gradient: "from-purple-500 to-pink-500",
      delay: "delay-[400ms]"
    },
    {
      icon: Zap,
      title: "Jokian Services",
      description: "Professional Task services",
      gradient: "from-orange-400 to-red-500",
      delay: "delay-500"
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">🚀</span>
        <h2 className="text-xl font-semibold text-white">Content & Services</h2>
      </div>
      
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in ${service.delay}`}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-white text-opacity-90 text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Import Github from lucide-react
const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default ServicesSection;
