
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Video, Search, Bell, Calendar, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice & Video Resumes",
      description: "Upload 60-second voice pitches with AI transcription and tagging. Stand out with your personality.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Hyperlocal Job Discovery", 
      description: "Find jobs by distance, commute time, and language preference with interactive maps.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Instant Interview Rooms",
      description: "1-click video calls with scheduling, recording, and real-time hiring decisions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Bell,
      title: "AI Career Coach",
      description: "Get personalized career advice, skill recommendations, and learning paths powered by GPT-4.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Calendar,
      title: "Live Job Fair Zone",
      description: "Virtual job fairs with real-time employer booths and instant interview requests.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Anonymous Browse Mode",
      description: "Explore opportunities anonymously with mood filters like 'fun team' or 'remote only'.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience job hunting like never before with AI-powered tools and innovative features
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
