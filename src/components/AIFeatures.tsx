
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AIFeatures = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the future of recruitment with cutting-edge artificial intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">GPT-4 Integration</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Smart resume improvement suggestions</li>
                <li>• AI-powered job description writing</li>
                <li>• Personalized career coaching</li>
                <li>• Skill gap analysis and recommendations</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Voice & Language AI</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Whisper-powered voice transcription</li>
                <li>• Multilingual job search support</li>
                <li>• Regional language voice input</li>
                <li>• Sentiment analysis for better matching</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Matching Engine</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Vector-based skill matching</li>
                <li>• Personality-culture fit analysis</li>
                <li>• Location and commute optimization</li>
                <li>• Real-time recommendation updates</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Job success probability scoring</li>
                <li>• Career progression predictions</li>
                <li>• Market trend analysis</li>
                <li>• Salary benchmarking insights</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
