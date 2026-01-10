import React, { useEffect, useState } from 'react';
import { Check, Layout, Users, Zap, ArrowRight } from 'lucide-react';
import hero from './assets/hero_image.png';


function Home() {
  useEffect(() => {
    document.title = 'FlowState — Focused productivity for teams';
  }, []);

  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validateContact(data) {
    const e = {};
    if (!data.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Valid email required';
    if (data.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validateContact(contact);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Simulate send — replace with real API call
      setTimeout(() => {
        setSent(true);
        setContact({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const base = 'px-6 py-3 rounded-lg font-semibold transition-transform transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:brightness-105',
      glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20',
      outline: 'border-2 border-white/20 text-white hover:bg-white/10'
    };

    return (
      <button className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };

  const FeatureCard = ({ icon: Icon, title, desc }) => (
    <article className="p-6 rounded-2xl bg-white/6 border border-white/10 text-center group">
      <div className="mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-linear-to-br from-blue-500 to-purple-600 text-white">
        <Icon size={24} />
      </div>
      <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </article>
  );

  const PricingCard = ({ title, price, features, isPro }) => (
    <section className={`p-6 rounded-2xl ${isPro ? 'bg-linear-to-br from-blue-600/10 to-purple-600/10 border border-purple-500 shadow-xl' : 'bg-white/6 border border-white/10'}`}>
      {isPro && <div className="inline-block px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold bg-yellow-400 text-black mb-4">POPULAR</div>}
      <h4 className="font-bold text-white text-xl mb-2">{title}</h4>
      <div className="text-3xl font-extrabold text-white mb-4">{price}<span className="text-sm font-normal text-gray-300">/mo</span></div>
      <ul className="space-y-3 mb-6 text-sm text-gray-200">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={16} className="mt-1 text-green-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button variant={isPro ? 'primary' : 'glass'} className="w-full">{isPro ? 'Get Started' : 'Learn More'}</Button>
    </section>
  );

  return (
    <main id='home' className="min-h-screen bg-gray-900 text-white scroll-smooth">
      {/* HERO */}
      <header className="relative pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-block bg-white/6 px-3 py-1 rounded-full mb-6">🚀 New — AI task suggestions</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">Focus on what matters. <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Ship less, finish more.</span></h1>
            <p className="text-gray-300 max-w-2xl mb-6">FlowState helps teams cut context-switching with smart task flows and integrated priorities. Built for focus and predictable delivery.</p>

            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" className="text-lg">Get Started — Free</Button>
              <Button variant="glass" className="text-lg">Watch Demo</Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold">SJ</div>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-gray-400">Product Manager, TechCorp</div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3 opacity-70">Trusted by <span className="font-semibold ml-2">Google • Microsoft • Atlassian</span></div>
            </div>
          </div>

          <div className="mx-auto max-w-md lg:max-w-lg relative">
            <div className="rounded-2xl p-2 bg-linear-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl absolute -inset-3 -z-10"></div>
            <div className="bg-white/6 p-4 rounded-2xl border border-white/10">
              <img src={hero} alt="FlowState mockup" className="rounded-xl w-full shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES - distinct section with ID */}
      <section id="features" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Built for teams who ship</h2>
            <p className="text-gray-400 mt-3">Focus features that remove friction and give you time back.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard icon={Layout} title="Smart workflows" desc="Automate routine task flows and reduce manual triage." />
            <FeatureCard icon={Users} title="Seamless collaboration" desc="Assign, comment and share files without leaving the task." />
            <FeatureCard icon={Zap} title="Cross-device sync" desc="Real-time sync across web and mobile with offline support." />
          </div>
        </div>
      </section>

      {/* PRICING - separate section */}
      <section id="pricing" className="py-20 px-6 bg-linear-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Flexible pricing for every team</h2>
          <p className="text-gray-300 mt-3">Transparent, predictable pricing. No surprise bills.</p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <PricingCard title="Free" price="$0" features={["Up to 3 projects", "Basic task lists", "Mobile app access", "Email support"]} />
          <PricingCard title="Pro" price="$20" isPro features={["Unlimited projects", "Advanced collaboration", "Task calendar", "Priority support"]} />
          <PricingCard title="Team" price="$100" features={["Everything in Pro", "Team analytics", "SSO & security", "Dedicated manager"]} />
        </div>
      </section>

      {/* CONTACT - separate section with form */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3">Get in touch</h3>
            <p className="text-gray-400 mb-6">Questions, feedback or want a demo? Drop a message and we'll reply within one business day.</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="name">Name</label>
                <input id="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-600" />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-600" />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="message">Message</label>
                <textarea id="message" rows={5} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-600" />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <div>
                <Button type="submit" variant="primary">Send message</Button>
                {sent && <span className="ml-4 text-sm text-green-400">Thanks — we'll reply soon.</span>}
              </div>
            </form>
          </div>

          <aside className="bg-white/4 rounded-2xl p-6 border border-white/10">
            <h4 className="font-semibold text-white mb-2">Sales & partnerships</h4>
            <p className="text-gray-300 text-sm mb-4">Email <a href="mailto:sales@flowstate.example" className="underline">sales@flowstate.example</a> for partnership enquiries.</p>

            <div className="text-sm text-gray-400">Headquarters<br/>123 Product Ave<br/>Bengaluru, India</div>
          </aside>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400">© {new Date().getFullYear()} FlowState — Built with focus</footer>
    </main>
  );
}

export default Home;
