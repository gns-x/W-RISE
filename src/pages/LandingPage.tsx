import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Youtube, MessageCircle, DollarSign, ChevronRight, BarChart, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WRISE</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
              <a href="#features" className="hover:text-blue-600 transition-colors duration-300">Features</a>
              <a href="#platforms" className="hover:text-blue-600 transition-colors duration-300">Platforms</a>
              <a href="#about" className="hover:text-blue-600 transition-colors duration-300">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Log in</Link>
              <Link to="/signup">
                <Button 
                  variant="primary" 
                  size="sm"
                  rightIcon={<ChevronRight size={16} />}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Elevate Your Content with
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Insights
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your social media presence with intelligent analytics, automated engagement, and data-driven monetization strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                    Start Free Trial
                  </Button>
                </Link>
                <a href="#demo">
                  <Button variant="outline" size="lg">
                    Watch Demo
                  </Button>
                </a>
              </div>
              <div className="mt-12 flex items-center space-x-8 text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm">SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span className="text-sm">GDPR Compliant</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex items-center justify-between">
                  <span className="font-medium">Content Performance Dashboard</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                <img 
                  src="https://images.pexels.com/photos/5926391/pexels-photo-5926391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs animate-float">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">AI Assistant Active</h4>
                    <p className="text-xs text-gray-600 mt-1">Engaging with followers using your brand voice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unified Platform Management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect and manage all your social media platforms from a single, powerful dashboard
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Instagram size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive analytics for posts, stories, and engagement metrics
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <div className="bg-gradient-to-r from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Youtube size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">YouTube</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep insights into video performance and audience retention
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group opacity-75">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Twitter/X</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coming soon - Join the waitlist
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group opacity-75">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">TikTok</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coming soon - Join the waitlist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Growth</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to analyze, engage, and monetize your audience effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Smart Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Get actionable insights into content performance, audience behavior, and engagement patterns
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">AI Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate responses and engage with your audience using advanced AI that matches your tone and style
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Revenue Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover and implement data-driven monetization strategies tailored to your audience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators using WRISE to grow their audience and revenue
          </p>
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              rightIcon={<ArrowRight size={20} />}
            >
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded">
                  <Sparkles size={20} className="text-white" />
                </div>
                <span className="ml-2 text-lg font-bold">WRISE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering creators with AI-driven insights and automation
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#platforms" className="text-gray-300 hover:text-white transition-colors">Platforms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 WRISE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;