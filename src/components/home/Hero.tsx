import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Truck, Users, MapPin } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-max section-padding text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight drop-shadow-lg">
            Connecting Every Business,{' '}
            <span className="text-primary-gold">Delivering Every Dream</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up px-2 drop-shadow-md">
            Sierra Leone's Premier Multi-Service Platform - Marketing, Logistics, E-commerce & More
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-slide-up px-4 sm:px-0">
            <button className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8">
              <span>Start Selling Today</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2 text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8">
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto animate-fade-in px-2">
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
              <span className="font-semibold text-white">500+</span>
              <span className="text-sm sm:text-base">Local Businesses</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary-gold flex-shrink-0" />
              <span className="font-semibold text-white">10,000+</span>
              <span className="text-sm sm:text-base">Happy Customers</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <span className="font-semibold text-white">Same-Day</span>
              <span className="text-sm sm:text-base">Delivery</span>
            </div>
          </div>

          {/* Location Badge */}
          <div className="mt-6 sm:mt-8 inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mx-2">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
            <span className="text-charcoal font-medium text-sm sm:text-base">Proudly Serving Sierra Leone</span>
          </div>

          {/* Carousel Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hidden sm:block">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;