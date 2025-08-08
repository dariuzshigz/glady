import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'For Customers': [
      'How to Order',
      'Track Your Order',
      'Payment Methods',
      'Delivery Areas',
      'Customer Support',
      'Returns & Refunds'
    ],
    'For Vendors': [
      'Become a Vendor',
      'Vendor Dashboard',
      'Commission Rates',
      'Marketing Support',
      'Vendor Guidelines',
      'Success Stories'
    ],
    'Company': [
      'About Gladdy',
      'Our Mission',
      'Careers',
      'Press Kit',
      'Blog',
      'Contact Us'
    ],
    'Legal': [
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'Vendor Agreement',
      'Dispute Resolution',
      'Community Guidelines'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-800 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="text-3xl font-heading font-bold text-gradient">Gladdy</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sierra Leone's premier multi-service platform connecting businesses and customers 
                across the country. From delivery to marketing, we're building the future of commerce.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Freetown, Sierra Leone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">+232 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">hello@gladdy.sl</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-heading font-semibold text-lg mb-4 text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-300">
                Get updates on new features, vendors, and exclusive deals
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-gradient-to-r from-green-800 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Gladdy. All rights reserved. Made with ❤️ in Sierra Leone.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-800 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-gray-700 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Proudly serving Sierra Leone • Supporting local businesses • Building the future of commerce
            </p>
            <div className="flex justify-center items-center space-x-6 mt-4 text-xs text-gray-500">
              <span>🇸🇱 Made in Sierra Leone</span>
              <span>🚚 Same-day delivery</span>
              <span>💳 Secure payments</span>
              <span>📱 Mobile-first</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;