
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Video, Calendar, Search } from 'lucide-react';

const LiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('voice');

  const demos = {
    voice: {
      title: "Voice Resume Recording",
      description: "Record your 60-second elevator pitch with AI-powered transcription",
      icon: Mic,
      color: "from-blue-500 to-cyan-500"
    },
    video: {
      title: "Instant Interview Room",
      description: "Join a live video interview with one-click scheduling",
      icon: Video, 
      color: "from-purple-500 to-pink-500"
    },
    discovery: {
      title: "Hyperlocal Job Discovery",
      description: "Find jobs within your preferred commute radius",
      icon: Search,
      color: "from-green-500 to-emerald-500"
    },
    fair: {
      title: "Virtual Job Fair",
      description: "Browse live company booths and request instant interviews",
      icon: Calendar,
      color: "from-orange-500 to-red-500"
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience our revolutionary features with interactive demos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {Object.entries(demos).map(([key, demo]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  activeDemo === key 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
                onClick={() => setActiveDemo(key)}
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center`}>
                    <demo.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{demo.title}</h3>
                    <p className="text-slate-600">{demo.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${demos[activeDemo].color} flex items-center justify-center mb-6 mx-auto animate-pulse`}>
                {React.createElement(demos[activeDemo].icon, { className: "h-12 w-12 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{demos[activeDemo].title}</h3>
              <p className="text-slate-600 mb-6">{demos[activeDemo].description}</p>
              <Button className={`bg-gradient-to-r ${demos[activeDemo].color} hover:opacity-90 text-white px-6 py-3 rounded-full`}>
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
