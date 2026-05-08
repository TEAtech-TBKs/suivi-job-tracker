import React, { useRef,useEffect, useState } from 'react'
import ToggleButton from '../components/ToggleButtton'
import Navbar from '../components/Navbar'
import ImgDark from "../assets/Hero-card/Template-darkmode.png"
import ImgLight from "../assets/Hero-card/Template-lightmode.png"
import "./home.css"
import Illustration from '../assets/Images/IllustrationB.png'
import { 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowRight, 
  CheckCircle, CircleCheck,
  LineChart, 
  Bell, 
  Settings2,Star, Quote, 
  FolderOpen,
  PieChart,
  ClipboardList, 
  CalendarClock, 
  BarChart3, 
  FileText
} from 'lucide-react';
import Footer from '../components/Footer'



const Home = () => {  

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    { id: 1, name: "Alex Rivera", role: "Software Engineer", text: "Suivi JobTracker completely changed how I approach my job search. Highly recommend!", rating: 5 },
    { id: 2, name: "Sarah Chen", role: "Product Designer", text: "The custom stages feature is a lifesaver. I can finally see where I stand.", rating: 5 },
    { id: 3, name: "James Wilson", role: "Marketing Manager", text: "The reminders ensure I never miss a follow-up. Landed my role thanks to Suivi.", rating: 5 },
    { id: 4, name: "Elena Rossi", role: "Data Analyst", text: "Clean UI and very intuitive. It makes tracking dozens of apps actually fun.", rating: 4 },
    { id: 5, name: "Marcus Wright", role: "UX Researcher", text: "Finally, a tool that understands the job seeker's workflow perfectly.", rating: 5 },
    // ... add more as needed
  ];

  // Logic to update the active dot based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const quickFeatures = [
  {
    title: "Track Applications",
    desc: "Keep all your applications organized in one place.",
    icon: <ClipboardList className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-50"
  },
  {
    title: "Reminders",
    desc: "Never miss another follow-up or interview again.",
    icon: <CalendarClock className="w-5 h-5 text-orange-600" />,
    iconBg: "bg-orange-50"
  },
  {
    title: "Insights & Stats",
    desc: "See your progress and improve your strategy.",
    icon: <BarChart3 className="w-5 h-5 text-sky-600" />,
    iconBg: "bg-sky-50"
  },
  {
    title: "Documents",
    desc: "Store resumes, cover letters, and notes securely.",
    icon: <FileText className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50"
  }
];
  
  const features = [
  {
    title: "Organize Everything",
    desc: "Track all your applications, interviews, and contacts in one centralized dashboard.",
    icon: <LayoutDashboard className="w-6 h-6 text-blue-500" />,
    iconBg: "bg-blue-50"
  },
  {
    title: "Visualize Your Progress",
    desc: "See where you stand with a visual pipeline and real-time statistics.",
    icon: <LineChart className="w-6 h-6 text-sky-500" />,
    iconBg: "bg-sky-50"
  },
  {
    title: "Stay on Top",
    desc: "Get smart reminders for follow-ups, interviews, and important deadlines.",
    icon: <Bell className="w-6 h-6 text-orange-500" />,
    iconBg: "bg-orange-50"
  },
  {
    title: "Customize Your Workflow",
    desc: "Create custom stages and workflows that fit your unique job search process.",
    icon: <Settings2 className="w-6 h-6 text-purple-500" />,
    iconBg: "bg-purple-50"
  },
  {
    title: "Keep Documents Handy",
    desc: "Store and access your resumes, cover letters, and notes whenever you need them.",
    icon: <FolderOpen className="w-6 h-6 text-green-500" />,
    iconBg: "bg-green-50"
  },
  {
    title: "Make Data-Driven Decisions",
    desc: "Use insights to focus on what works and improve your job search outcomes.",
    icon: <PieChart className="w-6 h-6 text-indigo-500" />,
    iconBg: "bg-indigo-50"
  }
];
  
  
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme(); // run on mount

    // Listen for changes (important!)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="main bg-[rgb(var(--bg))] min-h-screen ">
        <div className="home bg-linear-to-b from-[rgb(var(--background))] to-[rgb(var(--gradientB))] min-h-screen">
          <Navbar/>
          <div className="hero-section flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 pt-10 lg:pt-15 overflow-hidden">
  
              {/* Text Side */}
              <div className="hero w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-6">
                
                <div className="organize inline-block bg-linear-to-r from-[rgb(var(--gradientA))] to-[rgb(var(--gradientB))]
                                text-[rgb(var(--primary))] text-sm font-medium
                                border border-[rgb(var(--primary))0.1] rounded-2xl py-1 px-5 mb-8">
                  Stay organized. Get hired
                </div>

                <div className="hero-text w-full max-w-lg">
                  <h1 className="font-bold text-4xl md:text-5xl lg:text-5xl text-[rgb(var(--text))] leading-tight">
                    Track every <br className="hidden md:block" /> 
                    application <br className="hidden md:block" />
                    <span className="text-[rgb(var(--primary))]"> Land your dream job</span>
                  </h1>
                  
                  <p className="text-[rgb(var(--text))] text-sm py-4 w-[90%] mx-auto lg:mx-0 opacity-80">
                    Suivi helps you organize your job search, track your applications, follow-ups, and interview stages—all in one place.
                  </p>

                  {/* Buttons - Stack on mobile, row on desktop */}
                  <div className="cta py-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button className="w-full sm:w-auto bg-[rgb(var(--primary))] text-[rgb(var(--bg))] px-6 py-3 text-xs font-bold rounded-sm whitespace-nowrap">
                      Get Started Free
                    </button>
                    <button className="w-full sm:w-auto text-[rgb(var(--primary))] px-6 py-3 text-xs font-bold rounded-sm border border-[rgb(var(--primary))] ">
                      Watch Demo
                    </button>
                  </div>

                  {/* Feature list - flex-wrap for small screens */}
                  <div className="mess text-xs flex flex-wrap justify-center lg:justify-start gap-4 mt-4 text-[rgb(var(--text))] opacity-70">
                    <p>• Free to start</p>
                    <p>• No credit Card</p>
                    <p>• Help you stay connected</p>
                  </div>
                </div>
              </div>

              {/* Image Side - Preserving your requested image size */}
              <div className="hero-img w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img 
                  src={dark ? ImgDark : ImgLight} 
                  alt={dark ? "Template Dark" : "Template Light"} 
                  className="w-full max-w-150 h-auto rounded-lg shadow-[0px_10px_20px_0px_rgba(16,16,18)]" 
                />
              </div>
            </div>
          </div>

                    {/* Stay on top of your search */}
           <section className="py-16 px-6 md:px-12 bg-[rgb(var(--bg))]  bg-linear-to-t from-[rgb(var(--background))] to-[rgb(var(--gradientB))]">
              <div className="max-w-7xl mx-auto">
                
                {/* Title */}
                <h2 className="text-center text-2xl md:text-3xl font-bold text-[rgb(var(--text))] mb-12">
                  Everything you need to stay <span className="text-[rgb(var(--primary))]">on top of your job search</span> 
                </h2>

                {/* Horizontal List */}
                <div className="flex flex-wrap justify-center lg:justify-between gap-y-2 gap-x-2">
                  {quickFeatures.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 sm:max-w-60 md:max-w-80 lg:max-w-70 p-4 rounded-2xl border border-[rgba(var(--card-border))] bg-[rgb(var(--card-bg))] transition-all duration-300 hover:shadow-lg hover:border-[rgb(var(--primary))]">
                      {/* Icon Box */}
                      <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} dark:bg-opacity-10`}>
                        {item.icon}
                      </div>
                      
                      {/* Text */}
                      <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-[rgb(var(--text))] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[rgb(var(--text))] opacity-60 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
           </section>

                                {/* What we do */}
              <section className="py-20 px-6 md:px-12 bg-[rgb(var(--bg))]  bg-linear-to-b from-[rgb(var(--background))] to-[rgb(var(--gradientB))]">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Header Section */}
                  <div className="text-center mb-16 space-y-4">
                    <h3 className="text-[rgb(var(--primary))] font-bold uppercase tracking-widest text-sm">
                      What We Do
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[rgb(var(--text))] tracking-tight">
                      A better way to manage your job search
                    </h2>
                    <p className="text-[rgb(var(--text))] opacity-60 text-lg max-w-2xl mx-auto">
                      <span className="font-semibold">Suivi JobTracker</span> gives you clarity, structure, and confidence throughout your job search journey.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                      <div 
                        key={i} 
                        className="group flex gap-5 p-8 rounded-2xl border border-[rgba(var(--card-border))] bg-[rgb(var(--card-bg))] transition-all duration-300 hover:shadow-lg hover:border-[rgb(var(--primary))]"
                      >
                        {/* Icon Container */}
                        <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${f.iconBg} dark:bg-opacity-10`}>
                          {f.icon}
                        </div>
                        
                        {/* Text Content */}
                        <div className="space-y-2">
                          <h4 className="font-bold text-xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
                            {f.title}
                          </h4>
                          <p className="text-[rgb(var(--text))] opacity-70 leading-relaxed text-sm">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </section>

                {/* Job seekers sec */}
                <section className="py-20 px-6 md:px-12 lg:px-20 bg-[rgb(var(--bg))]  bg-linear-to-t from-[rgb(var(--background))] to-[rgb(var(--gradientB))]">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Illustration Side */}
                    <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                      <img 
                        src={Illustration} 
                        alt="illustration" 
                        className="w-full max-w-125 h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2 text-center lg:text-left">
                      <div>
                        <p className="text-[rgb(var(--primary))] font-bold tracking-widest uppercase text-sm mb-3">
                          For Job Seekers
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[rgb(var(--text))] leading-tight tracking-tight">
                          Be organized. Be Consistent. <span className="text-[rgb(var(--primary))]">Get hired.</span>
                        </h2>
                      </div>

                      <p className="text-lg text-[rgb(var(--text))] opacity-70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Job searching is a full-time job. <span className="font-semibold italic">Suivi JobTracker</span> helps you stay organized, 
                        save time, and focus on what matters: preparing and showing up as your best self.
                      </p>

                      {/* Feature List */}
                      <ul className="space-y-4text-[rgb(var(--text))] w-full">
                        {[
                          "Stay on top of every application",
                          "Build better habits and follow through",
                          "Gain clarity and confidence in your search"
                        ].map((item, index) => (
                          <li 
                            key={index} 
                            className="flex items-start justify-start lg:justify-start gap-3 group"
                          >
                            {/* Icon - shrink-0 is vital to prevent the icon from squishing */}
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[rgb(var(--primary))] shrink-0 mt-0.5" />
                            
                            {/* Text - text-left ensures it doesn't try to center-align on mobile */}
                            <span className="text-sm md:text-base text-[rgb(var(--text))] font-medium opacity-90 text-left leading-tight">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Optional: Add a call to action button here to make it a true CTA */}
                      <div className="pt-4">
                        <button className="bg-[rgb(var(--primary))] text-[rgb(var(--bg))] px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-[rgba(var(--primary),0.3)]">
                          Start Tracking Now.
                        </button>
                      </div>
                    </div>

                  </div>
                </section>
                    {/* reviews */}
        <section className="py-20 bg-[rgb(var(--bg))]">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text))]">
                  What our users say
                </h2>
              </div>

              {/* Scrollable Container */}
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {reviews.map((review) => (
                  <div 
                    key={review.id}
                    className="min-w-[85%] md:min-w-100 snap-center p-8 rounded-3xl border border-[rgba(var(--card-border))] bg-[rgb(var(--card-bg))] flex flex-col justify-between"
                  >
                    
                    <div className="mb-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'fill-[rgb(var(--primary))] text-[rgb(var(--primary))]' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-[rgb(var(--text))] opacity-80">{review.text}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[rgb(var(--primary))] flex items-center justify-center text-white font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[rgb(var(--text))]">{review.name}</h4>
                        <p className="text-xs text-[rgb(var(--text))] opacity-50">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots (from your image) */}
              <div className="flex justify-center gap-2">
                {reviews.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === i 
                      ? 'w-6 bg-[rgb(var(--primary))]' 
                      : 'w-2.5 bg-[rgb(var(--primary))] opacity-20'
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* Tailwind Plugin hide scrollbar doesn't work everywhere, this is the fallback */}
            <style dangerouslySetInnerHTML={{ __html: `
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
          </section>                    


         <div className="mx-6 md:mx-12 mb-20 ">
            <div className="relative overflow-hidden 
                flex flex-col lg:flex-row items-center 
                justify-between gap-8 px-8 py-6 rounded-2xl 
                bg-linear-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary))]
                text-[rgb(var(--bg))] text-shadow-lg shadow-xl"
            >
              
              {/* Message Content */}
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to take control of your job search?
                </h2>
                <p className="text-lg opacity-90 max-w-md">
                  Join thousands of people who are getting more interviews and better offers with Suivi.
                </p>
                
                {/* Benefits List */}
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm font-medium opacity-90">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="w-5 h-5" />
                    Free to start
                  </li>
                  <li className="flex items-center gap-2">
                    <li className="list-disc ml-4"></li>
                    <CircleCheck className="w-5 h-5" />
                    No credit card required
                  </li>
                  <li className="flex items-center gap-2">
                    <li className="list-disc ml-4"></li>
                    <CircleCheck className="w-5 h-5" />
                    Cancel anytime
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="relative z-10 shrink-0">
                <button className="group flex items-center gap-2 bg-[rgb(var(--bg))] text-[rgb(var(--primary))] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-md">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Subtle Decorative Circle */}
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </div>
         </div>
                  <Footer/>
          </div>
          

    </>
  )
}

export default Home