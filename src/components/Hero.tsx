
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Video, Search, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-blue-800/30 border border-blue-400/20 backdrop-blur-sm">
            <span className="text-blue-300 text-sm font-medium">🚀 Next-Gen AI Job Portal</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
            Find Your Dream Job with AI Power
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed">
            Voice resumes, instant interviews, hyperlocal discovery, and AI career coaching. 
            <br className="hidden lg:block" />
            The future of hiring is here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Users className="mr-2 h-5 w-5" />
              Find Jobs Now
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800/20 px-8 py-4 text-lg rounded-full backdrop-blur-sm">
              <Search className="mr-2 h-5 w-5" />
              Post a Job
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Mic className="h-8 w-8 text-blue-300 mb-3 mx-auto" />
              <p className="text-sm font-medium">Voice Resumes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Video className="h-8 w-8 text-green-300 mb-3 mx-auto" />
              <p className="text-sm font-medium">Live Interviews</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Search className="h-8 w-8 text-purple-300 mb-3 mx-auto" />
              <p className="text-sm font-medium">AI Matching</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="h-8 w-8 text-orange-300 mb-3 mx-auto" />
              <p className="text-sm font-medium">Global Reach</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
