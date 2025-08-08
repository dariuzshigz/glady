import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-2xl font-heading font-bold text-gradient">
              Gladdy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#services"
              className="text-charcoal hover:text-orange-500 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-charcoal hover:text-orange-500 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#vendors"
              className="text-charcoal hover:text-orange-500 transition-colors font-medium"
            >
              Vendors
            </a>
            <a
              href="#coverage"
              className="text-charcoal hover:text-orange-500 transition-colors font-medium"
            >
              Coverage
            </a>
            <a
              href="#about"
              className="text-charcoal hover:text-orange-500 transition-colors font-medium"
            >
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-charcoal hover:text-green-800 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-charcoal hover:text-orange-500 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-charcoal hover:text-orange-500 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Link to="/auth/login" className="btn-outline text-sm">Sign In</Link>
            <Link to="/auth/register" className="btn-primary text-sm">Join Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <a
                href="#services"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#vendors"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                Vendors
              </a>
              <a
                href="#coverage"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                Coverage
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <div className="px-4 pt-4 border-t border-gray-200 space-y-2">
                <Link to="/auth/login" className="w-full btn-outline text-sm">Sign In</Link>
                <Link to="/auth/register" className="w-full btn-primary text-sm">Join Now</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;