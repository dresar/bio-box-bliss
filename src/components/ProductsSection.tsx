
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      title: "Premium Web Template",
      description: "Modern responsive website templates",
      price: "$49",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Mobile UI Kit",
      description: "Complete mobile app design system",
      price: "$79",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <ShoppingBag className="w-6 h-6 text-white mr-2" />
        <h2 className="text-xl font-semibold text-white">Featured Products</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${product.gradient} p-1 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in delay-${(index + 1) * 100}`}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{product.title}</h3>
                  <p className="text-white text-opacity-80 text-sm mb-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
