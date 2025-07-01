import React, { useState, useEffect } from 'react';
import { Zap, Users, Shield, TrendingUp, Sun, Battery, ArrowRight, Play, CheckCircle } from 'lucide-react';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Energy Trading",
      description: "Buy and sell excess solar power in real-time with your neighbors"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Secure, transparent transactions powered by cutting-edge blockchain technology"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Optimization",
      description: "AI-driven algorithms optimize energy distribution for maximum efficiency"
    }
  ];

  const benefits = [
    { icon: <Sun className="w-6 h-6" />, text: "Reduce energy costs by up to 40%" },
    { icon: <Battery className="w-6 h-6" />, text: "Maximize solar investment returns" },
    { icon: <Users className="w-6 h-6" />, text: "Build sustainable communities" },
    { icon: <Shield className="w-6 h-6" />, text: "Reduce grid dependency" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              GreenGrid
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-green-700 hover:text-emerald-600 transition-colors">How It Works</a>
            <a href="#benefits" className="text-green-700 hover:text-emerald-600 transition-colors">Benefits</a>
            <button className="px-4 py-2 text-green-700 hover:text-emerald-600 transition-colors">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 bg-clip-text text-transparent leading-tight">
              Power Your Future with
              <span className="block text-emerald-600">Peer-to-Peer Energy</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the renewable energy revolution. Trade excess solar power with neighbors through our blockchain-powered micro-trading platform.
            </p>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl transform transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white scale-105 shadow-2xl' 
                    : 'bg-white/70 backdrop-blur-sm text-green-700 hover:scale-105 shadow-lg'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="mb-4 transform transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className={`text-sm ${activeFeature === index ? 'text-green-50' : 'text-green-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/80 text-green-700 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 border-2 border-green-200 hover:border-green-300">
              <Play className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text text-transparent">
            How GreenGrid Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Generate Solar Power",
                description: "Your solar panels generate clean energy throughout the day, often producing more than you consume.",
                color: "from-green-400 to-emerald-500"
              },
              {
                step: "02", 
                title: "Smart Trading",
                description: "Our AI automatically lists your excess energy on the local marketplace at optimal prices.",
                color: "from-emerald-500 to-green-600"
              },
              {
                step: "03",
                title: "Earn & Save",
                description: "Neighbors purchase your energy while you earn credits and reduce overall community grid dependency.",
                color: "from-green-600 to-emerald-700"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white text-xl font-bold mb-6`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">{item.title}</h3>
                  <p className="text-green-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Showcase */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-green-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose GreenGrid?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <span className="text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="text-5xl font-bold text-green-300">40%</div>
                  <div className="text-xl">Average Energy Cost Reduction</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-2/5 animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-emerald-300">$1,200+</div>
                  <div className="text-lg">Annual Savings Per Household</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text text-transparent">
            Ready to Join the Energy Revolution?
          </h2>
          <p className="text-xl text-green-700 mb-12 max-w-2xl mx-auto">
            Start trading renewable energy with your neighbors today and build a sustainable future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Get Started Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white text-green-700 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-200 hover:border-green-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">GreenGrid</span>
              </div>
              <p className="text-green-200 mb-4">
                Empowering communities through peer-to-peer renewable energy trading.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-green-200">
                <div>How It Works</div>
                <div>Benefits</div>
                <div>Pricing</div>
                <div>Support</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-green-200">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 GreenGrid. All rights reserved. Powering the future of energy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;