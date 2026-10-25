import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Send, 
  Ruler, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  RefreshCw,
  Calculator,
  Sliders,
  DollarSign
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const AiDoorAdvisor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'estimator' | 'chat'>('estimator');

  // Estimator States
  const [openingType, setOpeningType] = useState('balcony-sliding');
  const [widthFt, setWidthFt] = useState('6');
  const [heightFt, setHeightFt] = useState('7');
  const [priorities, setPriorities] = useState<string[]>(['high-wind']);
  const [analyzed, setAnalyzed] = useState(false);

  // Chat States
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; spec?: any }>>([
    {
      sender: 'ai',
      text: 'Namaste! I am the Shiva Sai AI Door & Screen Specialist. I can help recommend the exact mosquito net system, frame profile, and calculate instant sq ft pricing for your Hyderabad home. How can I assist you today?'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const togglePriority = (p: string) => {
    setPriorities((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  // Calculation Logic
  const width = parseFloat(widthFt) || 0;
  const height = parseFloat(heightFt) || 0;
  const sqft = Math.round(width * height * 10) / 10;

  // AI Recommendation rules
  const getRecommendation = () => {
    let systemName = 'Balcony 2-Track Sliding Mosquito Net Door';
    let meshType = 'Phifer Charcoal Invisible Fiberglass Mesh';
    let frameSpec = 'Architectural 6063-T6 Aluminium (1.5mm) with Nylon Roller Bearings';
    let ratePerSqFt = 165;
    let warranty = '5 Years Warranty';
    let notes = 'Smooth fingertip glide with full perimeter wool pile insect seal.';

    if (priorities.includes('pets') || priorities.includes('rodents')) {
      systemName = 'Stainless Steel SS 304 High-Security Tuff-Mesh Door';
      meshType = 'Heavy 0.8mm Marine-Grade SS 304 High-Tensile Wire (Anti-Claw)';
      frameSpec = 'Structural Heavy Aluminium (2.0mm) + Secondary Mortise Lock';
      ratePerSqFt = 260;
      warranty = '15 Years Rust-Free Warranty';
      notes = '100% cat claw, dog scratch, and rat bite proof with knife-shear resistance.';
    } else if (openingType === 'french-door' || priorities.includes('barrier-free')) {
      systemName = 'Barrier-Free Pleated Accordion Mosquito Net Door';
      meshType = 'Water-Repellent Polypropylene Zig-Zag Pleated Mesh';
      frameSpec = 'Ultra-low 3mm PVC floor guide ribbon with Kevlar tension strings';
      ratePerSqFt = 240;
      warranty = '5 Years Open-Close Warranty';
      notes = 'Zero tripping hazard, wheelchair friendly, folds into slim 7cm side cassette.';
    } else if (openingType === 'upvc-window') {
      systemName = 'UPVC 3rd-Track Integrated Sliding Insect Shutter';
      meshType = 'American Phifer High-Def Fine Weave Fiberglass';
      frameSpec = 'Slimline Aluminium Section powder-coated in matching UPVC Pure White';
      ratePerSqFt = 110;
      warranty = '5 Years Warranty';
      notes = 'Snaps directly into existing window track grooves without modifying window frame.';
    } else if (openingType === 'cloth-hanger') {
      systemName = 'Balcony Ceiling Cloth Drying 6-Pipe Pulley System';
      meshType = 'UV-Stabilized High-Load Nylon Pulley Cords';
      frameSpec = '100% Rust-Proof Stainless Steel SS 304 Tubular Pipes';
      ratePerSqFt = 300;
      warranty = '10 Years Rust-Free Guarantee';
      notes = 'Frees up 100% balcony floor area, supports up to 50kg wet clothes.';
    }

    const estimatedTotal = Math.round(sqft * ratePerSqFt);
    return {
      systemName,
      meshType,
      frameSpec,
      ratePerSqFt,
      sqft,
      estimatedTotal,
      warranty,
      notes
    };
  };

  const currentRec = getRecommendation();

  const handleAnalyze = () => {
    setAnalyzed(true);
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuestion.trim()) return;

    const userText = inputQuestion.trim();
    setInputQuestion('');
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const q = userText.toLowerCase();

      if (q.includes('pet') || q.includes('dog') || q.includes('cat')) {
        reply = `For pets (dogs and cats), we strongly recommend our **SS 304 Stainless Steel Tuff-Mesh Door** (₹260/sq ft). It is woven from 0.8mm thick marine-grade high-tensile wire. It cannot be torn by cat claws, bitten through by rodents, or broken by jumping dogs. We also provide an optional 1-foot protective bottom aluminium kick-plate!`;
      } else if (q.includes('price') || q.includes('cost') || q.includes('rate')) {
        reply = `Our transparent rates in Hyderabad are:
• UPVC Sliding Window Net: ₹110/sq ft
• Balcony Sliding Mosquito Doors: ₹165 - ₹175/sq ft
• Barrier-Free Pleated Doors: ₹240 - ₹310/sq ft
• Stainless Steel SS 304 Security Doors: ₹260 - ₹320/sq ft
• Ceiling Cloth Drying Pulley Hangers: ₹1,800/complete 6-pipe set.
All rates include custom fabrication, doorstep measurement, and professional installation!`;
      } else if (q.includes('location') || q.includes('area') || q.includes('kukatpally') || q.includes('gachibowli')) {
        reply = `Yes! We provide doorstep laser measurement within 2 hours across all Hyderabad locations including Kukatpally, Gachibowli, Hitec City, Madhapur, Kondapur, Miyapur, Nizampet, Bachupally, Manikonda, Jubilee Hills, Banjara Hills, Begumpet, and Secunderabad. We also service Vijayawada and Guntur.`;
      } else if (q.includes('clean') || q.includes('wash') || q.includes('maintenance')) {
        reply = `Our Phifer fiberglass and SS 304 stainless steel meshes can easily be cleaned using a wet sponge, microfiber cloth, or gentle water hose spray. Our magnetic window frames can even be peeled off in 2 seconds, washed under a tap, and snapped right back on!`;
      } else {
        reply = `Based on your query, Shiva Sai Home Needs can custom-fabricate the exact insect screen solution for your door or window dimensions with heavy architectural 6063-T6 aluminium and high-tensile mesh. Would you like our master technician to visit your home for a free doorstep laser measurement today?`;
      }

      setChatMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  const getWhatsAppMessage = () => {
    const text = `Hi Shiva Sai Home Needs! I used your AI Door Advisor:
- Opening: ${openingType}
- Size: ${widthFt} ft x ${heightFt} ft (${currentRec.sqft} sq ft)
- Recommended Solution: ${currentRec.systemName}
- Estimated Budget: ₹${currentRec.estimatedTotal} (approx @ ₹${currentRec.ratePerSqFt}/sq ft)
Please schedule a free doorstep measurement at my location.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-blue-100 shadow-xl overflow-hidden hover-lift">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#004AAD] via-[#0A3E8A] to-[#00AEEF] p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Bot className="w-7 h-7 text-[#00AEEF]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F58220] text-white text-[11px] font-bold">
                <Sparkles className="w-3 h-3" />
                <span>AI Powered Assistant</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight mt-0.5">
                AI Mosquito Net & Door Recommendation System
              </h3>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-white/15 backdrop-blur-md p-1 rounded-xl self-start sm:self-auto border border-white/20 text-xs font-bold">
            <button
              onClick={() => setActiveTab('estimator')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'estimator'
                  ? 'bg-white text-[#004AAD] shadow-xs'
                  : 'text-white hover:text-blue-100'
              }`}
            >
              1. Smart Cost Estimator
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'chat'
                  ? 'bg-white text-[#004AAD] shadow-xs'
                  : 'text-white hover:text-blue-100'
              }`}
            >
              2. Ask AI Specialist
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Smart Cost Estimator */}
      {activeTab === 'estimator' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  1. Select Opening Type:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'balcony-sliding', label: 'Balcony Sliding Door' },
                    { id: 'french-door', label: 'French / Double Door' },
                    { id: 'upvc-window', label: 'UPVC Sliding Window' },
                    { id: 'cloth-hanger', label: 'Ceiling Cloth Hanger' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setOpeningType(item.id);
                        setAnalyzed(true);
                      }}
                      className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                        openingType === item.id
                          ? 'border-[#004AAD] bg-blue-50/70 text-[#004AAD] ring-2 ring-blue-100'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  2. Approximate Dimensions (Feet):
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium">Width (ft)</span>
                    <input
                      type="number"
                      step="0.5"
                      min="1"
                      max="25"
                      value={widthFt}
                      onChange={(e) => {
                        setWidthFt(e.target.value);
                        setAnalyzed(true);
                      }}
                      className="w-full text-sm font-bold p-2.5 rounded-xl border border-slate-300 focus:border-[#004AAD] focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium">Height (ft)</span>
                    <input
                      type="number"
                      step="0.5"
                      min="1"
                      max="15"
                      value={heightFt}
                      onChange={(e) => {
                        setHeightFt(e.target.value);
                        setAnalyzed(true);
                      }}
                      className="w-full text-sm font-bold p-2.5 rounded-xl border border-slate-300 focus:border-[#004AAD] focus:outline-none"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-mono">
                  Calculated Area: <strong>{sqft} sq ft</strong> (Standard tolerance ±2%)
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  3. Key Household Requirements:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'pets', label: 'Pets (Dog / Cat claws)' },
                    { id: 'high-wind', label: 'High Floor / Strong Wind' },
                    { id: 'barrier-free', label: 'Barrier-Free (Zero-Trip)' },
                    { id: 'rodents', label: 'Rodents / Lizards' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        togglePriority(p.id);
                        setAnalyzed(true);
                      }}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        priorities.includes(p.id)
                          ? 'border-[#F58220] bg-orange-50/70 text-slate-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {priorities.includes(p.id) ? '✓ ' : '+ '}
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Output Column */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#004AAD]">
                    AI Analysis Result
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {currentRec.warranty}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  {currentRec.systemName}
                </h4>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004AAD] shrink-0 mt-0.5" />
                    <span><strong>Mesh:</strong> {currentRec.meshType}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004AAD] shrink-0 mt-0.5" />
                    <span><strong>Frame:</strong> {currentRec.frameSpec}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-[11px] text-blue-900">
                    {currentRec.notes}
                  </div>
                </div>

                {/* Pricing Box */}
                <div className="pt-3 border-t border-slate-200">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Estimated Price</p>
                      <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        ₹{currentRec.estimatedTotal.toLocaleString('en-IN')}
                        <span className="text-xs font-normal text-slate-500 ml-1.5">(@ ₹{currentRec.ratePerSqFt}/sq ft)</span>
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg">
                      Free Doorstep Sizing
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    *Includes custom site fabrication, laser measurement & installation in Hyderabad & AP.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/${siteConfig.company.whatsappNumber}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#004AAD] hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover-lift transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#00AEEF]" />
                  <span>Book Free Measurement on WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover-lift transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive Chat with AI Specialist */}
      {activeTab === 'chat' && (
        <div className="p-6 sm:p-8 space-y-4">
          <div className="h-72 overflow-y-auto space-y-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-[#004AAD] text-white flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#004AAD] text-white rounded-tr-xs'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-9">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#004AAD]" />
                <span>AI Specialist is formulating custom recommendation...</span>
              </div>
            )}
          </div>

          {/* Quick FAQ Prompts */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-[11px]">
            <span className="text-slate-400 font-bold shrink-0">Ask:</span>
            {[
              'Which mesh is best for pets & cats?',
              'What is the rate per sq ft in Hyderabad?',
              'Do you provide free laser measurement?',
              'Can you install on 3rd track UPVC window?'
            ].map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setInputQuestion(q)}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#004AAD] rounded-full border border-slate-200 whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Form */}
          <form onSubmit={handleAskQuestion} className="flex gap-2">
            <input
              type="text"
              placeholder="Ask anything about mosquito net doors, mesh types, pricing, or locations..."
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              className="flex-1 text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:border-[#004AAD] focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#004AAD] hover:bg-blue-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md hover-lift transition-all flex items-center gap-2"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
