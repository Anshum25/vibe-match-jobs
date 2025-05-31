
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Users, Search } from 'lucide-react';

const UserTypes = () => {
  const userTypes = [
    {
      icon: User,
      title: "Job Seekers",
      description: "Create voice resumes, get AI career coaching, and discover jobs tailored to your location and skills.",
      features: ["Smart Resume Builder", "AI Career Coach", "Voice/Video Resumes", "Hyperlocal Discovery"],
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Users,
      title: "Recruiters & Companies", 
      description: "Find perfect candidates with AI matching, conduct instant interviews, and showcase your company culture.",
      features: ["AI Candidate Matching", "Instant Interview Rooms", "Company Culture Videos", "Real-time Hiring"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Search,
      title: "Freelancers & Gig Workers",
      description: "Access pay-per-task opportunities, build your reputation, and connect with businesses worldwide.",
      features: ["Gig Marketplace", "Rating System", "Instant Payments", "Global Opportunities"],
      color: "from-green-600 to-emerald-600", 
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you're seeking your next opportunity, hiring talent, or offering freelance services
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${type.bgColor} hover:scale-105`}>
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{type.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{type.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-center justify-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className={`bg-gradient-to-r ${type.color} hover:opacity-90 text-white px-6 py-3 rounded-full w-full`}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
