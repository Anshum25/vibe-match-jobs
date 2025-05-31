
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AIJobPortal
            </h3>
            <p className="text-slate-300 mb-4">
              The future of hiring with AI-powered matching, voice resumes, and instant interviews.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                🌍 Global
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                🎯 AI-Powered
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Create Voice Resume</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI Career Coach</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Job Fair Zone</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Find Candidates</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Instant Interviews</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Company Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2024 AIJobPortal. Revolutionizing global recruitment with AI.
          </p>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
