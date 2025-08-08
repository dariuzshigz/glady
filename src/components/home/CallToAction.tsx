import React from 'react';
import { ArrowRight, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const CallToAction = () => {
  const businessBenefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Average 300% sales increase in first 3 months'
    },
    {
      icon: Users,
      title: 'Reach More Customers',
      description: 'Access to 10,000+ active customers across Sierra Leone'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Guaranteed payments with fraud protection'
    },
    {
      icon: Zap,
      title: 'Easy Management',
      description: 'Simple dashboard to manage orders and inventory'
    }
  ];

  const customerBenefits = [
    'Access to 500+ local businesses',
    'Same-day delivery in major cities',
    'Secure mobile money payments',
    'Earn points with every purchase',
    '24/7 customer support',
    'Quality guarantee on all orders'
  ];

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-max">
        {/* Business CTA */}
        <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 500+ successful businesses already thriving on Gladdy. 
                Start reaching more customers and increasing your revenue today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {businessBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm opacity-80">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-800 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <span>Apply as Vendor</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-green-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Success Story Card */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Success Story"
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-charcoal">Aminata's Kitchen</h4>
                    <p className="text-sm text-medium-gray">Local Restaurant</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <div className="text-2xl font-bold text-green-800 mb-1">+300%</div>
                  <div className="text-sm text-medium-gray">Sales Increase</div>
                </div>
                <p className="text-sm text-medium-gray italic">
                  "Gladdy helped me reach customers I never could before. My business has grown beyond my dreams!"
                </p>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Customer CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* App Preview */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                <div className="bg-gradient-to-r from-green-800 to-orange-500 rounded-2xl p-4 text-white text-center mb-4">
                  <h4 className="font-bold text-lg">Welcome to Gladdy!</h4>
                  <p className="text-sm opacity-90">Start shopping local</p>
                </div>
                
                <div className="space-y-3">
                  {customerBenefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-charcoal">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold mt-4">
                  Start Shopping
                </button>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                10,000+ Happy Customers
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Start Shopping Local Today
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Discover amazing local products, support Sierra Leone businesses, 
                and enjoy fast delivery right to your doorstep.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {customerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Stay Updated
            </h3>
            <p className="text-medium-gray mb-6">
              Get the latest updates on new vendors, features, and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;