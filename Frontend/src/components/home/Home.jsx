import React from 'react'
import { Check, Layout, Users, Zap, ArrowRight } from 'lucide-react';
import hero from './assets/hero_image.png'
function Home() {

  const Button = ({ children, variant = 'primary', className = '' }) => {
    const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95";
    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg",
      secondary: "bg-gray-700 text-white hover:bg-gray-600 shadow-md",
      outline: "border-2 border-gray-700 text-gray-700 hover:bg-gray-50",
      glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
    };

    return (
      <button className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  };

  const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center group">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl mb-4 text-white group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
    </div>
  );

  const PricingCard = ({ title, price, features, isPro }) => (
    <div className={`p-8 rounded-2xl border ${isPro ? 'border-purple-500 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md shadow-xl relative' : 'border-white/20 bg-white/10 backdrop-blur-md'} flex flex-col hover:scale-105 transition-transform duration-300`}>
      {isPro && <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold px-3 py-1 rounded-bl-lg text-white">POPULAR</div>}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="text-4xl font-bold text-white mb-6">{price}<span className="text-base font-normal text-gray-300">/mo</span></div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-200 text-sm">
            <Check size={18} className="text-green-400 shrink-0 mt-0.5" />
            {feat}
          </li>
        ))}
      </ul>
      <Button variant={isPro ? 'primary' : 'glass'} className="w-full flex justify-center items-center gap-2">
        {isPro ? 'Get Started' : 'Learn More'} <ArrowRight size={18} />
      </Button>
    </div>
  );

  const Hero = () => (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white pt-40 pb-48 px-6 overflow-visible">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="text-sm font-semibold text-gray-200">🚀 New: AI-Powered Task Suggestions</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Achieve More with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Less Stress
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          The intelligent to-do list that adapts to your workflow. Stop managing lists and start managing your flow state.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="text-lg px-8 py-4">
            Get Started for Free
          </Button>
          <Button variant="glass" className="text-lg px-8 py-4">
            Watch Demo
          </Button>
        </div>
        <p className="text-gray-400 text-sm mt-4">No credit card required • 14-day free trial</p>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="fill-gray-900 w-full h-auto block translate-y-1">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Floating App Mockup */}
      <div className="relative z-20 mt-12 -mb-72 mx-auto max-w-5xl px-4">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-3xl"></div>
        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl">
          <img
            src={hero}
            alt="FlowState Dashboard Mockup"
            className="rounded-xl w-full"
          />
        </div>
      </div>
    </section>
  );

  const Features = () => (
    <section className="bg-gray-900 pt-80 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose FlowState?</h2>
          <p className="text-gray-400 text-lg">Everything you need to stay organized and productive</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Layout}
            title="Intelligent Task Management"
            desc="Manage complex projects with automated categorization and smart tagging systems."
          />
          <FeatureCard
            icon={Users}
            title="Seamless Collaboration"
            desc="Drag-and-drop tasks to team members. Real-time comments and file sharing."
          />
          <FeatureCard
            icon={Zap}
            title="Cross-Platform Sync"
            desc="Start on your laptop, finish on your phone. Real-time synchronization everywhere."
          />
        </div>
      </div>
    </section>
  );

  const SocialProof = () => (
    <section className="bg-gray-800/50 backdrop-blur-sm py-16 px-6 border-y border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted By Teams At</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          <span className="text-2xl font-bold font-serif text-gray-300">Google</span>
          <span className="text-2xl font-bold font-mono text-gray-300">Atlassian</span>
          <span className="text-2xl font-bold font-sans text-gray-300">Microsoft</span>
          <span className="text-2xl font-bold text-gray-300">Shopify</span>
          <span className="text-2xl font-bold italic text-gray-300">Framer</span>
        </div>
      </div>
    </section>
  );

  const Testimonial = () => (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-purple-400 text-6xl font-serif mb-6">"</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          FlowState changed how my team works. <br />
          We're more organized and focused than ever.
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full mb-3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            SJ
          </div>
          <div className="font-bold text-white">Sarah Johnson</div>
          <div className="text-gray-400 text-sm">Product Manager at TechCorp</div>
        </div>
      </div>
    </section>
  );

  const Pricing = () => (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-300 text-lg">Flexible pricing for teams of all sizes</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Free"
            price="$0"
            features={["Up to 3 projects", "Basic task lists", "Mobile app access", "Email support"]}
          />
          <PricingCard
            title="Pro"
            price="$20"
            isPro={true}
            features={["Unlimited projects", "Advanced collaboration", "Task calendar & reminders", "Priority support", "AI task suggestions"]}
          />
          <PricingCard
            title="Team"
            price="$100"
            features={["Everything in Pro", "Team analytics", "Admin permissions", "SSO & security", "Dedicated account manager"]}
          />
        </div>
      </div>
    </section>
  );

  const CTA = () => (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Join thousands of teams already using FlowState to achieve more
        </p>
        <Button variant="primary" className="text-lg px-8 py-4">
          Start Free Trial
        </Button>
      </div>
    </section>
  );

  return (
    <div className="font-sans antialiased text-white bg-gray-900 min-h-screen flex flex-col">
      <Hero />
      <Features />
      <SocialProof />
      <Testimonial />
      <Pricing />
      <CTA />
    </div>
  );
}

export default Home