import React, { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  Linkedin, 
  MapPin,
  ExternalLink, 
  Terminal,
  Cpu,
  Database,
  Layers,
  Layout,
  Star,
  Zap,
  ChevronRight,
  GraduationCap,
  Briefcase,
  FolderKanban,
  Trophy,
  Users,
  Download
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import headerImage from "../assets/headerimg.jpeg";
import resumePDF from "../assets/Shafia Tasnim Samonti (CV) .pdf";

const SKILLS_CATEGORIES = [
  {
    title: "Programming & Scripting",
    icon: <Terminal size={20} />,
    tags: ["Python", "MATLAB", "C", "C++"]
  },
  {
    title: "Data Handling & Visualization",
    icon: <Database size={20} />,
    tags: ["Microsoft Excel"]
  },
  {
    title: "Tools & Platforms",
    icon: <Cpu size={20} />,
    tags: ["SolidWorks", "AutoCAD", "CATIA", "ANSYS", "Simulink"]
  },
  {
    title: "Manufacturing & IPE",
    icon: <Layers size={20} />,
    tags: ["Production Planning", "Process Improvement", "Line Balancing", "Forecasting", "Supply Chain Fundamentals"]
  },
  {
    title: "Graphics & Design",
    icon: <Layout size={20} />,
    tags: ["Adobe Illustrator", "Blender", "Canva"]
  },
  {
    title: "Soft Skills",
    icon: <Zap size={20} />,
    tags: ["Analytical Thinking", "Problem Solving", "Leadership", "Communication", "Cross-functional Collaboration", "Time Management", "Adaptability"]
  }
];

const SUBHEADLINE_ITEMS = [
  "An Industrial Engineer",
  "A Digital Innovator",
  "A Problem Solver"
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Education");
  const [scrolled, setScrolled] = useState(false);
  const [subHeadlineIndex, setSubHeadlineIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Subheadline cycle
    const interval = setInterval(() => {
      setSubHeadlineIndex((prev) => (prev + 1) % SUBHEADLINE_ITEMS.length);
    }, 3000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const tabContent = {
    "Education": (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-bg-card p-6 rounded-2xl border border-border-light shadow-sm">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-text-heading">Bangladesh University of Engineering & Technology (BUET)</h3>
            <span className="text-accent-primary font-mono text-sm">2022 - Present</span>
          </div>
          <p className="text-text-bright mb-2">Bachelor of Science in Industrial & Production Engineering</p>
          <p className="text-accent-primary font-bold mb-4">CGPA: 3.64</p>
          <div className="pt-4 border-t border-border-light">
            <p className="text-xs text-text-body uppercase tracking-widest font-bold mb-2">Awards</p>
            <p className="text-sm text-text-bright leading-relaxed">
              University Stipend at Level-1/Term-2, Level-2/Term-2, Level-3/Term-1, Level-3/Term-2 & Level-4/Term-1.
            </p>
          </div>
        </div>
        <div className="bg-bg-card p-6 rounded-2xl border border-border-light shadow-sm">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-text-heading">Rajshahi College</h3>
            <span className="text-accent-primary font-mono text-sm">2020</span>
          </div>
          <p className="text-text-bright">Higher Secondary Certificate (HSC)</p>
          <p className="text-accent-primary font-bold">GPA: 5.00</p>
        </div>
      </div>
    ),
    "Work Experience": (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-bg-card p-8 rounded-2xl border border-border-light shadow-sm">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-text-heading uppercase tracking-tight italic">Industrial Attachment</h3>
            <span className="text-accent-primary font-mono text-sm">10 Nov 2025 - 04 Dec 2025</span>
          </div>
          <p className="text-accent-primary font-bold mb-6">PRAN Industrial Park - PRAN-RFL Group</p>
          <ul className="space-y-5">
            {[
              "Analyzed high-capacity FMCG production systems including UHT milk (12,000 L/hr), Juice (230,000 packs/day), and Powder Milk (8,000 kg/day) to understand integrated dairy and beverage operations.",
              "Evaluated a Kaizen initiative eliminating 40% rejection of 2,000 L/hr returned milk, projecting BDT 26.4 crore annual savings via aseptic tank integration.",
              "Assessed HACCP-based CCP & OPRP controls across pasteurization (83-85°C), UHT sterilization (>=135°C), and metal detection to ensure food safety compliance.",
              "Reviewed multi-effect evaporation and spray drying systems (170°C inlet air) achieving <0.01% production waste.",
              "Conducted throughput, bottleneck, and line balancing analysis in juice and frozen food packaging; proposed automation reducing manual labor from 75% to 10% with break-even evaluation.",
              "Analyzed CIP (85-90°C), homogenization (120-170 bar), PLC-controlled packaging, and plant utilities (Boiler, Compressor, Chiller, WTP, ETP) to assess operational reliability and maintenance practices.",
              "Collaborated cross-functionally (Production, QC, Engineering, Maintenance) on quality metrics, packaging integrity tests, and continuous improvement initiatives."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-text-bright text-sm leading-relaxed">
                <span className="text-accent-primary mt-0.5 select-none text-lg">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    "Projects": (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-bg-card p-8 rounded-2xl border border-border-light shadow-sm">
          <h3 className="text-2xl font-bold text-text-heading mb-6 tracking-tight italic">Multi-purpose Plumbing Machine</h3>
          <p className="text-accent-primary font-semibold mb-6">Innovative Engineering Solution</p>
          <ul className="space-y-4 font-light">
            {[
              "Designed a motorized pipe cutting and threading machine to improve productivity and safety in construction plumbing operations.",
              "Conducted a survey of 45 plumbers; identified key inefficiencies including 71% high time consumption, 69% excessive physical effort, and 56% precision issues in manual methods.",
              "Applied Quality Function Deployment (QFD) to translate customer needs into engineering specifications; prioritized portability (80%) and adjustable pipe sizing (67%).",
              "Modeled full assembly in SolidWorks and performed ANSYS static structural analysis evaluating stress, deformation, fatigue life, and safety factor of critical components.",
              "Executed material selection (Digital Logic Method), manufacturing process selection, and cost, break-even, and sensitivity analysis to validate technical and economic feasibility."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-text-body text-sm leading-relaxed">
                <span className="text-accent-primary mt-0.5 select-none">/</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    "Extracurriculars": (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {[
          {
            role: "CCI Next Talent Campus Ambassador",
            org: "Coca-Cola Bangladesh",
            period: "June 2025 - Present",
            points: ["Attended orientation and seminar led by Supply Chain Head, focusing on strategic thinking.", "Promoted Coca-Cola job openings on campus & assisted students with applications."]
          },
          {
            role: "Mentee of Womentor 6.0",
            org: "Banglalink",
            period: "Dec 2024 - July 2025",
            points: ["One-on-one mentorship by Banglalink's top employee Syaba Trannum Quader focused on career development.", "Completed 12 intensive career sessions at Banglalink Tiger's Den. Engaged in experience day at SOS Children's Village."]
          },
          {
            role: "Vice President",
            org: "BUET Entrepreneurship Development Club",
            period: "Apr 2025 - Present",
            points: ["Arranged events like EDC Talk, Taka Talk, TEDx BUET, BUETian Entrepreneurship Summit 2026.", "Designed creative materials to enhance club branding. Hosted events, demonstrating strong communication skills."]
          },
          {
            role: "Campus Ambassador",
            org: "ISCEA Prize Case Competition 2025",
            period: "June 2025 - Present",
            points: ["Attended orientation and seminar led by Ejazur Rahman, focusing on strategic thinking.", "Engaged in creative group activities to enhance team collaboration and problem-solving.", "Organized seminar for ISCEA Case Competition for around 220 students. Engaged and coordinated with students extensively."]
          },
          {
            role: "Campus Coordinator",
            org: "Orange Corner Bangladesh",
            period: "Mar 2024 - Apr 2025",
            points: ["Coordinated workshop, seminar, and event booth at BUET in collaboration with EDC.", "Participated in OCB cohort programs; facilitated career-focused sessions."]
          },
          {
            role: "Campus Innovative Coordinator",
            org: "Needle Innovation Challenge",
            period: "Jan 2024 - Feb 2025",
            points: ["Arranged seminar and event booth at BUET.", "Participated in head Office visiting and gaining practical insights."]
          },
          {
            role: "Design Secretary",
            org: "Association of Industrial & Production Engineers (AIPE)",
            period: "Mar 2024 - Present",
            points: ["Organized excel competition for IPE Fiesta-2026. Organized poster presentation competition for IPE Fiesta-2024.", "Designed promotional materials and managed departmental programs."]
          },
          {
            role: "Senior Analyst of Science Analysis Sub Team",
            org: "Team Interplanetar Mars Rover Team",
            period: "Jan 2024 - Feb 2025",
            points: ["Contributed to European Rover Challenge (ERC), Anatolian Rover Challenge, and International Rover Design Challenge.", "Played key role in scientific analysis and mission design."]
          }
        ].map((item, i) => (
          <div key={i} className="bg-bg-card p-6 rounded-2xl border border-border-light shadow-sm">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h4 className="text-lg font-bold text-text-heading leading-tight">{item.role} <span className="text-accent-primary font-medium">@ {item.org}</span></h4>
              <span className="text-text-body font-mono text-xs mt-1 md:mt-0">{item.period}</span>
            </div>
            <ul className="space-y-2 mt-4">
              {item.points.map((p, idx) => (
                <li key={idx} className="flex gap-3 text-text-body text-xs leading-relaxed">
                  <span className="text-accent-primary mt-0.5 select-none opacity-50 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
    "Achievements": (
      <div className="grid md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {[
          "Champion, 5th Cohort University Hub Program 2024 (RISE, BUET)",
          "Champion, Ideation Challenge 5.0 - Orange Corners Bangladesh",
          "Champion, Idea Presentation Bangladesh Youth Climate Sustainability & Innovation Summit 2025",
          "70% Scholarship Recipient ISCEA Prize Global Case Competition 2025",
          "Finalist - Hult Prize 2026",
          "1st Place (Preliminary Round) - Anatolian Rover Challenge 2023",
          "2nd Place (Preliminary Round) - Anatolian Rover Challenge 2024",
          "Runners-Up - Video Essay Challenge, BUET Brainiacs"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-bg-card p-4 rounded-xl border border-border-light shadow-sm transition-transform hover:translate-y-[-2px]">
            <div className="p-2 bg-accent-primary/5 rounded-full text-accent-primary">
              <Trophy size={16} />
            </div>
            <p className="text-text-heading text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-body selection:bg-accent-primary/10">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-bg-base/80 backdrop-blur-xl border-b border-border-light py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-text-heading tracking-tight">
            SHAFIA TASNIM SAMONTI<span className="text-accent-primary"></span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            {["Home", "Skills", "Resume", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-widest text-text-body hover:text-accent-primary transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Section 1: Hero */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 gap-8 md:gap-16 lg:gap-20">
          <div className="flex-1 w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-accent-primary font-bold text-lg mb-4">Hi! I'm Samonti!</h2>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-text-heading tracking-tighter leading-[0.9] mb-8">
                Digital <br />
                Innovator
              </h1>
              
              {/* Refined Animated Subheadline */}
              <div className="h-10 mb-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={subHeadlineIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="font-mono text-text-bright text-xl md:text-2xl font-bold flex items-center gap-3"
                  >
                    <span className="text-accent-primary">//</span> {SUBHEADLINE_ITEMS[subHeadlineIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-text-body text-xl max-w-2xl leading-relaxed mb-12 font-medium">
                Final-year Industrial and Production Engineering student at BUET. Passionate about <span className="text-text-heading border-b-2 border-accent-primary/30">digital transformation</span> and developing innovative, data-driven solutions for real-world impact.
              </p>

              <div className="flex flex-col gap-5 font-mono text-[11px] mb-12 text-text-bright font-bold">
                <div className="flex flex-wrap gap-8 items-center">
                  <a href="tel:+8801764397966" className="flex items-center gap-2 hover:text-accent-primary transition-colors"><Phone size={14} className="text-accent-primary" /> +880 1764-397966</a>
                  <a href="mailto:shafiatasnimsamonti@gmail.com" className="flex items-center gap-2 hover:text-accent-primary transition-colors"><Mail size={14} className="text-accent-primary" /> shafiatasnimsamonti@gmail.com</a>
                </div>
                <div className="flex flex-wrap gap-8 items-center">
                  <a href="https://www.linkedin.com/in/shafia-tasnim-samonti-8754ab27a/" className="flex items-center gap-2 hover:text-accent-primary transition-colors"><Linkedin size={14} className="text-accent-primary" /> shafia-tasnim-samonti</a>
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-accent-primary" /> BUET, Dhaka</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                 <a href="#contact" className="px-10 py-5 bg-text-heading text-white font-bold rounded-full hover:bg-accent-primary transition-all shadow-xl shadow-accent-primary/10 uppercase tracking-widest text-[10px]">
                  Get in touch
                 </a>
                 <a href="#resume" className="px-10 py-5 border border-border-light text-text-heading font-bold rounded-full hover:bg-white transition-all uppercase tracking-widest text-[10px]">
                  View Journey
                 </a>
                 <a href={resumePDF} download="Shafia Tasnim Samonti (CV).pdf" className="px-10 py-5 bg-accent-primary text-white font-bold rounded-full hover:bg-accent-primary/80 transition-all shadow-xl shadow-accent-primary/20 uppercase tracking-widest text-[10px] flex items-center gap-2">
                  <Download size={14} /> Download CV
                 </a>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full md:flex-1 mt-8 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-square max-w-[450px] mx-auto md:max-w-none"
            >
              <div className="absolute inset-0 bg-accent-primary/5 rounded-[80px] rotate-6 border-2 border-accent-primary/10"></div>
              <div className="absolute inset-0 bg-bg-card rounded-[80px] -rotate-3 border border-border-light overflow-hidden flex items-center justify-center shadow-2xl">
                <img 
                  src={headerImage} 
                  alt="Shafia Tasnim Samonti" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Technical Arsenal */}
        <section id="skills" className="py-32 scroll-mt-20">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <span className="text-accent-primary font-bold text-xs uppercase tracking-[0.6em] block mb-4">System Capabilities & Tools</span>
            <h2 className="text-5xl md:text-7xl font-black text-text-heading tracking-tighter uppercase leading-none italic">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS_CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-card p-10 rounded-[32px] border border-border-light hover:border-accent-primary/30 transition-all shadow-sm hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-bg-offset text-accent-primary rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-accent-primary group-hover:text-white">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-black text-text-heading mb-6 uppercase tracking-widest">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-bg-offset text-text-bright text-[11px] rounded-full border border-border-light font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Resume & Experience */}
        <section id="resume" className="py-32 scroll-mt-20">
          <div className="mb-24 text-center">
            <span className="text-accent-primary font-bold text-xs uppercase tracking-[0.6em] block mb-4">Academic & Professional Journey</span>
            <h2 className="text-5xl md:text-7xl font-black text-text-heading tracking-tighter uppercase leading-none italic">Resume & Experience</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-20">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? "bg-accent-primary text-white shadow-xl shadow-accent-primary/20 scale-105" : "text-text-body bg-bg-card border border-border-light hover:bg-bg-offset"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto min-h-[500px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </section>

        {/* Section 4: References */}
        <section id="contact" className="py-32 border-t border-border-light">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <h2 className="text-4xl font-black text-text-heading italic uppercase tracking-tighter">References</h2>
              <div className="space-y-8">
                <div className="bg-bg-card p-10 rounded-[32px] border border-border-light shadow-sm">
                  <h4 className="text-xl font-bold text-text-heading mb-1">Dr. Ahsan Akhter Hasin</h4>
                  <p className="text-xs text-text-body mb-6 uppercase tracking-widest font-bold">Professor, BUET</p>
                  <a href="mailto:aahasin@ipe.buet.ac.bd" className="inline-flex items-center gap-2 text-accent-primary text-[11px] font-black font-mono border-b-2 border-accent-primary/10 hover:border-accent-primary transition-all uppercase">
                    aahasin@ipe.buet.ac.bd <ExternalLink size={14} />
                  </a>
                </div>

                <div className="bg-bg-card p-10 rounded-[32px] border border-border-light shadow-sm">
                  <h4 className="text-xl font-bold text-text-heading mb-1">Rashik Ahnaf</h4>
                  <p className="text-xs text-text-body mb-6 uppercase tracking-widest font-bold">Lecturer, BUET</p>
                  <a href="mailto:rashik@ipe.buet.ac.bd" className="inline-flex items-center gap-2 text-accent-primary text-[11px] font-black font-mono border-b-2 border-accent-primary/10 hover:border-accent-primary transition-all uppercase">
                    rashik@ipe.buet.ac.bd <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-bg-card p-12 rounded-[50px] border border-border-light shadow-2xl self-stretch flex flex-col justify-center">
               <h2 className="text-4xl font-black text-text-heading mb-8 tracking-tighter italic">Collaborate <br />with Precision.</h2>
               <p className="text-text-body mb-12 text-lg leading-relaxed max-w-sm">Eager to contribute my analytical mindset to grameenphone's digital future.</p>
               <div className="space-y-6">
                  <a href="#" className="flex items-center gap-6 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-text-heading flex items-center justify-center text-white"><Linkedin size={24} /></div>
                    <span className="font-mono text-xs uppercase tracking-widest font-black border-b border-text-heading/10 group-hover:border-text-heading">LinkedIn</span>
                  </a>
                  <a href="mailto:shafiatasnimsamonti@gmail.com" className="flex items-center gap-6 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-accent-primary flex items-center justify-center text-white"><Mail size={24} /></div>
                    <span className="font-mono text-xs uppercase tracking-widest font-black border-b border-accent-primary/10 group-hover:border-accent-primary">Email</span>
                  </a>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-16 px-6 bg-bg-offset border-t border-border-light">
        <p className="text-text-body text-[9px] uppercase font-mono tracking-[0.5em] font-medium italic">© 2026 Shafia Tasnim Samonti | BUET IPE Digital Portfolio</p>
      </footer>
    </div>
  );
}
