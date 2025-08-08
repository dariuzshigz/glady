import React, { useState } from 'react';
import { UserPlus, Search, CreditCard, Truck, FileText, Package, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('customers');

  const customerSteps = [
    {
      icon: UserPlus,
      title: 'Sign Up & Browse',
      description: 'Create your account and start earning points from day one. Browse thousands of local products and services.',
      details: 'Quick registration with mobile number verification. Instant access to our rewards program.'
    },
    {
      icon: CreditCard,
      title: 'Shop & Pay',
      description: 'Secure payments with Mobile Money integration. Orange Money, Afri Money, and more payment options.',
      details: 'Multiple payment methods including cash on delivery. Secure transactions with buyer protection.'
    },
    {
      icon: Truck,
      title: 'Track & Receive',
      description: 'Real-time tracking from order to delivery. Get updates every step of the way.',
      details: 'Live GPS tracking, SMS notifications, and estimated delivery times. Rate your experience.'
    }
  ];

  const vendorSteps = [
    {
      icon: FileText,
      title: 'Apply & Get Approved',
      description: 'Quick application process with business verification. Get approved in 24-48 hours.',
      details: 'Simple online application, document upload, and business verification process.'
    },
    {
      icon: Package,
      title: 'List Your Products',
      description: 'Easy-to-use dashboard for product management. Professional photos and descriptions.',
      details: 'Bulk upload tools, inventory management, and marketing support from our team.'
    },
    {
      icon: DollarSign,
      title: 'Start Earning',
      description: 'Reach thousands of customers and grow your business. Weekly payouts and detailed analytics.',
      details: 'Competitive commission rates, marketing support, and business growth insights.'
    }
  ];

  const currentSteps = activeTab === 'customers' ? customerSteps : vendorSteps;

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            How <span className="text-gradient">Gladdy</span> Works
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto mb-8">
            Simple, secure, and designed for Sierra Leone. Get started in minutes.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-light-gray rounded-lg p-1 mb-12">
            <button
              onClick={() => setActiveTab('customers')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'customers'
                  ? 'bg-white text-green-800 shadow-md'
                  : 'text-medium-gray hover:text-charcoal'
              }`}
            >
              For Customers
            </button>
            <button
              onClick={() => setActiveTab('vendors')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'vendors'
                  ? 'bg-white text-green-800 shadow-md'
                  : 'text-medium-gray hover:text-charcoal'
              }`}
            >
              For Vendors
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {currentSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < currentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-800 to-orange-500 transform translate-x-8 z-0"></div>
                )}

                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-800 to-orange-500 text-white font-bold text-lg rounded-full mb-6">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-light-gray rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-50 transition-colors">
                    <IconComponent className="w-10 h-10 text-green-800" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-medium-gray mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <p className="text-sm text-medium-gray italic">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-800 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              {activeTab === 'customers' ? 'Ready to Start Shopping?' : 'Ready to Grow Your Business?'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {activeTab === 'customers' 
                ? 'Join thousands of satisfied customers across Sierra Leone'
                : 'Join 500+ successful businesses on our platform'
              }
            </p>
            <button className="bg-white text-green-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              {activeTab === 'customers' ? 'Start Shopping Now' : 'Apply as Vendor'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;