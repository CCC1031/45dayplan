import { useState, useEffect, useRef } from "react";
import { 
  curriculumData, 
  Phase, 
  DayLesson 
} from "@/lib/curriculumData";
import { 
  BookOpen, 
  LayoutDashboard, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Calendar, 
  Trophy, 
  Sparkles, 
  Download, 
  RotateCcw,
  Plus,
  Trash2,
  Phone,
  Mail,
  MapPin,
  FileText,
  Clock,
  Check,
  Map as MapIcon,
  Presentation,
  Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapView } from "@/components/Map";
import { toast } from "sonner";
import { generateContractPdf } from "@/lib/contractGenerator";
import { generatePitchPdf, PitchData } from "@/lib/pitchGenerator";

// LocalStorage Keys
const MILESTONES_KEY = "vending_starter_milestones";
const ACTIVE_TAB_KEY = "vending_portal_active_tab";

export default function Home() {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem(ACTIVE_TAB_KEY) || "starter-kit";
  });
  const [selectedPhaseId, setSelectedPhaseId] = useState<number>(1);
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(MILESTONES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Track active tab changes
  useEffect(() => {
    localStorage.setItem(ACTIVE_TAB_KEY, activeTab);
  }, [activeTab]);

  // Track completed milestones changes
  useEffect(() => {
    localStorage.setItem(MILESTONES_KEY, JSON.stringify(completedMilestones));
  }, [completedMilestones]);

  // Calculate overall progress
  const totalMilestonesCount = curriculumData.reduce(
    (acc, phase) => acc + phase.lessons.reduce((lAcc, lesson) => lAcc + lesson.milestones.length, 0),
    0
  );
  const completedCount = completedMilestones.length;
  const progressPercent = totalMilestonesCount > 0 ? Math.round((completedCount / totalMilestonesCount) * 100) : 0;

  // Toggle single milestone
  const toggleMilestone = (milestoneId: string) => {
    setCompletedMilestones(prev => {
      const exists = prev.includes(milestoneId);
      let next: string[];
      if (exists) {
        next = prev.filter(id => id !== milestoneId);
        toast.info("Milestone unchecked");
      } else {
        next = [...prev, milestoneId];
        toast.success("Milestone completed! Keep it up! 🚀");
      }
      return next;
    });
  };

  // Reset all progress
  const resetProgress = () => {
    if (confirm("Are you sure you want to reset all 45-day starter kit milestones? This will not affect your CRM data.")) {
      setCompletedMilestones([]);
      setSelectedPhaseId(1);
      setSelectedDayNum(1);
      toast.success("Starter kit progress reset successfully!");
    }
  };

  // Get current active phase and lesson
  const currentPhase = curriculumData.find(p => p.id === selectedPhaseId) || curriculumData[0];
  const currentLesson = currentPhase.lessons.find(l => l.day === selectedDayNum) || currentPhase.lessons[0];

  return (
    <div className="min-h-screen bg-[#09090B] text-slate-100 flex flex-col font-sans">
      
      {/* Premium Cover Banner */}
      <div className="relative w-full aspect-[21/9] md:aspect-[24/7] lg:aspect-[21/5] overflow-hidden border-b border-white/[0.04]">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663676595920/NgLLzCmvo5MfbkndezyhqL/starter_kit_banner-iqW5P3i5mz6TPMXAwe6jYw.webp" 
          alt="45-Day Vending Machine Business Starter Kit + CRM System Banner"
          className="w-full h-full object-cover object-center brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/90 via-[#09090B]/40 to-transparent" />
        
        {/* Banner Content Overlay */}
        <div className="absolute inset-y-0 left-0 pl-6 md:pl-12 flex flex-col justify-center max-w-2xl z-10">
          <div className="p-6 md:p-8 bg-black/60 border border-white/10 backdrop-blur-md rounded-xl max-w-xl shadow-2xl flex flex-col gap-2">
            <Badge className="bg-[#E2B53E] text-black font-semibold uppercase tracking-wider self-start hover:bg-[#E2B53E]/90">
              Premium Starter Bundle
            </Badge>
            <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              45-Day Vending Machine Business <br className="hidden md:inline" />
              <span className="text-[#E2B53E]">Starter Kit + CRM System</span>
            </h1>
            <p className="text-slate-300 text-xs md:text-sm max-w-xl drop-shadow hidden sm:block">
              Build the foundation for your vending machine business in 45 days without guessing, messy spreadsheets, or missed follow-ups. Organize your prospects, clients, and tasks in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container py-8 flex-1 flex flex-col">
        
        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/[0.06] pb-4 mb-6">
            <TabsList className="bg-zinc-900/60 p-1 border border-white/[0.04]">
              <TabsTrigger 
                value="starter-kit" 
                className="data-[state=active]:bg-[#E2B53E] data-[state=active]:text-black gap-2 font-medium py-2 px-4 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                45-Day Starter Kit
              </TabsTrigger>
              <TabsTrigger 
                value="crm-dashboard" 
                className="data-[state=active]:bg-[#E2B53E] data-[state=active]:text-black gap-2 font-medium py-2 px-4 transition-all"
              >
                <LayoutDashboard className="w-4 h-4" />
                System
              </TabsTrigger>
            </TabsList>

            {/* Quick Status / Global Actions */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex flex-col items-end hidden md:flex">
                <span className="text-xs text-slate-400 font-medium">Starter Kit Progress</span>
                <span className="text-sm font-bold text-[#E2B53E]">{progressPercent}% Completed</span>
              </div>
              <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden hidden md:block">
                <div 
                  className="h-full bg-gradient-to-r from-[#E2B53E] to-[#F59E0B] transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              {activeTab === "starter-kit" && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resetProgress}
                  className="text-xs text-rose-400 border-rose-500/20 hover:bg-rose-500/10 hover:text-rose-300"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1" />
                  Reset Progress
                </Button>
              )}
            </div>
          </div>

          {/* TAB 1: 45-DAY INTERACTIVE STARTER KIT */}
          <TabsContent value="starter-kit" className="flex-1 flex flex-col lg:flex-row gap-8 outline-none mt-0">
            
            {/* Left Column: Timeline & Phases */}
            <div className="w-full lg:w-[350px] shrink-0 flex flex-col gap-4">
              <h3 className="font-serif text-xl font-semibold text-[#E2B53E] flex items-center gap-2 px-1">
                <Calendar className="w-5 h-5 text-[#E2B53E]" />
                Operational Timeline
              </h3>
              
              <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-1">
                {curriculumData.map((phase) => {
                  const isSelected = selectedPhaseId === phase.id;
                  
                  // Calculate phase progress
                  const phaseMilestoneIds: string[] = [];
                  phase.lessons.forEach(l => {
                    l.milestones.forEach((_, idx) => {
                      phaseMilestoneIds.push(`${phase.id}-${l.day}-${idx}`);
                    });
                  });
                  const phaseCompletedCount = phaseMilestoneIds.filter(id => completedMilestones.includes(id)).length;
                  const phaseTotalCount = phaseMilestoneIds.length;
                  const phaseProgress = phaseTotalCount > 0 ? Math.round((phaseCompletedCount / phaseTotalCount) * 100) : 0;

                  return (
                    <div 
                      key={phase.id}
                      onClick={() => {
                        setSelectedPhaseId(phase.id);
                        setSelectedDayNum(phase.lessons[0].day);
                      }}
                      className={`glass-card p-4 cursor-pointer text-left border transition-all duration-200 ${
                        isSelected 
                          ? "border-[#E2B53E]/40 bg-zinc-900/80 shadow-[0_0_15px_rgba(226,181,62,0.04)]" 
                          : "border-white/[0.04] hover:border-white/[0.08] hover:bg-zinc-900/30"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs text-[#E2B53E] font-semibold tracking-wider uppercase">
                          Phase {phase.id} • {phase.daysRange}
                        </span>
                        {phaseProgress === 100 && (
                          <Badge className="bg-[#74A35A]/20 text-[#74A35A] hover:bg-[#74A35A]/20 border-[#74A35A]/30 text-[10px] py-0 px-1.5">
                            Done
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-medium text-slate-200 text-sm md:text-base line-clamp-1">
                        {phase.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 mb-3">
                        {phase.description}
                      </p>
                      
                      {/* Phase Progress Bar */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#E2B53E] to-[#F59E0B] transition-all"
                            style={{ width: `${phaseProgress}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                          {phaseCompletedCount}/{phaseTotalCount} Tasks
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Detailed Lesson Viewer */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* Day Selection Row (Horizontal Scroll) */}
              <div className="glass-card p-2 border border-white/[0.04] flex gap-2 overflow-x-auto scrollbar-none shrink-0">
                {currentPhase.lessons.map((lesson) => {
                  const isDaySelected = selectedDayNum === lesson.day;
                  
                  // Calculate lesson progress
                  const lessonMilestoneIds = lesson.milestones.map((_, idx) => `${currentPhase.id}-${lesson.day}-${idx}`);
                  const lessonCompletedCount = lessonMilestoneIds.filter(id => completedMilestones.includes(id)).length;
                  const lessonTotalCount = lessonMilestoneIds.length;
                  const isLessonDone = lessonCompletedCount === lessonTotalCount;

                  return (
                    <button
                      key={lesson.day}
                      onClick={() => setSelectedDayNum(lesson.day)}
                      className={`flex flex-col items-center justify-center py-2 px-4 rounded-lg shrink-0 transition-all min-w-[70px] ${
                        isDaySelected
                          ? "bg-[#E2B53E] text-black font-semibold shadow-lg"
                          : isLessonDone
                            ? "bg-[#74A35A]/10 border border-[#74A35A]/30 text-[#74A35A] hover:bg-[#74A35A]/20"
                            : "bg-zinc-900/40 border border-white/[0.02] text-slate-400 hover:bg-zinc-900/80 hover:text-slate-200"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wider opacity-80">Day</span>
                      <span className="text-lg font-bold leading-none mt-0.5">{lesson.day}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lesson Content Box */}
              <div className="glass-card p-6 md:p-8 border border-white/[0.04] flex-1 flex flex-col gap-6">
                
                {/* Header */}
                <div className="border-b border-white/[0.06] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#E2B53E] font-semibold tracking-widest uppercase">
                      {currentPhase.daysRange} • Lesson {selectedDayNum} of 45
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mt-1">
                      {currentLesson.title}
                    </h2>
                  </div>
                  <Badge className="bg-zinc-800 text-slate-300 border border-white/[0.06] text-xs py-1 px-3 self-start sm:self-center hover:bg-zinc-800">
                    {currentLesson.milestones.length} Tasks Today
                  </Badge>
                </div>

                {/* Lesson Description & Guide */}
                <div className="prose prose-invert prose-amber max-w-none text-slate-300 text-sm md:text-base leading-relaxed flex-1 overflow-y-auto max-h-[400px] pr-2">
                  <p className="text-slate-200 font-medium text-base mb-6 italic border-l-2 border-[#E2B53E] pl-4 py-1 bg-[#E2B53E]/5 rounded-r-md">
                    {currentLesson.shortDesc}
                  </p>
                  
                  {/* Rendering rich markdown guide with a beautiful, high-fidelity line-by-line parser */}
                  <div className="space-y-4">
                    {(() => {
                      // Helper function to parse inline bolding **text**
                      const renderInlineFormatting = (text: string) => {
                        const parts = text.split(/(\*\*[^*]+\*\*)/g);
                        return parts.map((part, pIdx) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                              <strong key={pIdx} className="font-bold text-[#E2B53E]">
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return part;
                        });
                      };

                      // Split detailedGuide into lines and parse structurally
                      const lines = currentLesson.detailedGuide.split("\n");
                      const elements: React.ReactNode[] = [];
                      
                      let currentListType: "none" | "ul" | "ol" = "none";
                      let currentListItems: { text: string; num?: number }[] = [];
                      let keyCounter = 0;

                      const flushList = () => {
                        if (currentListType === "none" || currentListItems.length === 0) return;
                        
                        const items = [...currentListItems];
                        const type = currentListType;
                        
                        currentListItems = [];
                        currentListType = "none";

                        if (type === "ol") {
                          elements.push(
                            <div key={`ol-${keyCounter++}`} className="grid gap-3 my-4">
                              {items.map((item, idx) => {
                                const cleanLi = item.text;
                                const matchBoldPrefix = cleanLi.match(/^(\*\*[^*]+\*\*):(.*)$/);
                                const num = item.num ?? (idx + 1);

                                if (matchBoldPrefix) {
                                  return (
                                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-zinc-950/40 border border-white/[0.03] hover:border-white/[0.06] transition-all">
                                      <span className="font-serif font-bold text-[#E2B53E] shrink-0 text-sm">{num}.</span>
                                      <div className="text-slate-300 text-sm leading-relaxed">
                                        <strong className="text-white font-bold block sm:inline mr-1">
                                          {matchBoldPrefix[1].slice(2, -2)}:
                                        </strong>
                                        {renderInlineFormatting(matchBoldPrefix[2].trim())}
                                      </div>
                                    </div>
                                  );
                                }

                                return (
                                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-zinc-950/40 border border-white/[0.03] hover:border-white/[0.06] transition-all">
                                    <span className="font-serif font-bold text-[#E2B53E] shrink-0 text-sm">{num}.</span>
                                    <span className="text-slate-300 text-sm leading-relaxed">
                                      {renderInlineFormatting(cleanLi)}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        } else if (type === "ul") {
                          elements.push(
                            <div key={`ul-${keyCounter++}`} className="grid gap-3 my-4">
                              {items.map((item, idx) => {
                                const cleanLi = item.text;
                                const matchBoldPrefix = cleanLi.match(/^(\*\*[^*]+\*\*):(.*)$/);

                                if (matchBoldPrefix) {
                                  return (
                                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-zinc-950/40 border border-white/[0.03] hover:border-white/[0.06] transition-all">
                                      <span className="text-[#E2B53E] mt-1 shrink-0">•</span>
                                      <div className="text-slate-300 text-sm leading-relaxed">
                                        <strong className="text-white font-bold block sm:inline mr-1">
                                          {matchBoldPrefix[1].slice(2, -2)}:
                                        </strong>
                                        {renderInlineFormatting(matchBoldPrefix[2].trim())}
                                      </div>
                                    </div>
                                  );
                                }

                                return (
                                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-zinc-950/40 border border-white/[0.03] hover:border-white/[0.06] transition-all">
                                    <span className="text-[#E2B53E] mt-1 shrink-0">•</span>
                                    <span className="text-slate-300 text-sm leading-relaxed">
                                      {renderInlineFormatting(cleanLi)}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                      };

                      for (let i = 0; i < lines.length; i++) {
                        const line = lines[i].trim();
                        
                        if (line === "") {
                          flushList();
                          continue;
                        }

                        // 1. Headers (###)
                        if (line.startsWith("###")) {
                          flushList();
                          elements.push(
                            <h3 key={`h3-${keyCounter++}`} className="font-serif text-lg font-bold text-[#E2B53E] border-b border-white/[0.04] pb-1.5 mt-6 mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E2B53E]" />
                              {line.replace("###", "").trim()}
                            </h3>
                          );
                          continue;
                        }

                        // 2. Numbered Lists (1. )
                        const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
                        if (numMatch) {
                          if (currentListType !== "ol") {
                            flushList();
                            currentListType = "ol";
                          }
                          currentListItems.push({
                            num: parseInt(numMatch[1]),
                            text: numMatch[2].trim()
                          });
                          continue;
                        }

                        // 3. Bullet Lists (* or -)
                        const bulletMatch = line.match(/^[\*\-]\s+(.*)$/);
                        if (bulletMatch) {
                          if (currentListType !== "ul") {
                            flushList();
                            currentListType = "ul";
                          }
                          currentListItems.push({
                            text: bulletMatch[1].trim()
                          });
                          continue;
                        }

                        // 4. Fallback to normal paragraph
                        flushList();
                        elements.push(
                          <p key={`p-${keyCounter++}`} className="text-slate-300 text-sm md:text-base leading-relaxed my-2.5">
                            {renderInlineFormatting(line)}
                          </p>
                        );
                      }

                      // Flush any remaining list items at the end
                      flushList();

                      return elements;
                    })()}
                  </div>
                </div>

                {/* Day Tasks / Interactive Milestones */}
                <div className="border-t border-white/[0.06] pt-6 shrink-0">
                  <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E2B53E]" />
                    Interactive Milestones for Day {selectedDayNum}
                  </h4>
                  
                  <div className="grid gap-3">
                    {currentLesson.milestones.map((milestone, idx) => {
                      const milestoneId = `${currentPhase.id}-${selectedDayNum}-${idx}`;
                      const isCompleted = completedMilestones.includes(milestoneId);

                      return (
                        <div 
                          key={idx}
                          onClick={() => toggleMilestone(milestoneId)}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            isCompleted 
                              ? "bg-emerald-950/10 border-emerald-500/20 text-slate-300" 
                              : "bg-zinc-900/40 border-white/[0.04] text-slate-200 hover:bg-zinc-900/80 hover:border-white/[0.08]"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border shrink-0 flex items-center justify-center mt-0.5 transition-all ${
                            isCompleted 
                              ? "bg-emerald-500 border-emerald-500 text-black" 
                              : "border-slate-500 bg-transparent"
                          }`}>
                            {isCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className={`text-sm md:text-base ${isCompleted ? "line-through text-slate-400" : ""}`}>
                            {milestone}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Lesson Navigation Buttons */}
                <div className="flex justify-between items-center border-t border-white/[0.06] pt-6 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={selectedDayNum === 1}
                    onClick={() => {
                      const prevDay = selectedDayNum - 1;
                      const prevPhase = curriculumData.find(p => p.lessons.some(l => l.day === prevDay));
                      if (prevPhase) {
                        setSelectedPhaseId(prevPhase.id);
                        setSelectedDayNum(prevDay);
                      }
                    }}
                    className="border-white/[0.08] hover:bg-[#F04438]/10 hover:text-[#F04438] hover:border-[#F04438]/20 transition-all"
                  >
                    Previous Day
                  </Button>
                  
                  <div className="text-xs text-slate-400 font-medium">
                    Day {selectedDayNum} of 45
                  </div>

                  <Button
                    variant="default"
                    size="sm"
                    disabled={selectedDayNum === 45}
                    onClick={() => {
                      const nextDay = selectedDayNum + 1;
                      const nextPhase = curriculumData.find(p => p.lessons.some(l => l.day === nextDay));
                      if (nextPhase) {
                        setSelectedPhaseId(nextPhase.id);
                        setSelectedDayNum(nextDay);
                      }
                    }}
                    className="bg-[#F04438] text-white hover:bg-[#F04438]/90 font-semibold"
                  >
                    Next Day
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

              </div>
            </div>

          </TabsContent>

          {/* TAB 2: VENDING CRM DASHBOARD */}
          <TabsContent value="crm-dashboard" className="flex-1 flex flex-col outline-none mt-0">
            <CrmDashboard />
          </TabsContent>

        </Tabs>

      </div>

      {/* Branded Footer */}
      <footer className="border-t border-white/[0.04] bg-zinc-950 py-6 text-center text-xs text-slate-500 mt-12 shrink-0">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-white text-sm">SNAXOLOGY<span className="text-[#E2B53E]">AI</span></span>
            <span className="text-zinc-700">|</span>
            <span>45-Day Starter Kit + CRM</span>
          </div>
          <p>© 2026 Snaxology Vending Systems. All rights reserved. Locally saved sandbox experience.</p>
        </div>
      </footer>

    </div>
  );
}

// ==========================================
// VENDING CRM SYSTEM COMPONENT IMPLEMENTATION
// ==========================================

interface Prospect {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  contactName: string;
  status: "New" | "Contacted" | "Meeting" | "Signed" | "Rejected";
  score: number;
  notes: string;
  lat: number;
  lng: number;
}

interface FollowUpTask {
  id: string;
  title: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
  prospectName: string;
}

function CrmDashboard() {
  const [crmSubTab, setCrmSubTab] = useState<string>("overview");

  // Local CRM State (Saved in LocalStorage)
  const [prospects, setProspects] = useState<Prospect[]>(() => {
    const saved = localStorage.getItem("crm_prospects");
    if (saved) return JSON.parse(saved);
    // Seed default mock prospects in Austin, TX
    return [
      { id: "p1", name: "Apex Logistics Hub", address: "1420 Industrial Pkwy, Austin, TX", phone: "512-555-0192", email: "j.miller@apexlogistics.com", contactName: "John Miller", status: "New", score: 22, notes: "Massive warehouse, 85 employees, 3 shifts. No existing vending machines.", lat: 30.3721, lng: -97.6842 },
      { id: "p2", name: "Riverside Fitness Gym", address: "820 Riverside Dr, Austin, TX", phone: "512-555-0143", email: "info@riversidegym.com", contactName: "Sarah Connor", status: "Contacted", score: 16, notes: "Spoke to front desk, manager Sarah is interested in healthy combo options. Follow up sent.", lat: 30.2415, lng: -97.7214 },
      { id: "p3", name: "Metro Medical Center", address: "400 Medical Pkwy, Austin, TX", phone: "512-555-0188", email: "h.vance@metromedical.com", contactName: "Helen Vance", status: "Meeting", score: 20, notes: "Walk-through scheduled for Thursday 10 AM. Checking break room clearances.", lat: 30.2981, lng: -97.7402 },
      { id: "p4", name: "Precision Auto Repair", address: "305 Steel Rd, Austin, TX", phone: "512-555-0111", email: "bob@precisionauto.com", contactName: "Bob Rivet", status: "Signed", score: 18, notes: "Signed 90-day trial agreement on Day 23! Installation scheduled for Day 36.", lat: 30.2185, lng: -97.8012 }
    ];
  });

  const [tasks, setTasks] = useState<FollowUpTask[]>(() => {
    const saved = localStorage.getItem("crm_tasks");
    if (saved) return JSON.parse(saved);
    return [
      { id: "t1", title: "Follow up with Sarah regarding healthy snacks catalog", dueDate: "2026-06-02", priority: "High", status: "Pending", prospectName: "Riverside Fitness Gym" },
      { id: "t2", title: "Bring printed agreement to Helen Vance at walk-through", dueDate: "2026-06-04", priority: "High", status: "Pending", prospectName: "Metro Medical Center" }
    ];
  });

  // Pitch Deck Builder State (customizable proposal)
  const [pitchData, setPitchData] = useState<PitchData>(() => {
    const saved = localStorage.getItem("crm_pitch_data");
    if (saved) return JSON.parse(saved);
    return {
      businessName: "Snaxology Services",
      tagline: "Premium Facility Solutions, Tailored to Your Workplace",
      ownerName: "Business Owner",
      phone: "512-555-0192",
      email: "hello@snaxology.ai",
      colorTheme: "amber"
    };
  });

  // Save state to localStorage on change
  useEffect(() => {
    localStorage.setItem("crm_prospects", JSON.stringify(prospects));
  }, [prospects]);

  useEffect(() => {
    localStorage.setItem("crm_tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("crm_pitch_data", JSON.stringify(pitchData));
  }, [pitchData]);

  // High-Level CRM Metrics
  const openTasksCount = tasks.filter(t => t.status === "Pending").length;
  const signedLocationsCount = prospects.filter(p => p.status === "Signed").length;

  // Add Prospect Modal / State
  const [showAddProspect, setShowAddProspect] = useState(false);
  const [newProspect, setNewProspect] = useState<Omit<Prospect, "id">>({
    name: "", address: "", phone: "", email: "", contactName: "", status: "New", score: 15, notes: "", lat: 30.2672, lng: -97.7431
  });

  const handleAddProspect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProspect.name || !newProspect.address) {
      toast.error("Company Name and Address are required!");
      return;
    }
    const id = "p_" + Date.now();
    // Generate slightly offset random lat/lng around Austin center for map diversity
    const offsetLat = 30.2672 + (Math.random() - 0.5) * 0.15;
    const offsetLng = -97.7431 + (Math.random() - 0.5) * 0.15;
    
    setProspects(prev => [...prev, { ...newProspect, id, lat: offsetLat, lng: offsetLng }]);
    setNewProspect({ name: "", address: "", phone: "", email: "", contactName: "", status: "New", score: 15, notes: "", lat: 30.2672, lng: -97.7431 });
    setShowAddProspect(false);
    toast.success("Prospect added successfully!");
  };

  // Add Task State
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTask, setNewTask] = useState<Omit<FollowUpTask, "id" | "status">>({
    title: "", dueDate: "", priority: "Medium", prospectName: ""
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title || !newTask.dueDate) {
      toast.error("Task title and due date are required!");
      return;
    }
    const id = "t_" + Date.now();
    setTasks(prev => [...prev, { ...newTask, id, status: "Pending" }]);
    setNewTask({ title: "", dueDate: "", priority: "Medium", prospectName: "" });
    setShowAddTask(false);
    toast.success("Follow-up task created!");
  };

  // Google Maps Marker Preparation
  const mapMarkers = prospects.map(p => {
    return {
      id: p.id,
      name: p.name,
      address: p.address,
      lat: p.lat,
      lng: p.lng,
      type: p.status === "Signed" ? ("signed" as const) : ("prospect" as const)
    };
  });

  // Google Maps Initialization Helper
  const mapRef = useRef<google.maps.Map | null>(null);
  const activeMarkersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    renderMapMarkers();
  };

  // Dynamic Google Maps Marker Renderer
  const renderMapMarkers = async () => {
    if (!mapRef.current || !window.google) return;

    // Clear existing markers
    activeMarkersRef.current.forEach(m => m.map = null);
    activeMarkersRef.current = [];

    // Import marker library
    const { AdvancedMarkerElement, PinElement } = await window.google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    mapMarkers.forEach(marker => {
      // Choose pin colors
      let background = "#F59E0B"; // amber for prospects
      let borderColor = "#D97706";
      if (marker.type === "signed") {
        background = "#3B82F6"; // blue for signed locations
        borderColor = "#2563EB";
      }

      // Create a custom PinElement
      const pin = new PinElement({
        background,
        borderColor,
        glyphColor: "#fff",
        scale: 1.0,
      });

      // Create AdvancedMarkerElement
      const gMarker = new AdvancedMarkerElement({
        map: mapRef.current,
        position: { lat: marker.lat, lng: marker.lng },
        title: marker.name,
        content: pin.element,
      });

      // Add custom InfoWindow popup on click
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="color: #1e293b; font-family: sans-serif; font-size: 12px; padding: 4px; max-width: 200px;">
            <strong style="font-size: 13px; color: #0f172a; display: block; margin-bottom: 2px;">${marker.name}</strong>
            <span style="color: #64748b; display: block; margin-bottom: 6px;">${marker.address}</span>
            <span style="display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; background-color: ${background}15; color: ${background}; border: 1px solid ${borderColor}30;">
              ${marker.type.toUpperCase()}
            </span>
          </div>
        `
      });

      gMarker.addListener("click", () => {
        infoWindow.open({
          anchor: gMarker,
          map: mapRef.current,
        });
      });

      activeMarkersRef.current.push(gMarker);
    });

    // Fit map bounds to show all markers
    if (mapMarkers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      mapMarkers.forEach(m => bounds.extend({ lat: m.lat, lng: m.lng }));
      mapRef.current.fitBounds(bounds);
    }
  };

  // Re-render markers when map markers or map reference changes
  useEffect(() => {
    renderMapMarkers();
  }, [prospects]);

  // Handler for PDF Contract Download
  const handleDownloadContract = (prospect: Prospect) => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          generateContractPdf({
            companyName: prospect.name,
            address: prospect.address,
            contactName: prospect.contactName,
            phone: prospect.phone,
            email: prospect.email,
            date: new Date().toISOString().split("T")[0]
          });
          resolve(true);
        }, 800);
      }),
      {
        loading: `Generating agreement for ${prospect.name}...`,
        success: "PDF Contract generated and download started! 📄",
        error: "Failed to generate contract."
      }
    );
  };

  // Handler for Pitch Deck PDF Download
  const handleDownloadPitch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          generatePitchPdf(pitchData);
          resolve(true);
        }, 1200);
      }),
      {
        loading: "Generating customized slide deck PDF...",
        success: "Branded Pitch Deck exported successfully! 🚀📊",
        error: "Failed to export pitch deck."
      }
    );
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      
      {/* CRM Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="glass-card border border-white/[0.04] bg-zinc-950/40">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-slate-400 text-xs font-medium uppercase tracking-wider">Open Tasks</CardDescription>
            <CardTitle className="font-serif text-2xl md:text-3xl font-bold text-[#F04438] mt-1 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {openTasksCount} <span className="text-xs text-slate-500 font-sans font-normal">Pending</span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="glass-card border border-white/[0.04] bg-zinc-950/40">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-slate-400 text-xs font-medium uppercase tracking-wider">Signed Locations</CardDescription>
            <CardTitle className="font-serif text-2xl md:text-3xl font-bold text-[#74A35A] mt-1 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#74A35A]" />
              {signedLocationsCount} <span className="text-xs text-slate-500 font-sans font-normal">Secured</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* CRM Sub-Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-3">
        {[
          { id: "overview", label: "Overview" },
          { id: "prospects", label: "Prospecting Board" },
          { id: "route-map", label: "Route Map" },
          { id: "contacts", label: "Client Contacts" },
          { id: "pitch-deck", label: "Pitch Deck Builder" },
          { id: "tasks", label: "Follow-Up Tasks" }
        ].map(subTab => (
          <button
            key={subTab.id}
            onClick={() => setCrmSubTab(subTab.id)}
            className={`text-xs md:text-sm font-medium py-1.5 px-3.5 rounded-full transition-all ${
              crmSubTab === subTab.id
                ? "bg-[#E2B53E] text-black font-semibold shadow-md"
                : "bg-zinc-900/40 border border-white/[0.04] text-slate-400 hover:bg-zinc-900/80 hover:text-slate-200"
            }`}
          >
            {subTab.label}
          </button>
        ))}
      </div>

      {/* CRM SUB-TAB CONTENT */}
      <div className="flex-1 flex flex-col min-h-[400px]">
        
        {/* 1. OVERVIEW */}
        {crmSubTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-6 flex-1">
            <Card className="glass-card border border-white/[0.04] bg-zinc-950/20 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E2B53E]" />
                  Welcome to Prospecting CRM
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  This generic CRM system is custom-built to support your business launch. Track local business prospects, store decision-maker details, schedule site walkthroughs, and generate professional 90-day trial agreements and customized sales pitch decks directly from your browser's local storage.
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.04] pt-4 flex flex-wrap gap-3">
                <Button 
                  size="sm" 
                  onClick={() => setCrmSubTab("prospects")}
                  className="bg-[#F04438] text-white hover:bg-[#F04438]/90 text-xs font-semibold"
                >
                  Go to Prospecting Board
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => setCrmSubTab("pitch-deck")}
                  className="text-xs border-[#F04438]/20 hover:bg-[#F04438]/10 text-[#F04438] hover:border-[#F04438]/30 transition-all"
                >
                  <Presentation className="w-3.5 h-3.5 mr-1.5" />
                  Pitch Deck Builder
                </Button>
              </div>
            </Card>

            {/* Quick Tasks List */}
            <Card className="glass-card border border-white/[0.04] bg-zinc-950/20 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E2B53E]" />
                  Upcoming Follow-Ups
                </h3>
                <Badge className="bg-rose-500/20 text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 text-[10px]">
                  {openTasksCount} Pending
                </Badge>
              </div>
              <div className="flex-1 overflow-y-auto max-h-[220px] space-y-2 pr-1">
                {tasks.filter(t => t.status === "Pending").length === 0 ? (
                  <div className="text-center py-8 text-slate-500 text-xs">
                    No pending follow-up tasks! Add one in the Tasks tab.
                  </div>
                ) : (
                  tasks.filter(t => t.status === "Pending").map(task => (
                    <div key={task.id} className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.02] flex justify-between items-center gap-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-200">{task.title}</div>
                        <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-2">
                          <span>Due: {task.dueDate}</span>
                          <span>•</span>
                          <span className="text-[#E2B53E]">{task.prospectName}</span>
                        </div>
                      </div>
                      <Badge className={`text-[10px] ${
                        task.priority === "High" 
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" 
                          : "bg-zinc-800 text-slate-400"
                      }`}>
                        {task.priority}
                      </Badge>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        )}

        {/* 2. PROSPECTING BOARD (KANBAN STYLE) */}
        {crmSubTab === "prospects" && (
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-lg font-bold text-white">Location Prospecting Board</h3>
              <div className="flex items-center gap-2">
                {/* Hidden File Input for CSV Import */}
                <input 
                  type="file" 
                  id="csv-file-input" 
                  accept=".csv" 
                  className="hidden" 
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const text = event.target?.result as string;
                      if (!text) return;
                      
                      try {
                        // Basic CSV parser that handles quotes
                        const parseCSV = (csvText: string) => {
                          const lines = csvText.split(/\r?\n/);
                          return lines.map(line => {
                            const result = [];
                            let current = "";
                            let inQuotes = false;
                            for (let i = 0; i < line.length; i++) {
                              const char = line[i];
                              if (char === '"') {
                                inQuotes = !inQuotes;
                              } else if (char === ',' && !inQuotes) {
                                result.push(current.trim());
                                current = "";
                              } else {
                                current += char;
                              }
                            }
                            result.push(current.trim());
                            return result;
                          }).filter(row => row.length > 0 && row.some(cell => cell !== ""));
                        };
                        
                        const rows = parseCSV(text);
                        if (rows.length < 2) {
                          toast.error("CSV must contain a header row and at least one data row!");
                          return;
                        }
                        
                        const headers = rows[0].map(h => h.toLowerCase());
                        const dataRows = rows.slice(1);
                        
                        // Map headers to fields
                        const nameIdx = headers.findIndex(h => h.includes("name") || h.includes("company") || h.includes("business"));
                        const addressIdx = headers.findIndex(h => h.includes("address") || h.includes("location") || h.includes("street"));
                        const contactIdx = headers.findIndex(h => h.includes("contact") || h.includes("person") || h.includes("owner") || h.includes("name"));
                        const phoneIdx = headers.findIndex(h => h.includes("phone") || h.includes("tel"));
                        const emailIdx = headers.findIndex(h => h.includes("email") || h.includes("mail"));
                        const notesIdx = headers.findIndex(h => h.includes("notes") || h.includes("desc") || h.includes("comment"));
                        const scoreIdx = headers.findIndex(h => h.includes("score") || h.includes("rating") || h.includes("priority"));
                        
                        if (nameIdx === -1 || addressIdx === -1) {
                          toast.error("CSV must contain at least 'Company Name' and 'Address' columns!");
                          return;
                        }
                        
                        const importedProspects: Prospect[] = dataRows.map((row, idx) => {
                          const id = "p_imported_" + Date.now() + "_" + idx;
                          const name = row[nameIdx] || "Unknown Company";
                          const address = row[addressIdx] || "No Address Provided";
                          const contactName = contactIdx !== -1 && row[contactIdx] ? row[contactIdx] : "N/A";
                          const phone = phoneIdx !== -1 && row[phoneIdx] ? row[phoneIdx] : "N/A";
                          const email = emailIdx !== -1 && row[emailIdx] ? row[emailIdx] : "N/A";
                          const notes = notesIdx !== -1 && row[notesIdx] ? row[notesIdx] : "Imported Lead";
                          const score = scoreIdx !== -1 && row[scoreIdx] && !isNaN(parseInt(row[scoreIdx])) 
                            ? Math.min(25, Math.max(5, parseInt(row[scoreIdx]))) 
                            : 15;
                            
                          // Random offsets around center of map
                          const offsetLat = 30.2672 + (Math.random() - 0.5) * 0.15;
                          const offsetLng = -97.7431 + (Math.random() - 0.5) * 0.15;
                          
                          return {
                            id,
                            name,
                            address,
                            contactName,
                            phone,
                            email,
                            notes,
                            score,
                            status: "New",
                            lat: offsetLat,
                            lng: offsetLng
                          };
                        });
                        
                        setProspects(prev => [...prev, ...importedProspects]);
                        toast.success(`Successfully imported ${importedProspects.length} prospects!`);
                        // Reset file input
                        e.target.value = "";
                      } catch (err) {
                        console.error(err);
                        toast.error("Failed to parse CSV file. Please check format.");
                      }
                    };
                    reader.readAsText(file);
                  }}
                />
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => document.getElementById("csv-file-input")?.click()}
                  className="text-xs border-[#F04438]/20 hover:bg-[#F04438]/10 text-[#F04438] hover:border-[#F04438]/30 gap-1.5 transition-all"
                >
                  <Upload className="w-3.5 h-3.5" /> Import CSV
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setShowAddProspect(true)}
                  className="bg-[#F04438] text-white hover:bg-[#F04438]/90 text-xs font-semibold gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Prospect
                </Button>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 flex-1">
              {(["New", "Contacted", "Meeting", "Signed", "Rejected"] as const).map(status => {
                const columnProspects = prospects.filter(p => p.status === status);
                return (
                  <div key={status} className="glass-card bg-zinc-950/40 border border-white/[0.02] p-3 flex flex-col rounded-lg min-h-[350px]">
                    <div className="flex justify-between items-center border-b border-white/[0.04] pb-2 mb-3">
                      <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">{status}</span>
                      <Badge className="bg-zinc-800 text-slate-400 hover:bg-zinc-800 text-[10px] py-0 px-1.5">{columnProspects.length}</Badge>
                    </div>
                    
                    <div className="flex-1 space-y-3 overflow-y-auto max-h-[450px] pr-1">
                      {columnProspects.map(prospect => (
                        <div 
                          key={prospect.id} 
                          className="p-3 rounded-lg bg-zinc-900/60 border border-white/[0.04] hover:border-white/[0.08] transition-all flex flex-col gap-2"
                        >
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-bold text-white line-clamp-1">{prospect.name}</h4>
                            <Badge className="bg-[#E2B53E]/10 text-[#E2B53E] hover:bg-[#E2B53E]/10 text-[9px] py-0 px-1">
                              Score: {prospect.score}
                            </Badge>
                          </div>
                          <p className="text-[10px] text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                            <span className="line-clamp-1">{prospect.address}</span>
                          </p>
                          <div className="text-[10px] text-slate-500 line-clamp-2 italic">
                            "{prospect.notes}"
                          </div>
                          
                          {/* Generate Contract Button */}
                          <button
                            onClick={() => handleDownloadContract(prospect)}
                            className="w-full mt-1.5 flex items-center justify-center gap-1.5 py-1 px-2 rounded bg-zinc-800 hover:bg-zinc-700 text-slate-300 text-[10px] font-semibold border border-white/[0.02] transition-colors"
                          >
                            <FileText className="w-3 h-3 text-[#E2B53E]" />
                            Download Contract
                          </button>

                          {/* Column Mover Controls */}
                          <div className="flex justify-end gap-1 mt-2 pt-2 border-t border-white/[0.02]">
                            {status !== "New" && (
                              <button 
                                onClick={() => {
                                  const statuses: Prospect["status"][] = ["New", "Contacted", "Meeting", "Signed", "Rejected"];
                                  const prevIdx = statuses.indexOf(status) - 1;
                                  setProspects(prev => prev.map(p => p.id === prospect.id ? { ...p, status: statuses[prevIdx] } : p));
                                }}
                                className="text-[9px] text-slate-500 hover:text-slate-300 py-0.5 px-1.5 bg-zinc-800 rounded"
                              >
                                Back
                              </button>
                            )}
                            {status !== "Rejected" && status !== "Signed" && (
                              <button 
                                onClick={() => {
                                  const statuses: Prospect["status"][] = ["New", "Contacted", "Meeting", "Signed", "Rejected"];
                                  const nextIdx = statuses.indexOf(status) + 1;
                                  setProspects(prev => prev.map(p => p.id === prospect.id ? { ...p, status: statuses[nextIdx] } : p));
                                  toast.success(`Moved ${prospect.name} to ${statuses[nextIdx]}!`);
                                }}
                                className="text-[9px] text-black hover:bg-[#E2B53E]/90 py-0.5 px-1.5 bg-[#E2B53E] rounded font-semibold"
                              >
                                Advance
                              </button>
                            )}
                            <button 
                              onClick={() => {
                                if (confirm(`Delete prospect ${prospect.name}?`)) {
                                  setProspects(prev => prev.filter(p => p.id !== prospect.id));
                                  toast.error("Prospect deleted");
                                }
                              }}
                              className="text-[9px] text-[#F04438] hover:text-[#F04438]/80 py-0.5 px-1.5 bg-[#F04438]/10 rounded"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. INTERACTIVE ROUTE MAP (GOOGLE MAPS) */}
        {crmSubTab === "route-map" && (
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <MapIcon className="w-5 h-5 text-[#E2B53E]" />
                  Geographical Route Map
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Analyze location density and plan highly efficient restocking routes to eliminate "windshield time."
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span className="text-slate-400">Prospects</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="text-slate-400">Signed</span>
                </div>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="w-full h-[500px] rounded-xl overflow-hidden border border-white/[0.06] bg-zinc-950 relative">
              <MapView 
                initialCenter={{ lat: 30.2672, lng: -97.7431 }} // Austin, TX
                initialZoom={11}
                onMapReady={handleMapReady}
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* 4. CLIENT CONTACTS */}
        {crmSubTab === "contacts" && (
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-white">Decision-Maker & Client Contact Tracker</h3>
            <div className="glass-card border border-white/[0.04] bg-zinc-950/20 overflow-hidden rounded-lg">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-zinc-900/60 text-slate-400 uppercase tracking-wider text-[10px]">
                    <th className="p-3">Company</th>
                    <th className="p-3">Decision Maker</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">Notes</th>
                    <th className="p-3 text-right">Agreement</th>
                  </tr>
                </thead>
                <tbody>
                  {prospects.map(prospect => (
                    <tr key={prospect.id} className="border-b border-white/[0.04] hover:bg-zinc-900/20">
                      <td className="p-3 font-bold text-white">{prospect.name}</td>
                      <td className="p-3 text-slate-200">{prospect.contactName || "Not identified"}</td>
                      <td className="p-3 text-slate-300">{prospect.phone || "N/A"}</td>
                      <td className="p-3 text-slate-300">{prospect.email || "N/A"}</td>
                      <td className="p-3 text-slate-400 max-w-[150px] truncate">{prospect.address}</td>
                      <td className="p-3 text-slate-400 max-w-[200px] truncate italic">"{prospect.notes}"</td>
                      <td className="p-3 text-right">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDownloadContract(prospect)}
                          className="h-7 text-[10px] border-[#F04438]/20 hover:bg-[#F04438]/10 text-[#F04438] hover:text-[#F04438]/90 hover:border-[#F04438]/30 transition-all"
                        >
                          <FileText className="w-3 h-3 mr-1" />
                          PDF Contract
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. CUSTOMIZED PITCH DECK BUILDER */}
        {crmSubTab === "pitch-deck" && (
          <div className="flex-1 flex flex-col lg:flex-row gap-6">
            
            {/* Customization Form */}
            <Card className="glass-card border border-white/[0.04] bg-zinc-950/20 p-6 w-full lg:w-[400px] shrink-0">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Presentation className="w-5 h-5 text-[#E2B53E]" />
                Branded Pitch Builder
              </h3>
              
              <form onSubmit={handleDownloadPitch} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Business / Route Name</label>
                  <input 
                    type="text" 
                    required
                    value={pitchData.businessName}
                    onChange={e => setPitchData(prev => ({ ...prev, businessName: e.target.value }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                    placeholder="e.g., Snaxology Services"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Core Brand Tagline</label>
                  <input 
                    type="text" 
                    required
                    value={pitchData.tagline}
                    onChange={e => setPitchData(prev => ({ ...prev, tagline: e.target.value }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                    placeholder="e.g., Premium Facility Solutions, Tailored to Your Workplace"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Owner / Operator Name</label>
                  <input 
                    type="text" 
                    required
                    value={pitchData.ownerName}
                    onChange={e => setPitchData(prev => ({ ...prev, ownerName: e.target.value }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                    placeholder="e.g., Business Owner"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Business Phone</label>
                    <input 
                      type="text" 
                      required
                      value={pitchData.phone}
                      onChange={e => setPitchData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Business Email</label>
                    <input 
                      type="email" 
                      required
                      value={pitchData.email}
                      onChange={e => setPitchData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Presentation Color Palette</label>
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    {[
                      { id: "amber", label: "Amber/Gold", color: "bg-[#E2B53E]" },
                      { id: "emerald", label: "Emerald", color: "bg-emerald-500" },
                      { id: "blue", label: "Classic Blue", color: "bg-blue-500" },
                      { id: "indigo", label: "Indigo", color: "bg-indigo-500" }
                    ].map(theme => (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => setPitchData(prev => ({ ...prev, colorTheme: theme.id }))}
                        className={`p-2 rounded border text-[10px] font-medium flex flex-col items-center gap-1.5 transition-all ${
                          pitchData.colorTheme === theme.id
                            ? "border-[#E2B53E] bg-zinc-800 text-white font-bold"
                            : "border-white/[0.04] bg-zinc-900/40 text-slate-400 hover:bg-zinc-900"
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full ${theme.color}`} />
                        {theme.label.split("/")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#F04438] text-white hover:bg-[#F04438]/90 font-semibold py-2.5 text-xs flex items-center justify-center gap-2 mt-6 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Generate & Export Slide Deck PDF
                </Button>
              </form>
            </Card>

            {/* Slide Preview Mockup */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Cover Slide Preview</h4>
                <Badge className="bg-zinc-800 text-slate-400 border border-white/[0.06] text-[10px]">Landscape 16:9 Presentation</Badge>
              </div>

              {/* Cover Slide Mockup Frame */}
              <div className="flex-1 rounded-xl border border-white/[0.06] bg-zinc-950 p-6 flex flex-col justify-between aspect-[16/10] relative overflow-hidden shadow-2xl min-h-[300px]">
                {/* Background lines accent */}
                <div className="absolute inset-y-0 left-4 w-px bg-white/[0.01]" />
                <div className="absolute inset-y-0 right-4 w-px bg-white/[0.01]" />
                <div className="absolute inset-x-0 top-4 h-px bg-white/[0.01]" />
                <div className="absolute inset-x-0 bottom-4 h-px bg-white/[0.01]" />

                <div className="flex-1 flex flex-col items-center justify-center border border-white/[0.03] rounded-lg bg-zinc-900/10 p-6 relative">
                  
                  {/* Decorative Mini Machine Outline */}
                  <div className={`w-10 h-14 border rounded mb-4 flex flex-col justify-between p-1 opacity-60 ${
                    pitchData.colorTheme === "amber" ? "border-[#E2B53E] text-[#E2B53E]" :
                    pitchData.colorTheme === "emerald" ? "border-emerald-500 text-emerald-500" :
                    pitchData.colorTheme === "blue" ? "border-blue-500 text-blue-500" : "border-indigo-500 text-indigo-500"
                  }`}>
                    <div className="w-full h-4 border-b border-current opacity-30" />
                    <div className="w-full h-1 bg-current opacity-20 self-end rounded-sm" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wide text-center uppercase">
                    {pitchData.businessName || "Snaxology Vending Systems"}
                  </h2>
                  
                  <p className={`font-serif italic text-xs md:text-sm text-center mt-1.5 ${
                    pitchData.colorTheme === "amber" ? "text-[#E2B53E]" :
                    pitchData.colorTheme === "emerald" ? "text-emerald-400" :
                    pitchData.colorTheme === "blue" ? "text-blue-400" : "text-indigo-400"
                  }`}>
                    "{pitchData.tagline || "Premium Refreshments, Tailored to Your Workplace"}"
                  </p>

                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-6">
                    FREE PLACEMENT & FULL-SERVICE PROPOSAL FOR YOUR FACILITY
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-white/[0.04] pt-3 text-[9px] text-slate-500">
                  <span>{pitchData.businessName}  |  Vending Placement Proposal</span>
                  <span>Slide 1 of 5</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 6. FOLLOW-UP TASKS */}
        {crmSubTab === "tasks" && (
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-lg font-bold text-white">Follow-Up Task System</h3>
              <Button 
                size="sm" 
                onClick={() => setShowAddTask(true)}
                className="bg-[#F04438] text-white hover:bg-[#F04438]/90 text-xs font-semibold"
              >
                <Plus className="w-3.5 h-3.5 mr-1" /> Add Task
              </Button>
            </div>

            <div className="glass-card border border-white/[0.04] bg-zinc-950/20 p-4 space-y-3 rounded-lg">
              {tasks.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  No tasks logged. Click Add Task to create a new follow-up alert!
                </div>
              ) : (
                tasks.map(task => {
                  const isPending = task.status === "Pending";
                  return (
                    <div 
                      key={task.id}
                      className={`p-4 rounded-lg border flex justify-between items-center gap-4 transition-all ${
                        isPending 
                          ? "bg-zinc-900/40 border-white/[0.04]" 
                          : "bg-zinc-950/20 border-white/[0.02] opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => {
                            setTasks(prev => prev.map(t => t.id === task.id ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending" } : t));
                            toast.success(isPending ? "Task completed! 🎉" : "Task set back to pending");
                          }}
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                            !isPending 
                              ? "bg-[#74A35A] border-[#74A35A] text-black" 
                              : "border-slate-500 bg-transparent"
                          }`}
                        >
                          {!isPending && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                        
                        <div>
                          <div className={`text-sm font-bold ${!isPending ? "line-through text-slate-500" : "text-white"}`}>
                            {task.title}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-2">
                            <span>Due: {task.dueDate}</span>
                            <span>•</span>
                            <span className="text-[#E2B53E] font-medium">{task.prospectName}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Badge className={`text-[10px] uppercase tracking-wider ${
                          task.priority === "High" 
                            ? "bg-[#F04438]/10 text-[#F04438] border border-[#F04438]/20" 
                            : "bg-zinc-800 text-slate-400"
                        }`}>
                          {task.priority}
                        </Badge>
                        
                        <button 
                          onClick={() => {
                            if (confirm("Delete this task?")) {
                              setTasks(prev => prev.filter(t => t.id !== task.id));
                              toast.error("Task deleted");
                            }
                          }}
                          className="text-slate-500 hover:text-[#F04438] transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

      </div>

      {/* ==========================================
          MODALS & OVERLAYS FOR CRM DATA ENTRY
          ========================================== */}

      {/* Add Prospect Modal */}
      {showAddProspect && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-[#121214] border border-white/[0.06] rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Add Location Prospect</h3>
            <form onSubmit={handleAddProspect} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Company / Business Name *</label>
                <input 
                  type="text" 
                  required
                  value={newProspect.name}
                  onChange={e => setNewProspect(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  placeholder="e.g., Apex Logistics Hub"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Physical Address *</label>
                <input 
                  type="text" 
                  required
                  value={newProspect.address}
                  onChange={e => setNewProspect(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  placeholder="e.g., 1420 Industrial Pkwy, Austin, TX"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Decision Maker Name</label>
                  <input 
                    type="text"
                    value={newProspect.contactName}
                    onChange={e => setNewProspect(prev => ({ ...prev, contactName: e.target.value }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                    placeholder="e.g., John Miller"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Phone Number</label>
                  <input 
                    type="text"
                    value={newProspect.phone}
                    onChange={e => setNewProspect(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                    placeholder="e.g., 512-555-0192"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Contact Email</label>
                <input 
                  type="email"
                  value={newProspect.email}
                  onChange={e => setNewProspect(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  placeholder="e.g., j.miller@apexlogistics.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Prospect Score (1-25)</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="25"
                    value={newProspect.score}
                    onChange={e => setNewProspect(prev => ({ ...prev, score: parseInt(e.target.value) || 15 }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Initial Pipeline Stage</label>
                  <select
                    value={newProspect.status}
                    onChange={e => setNewProspect(prev => ({ ...prev, status: e.target.value as Prospect["status"] }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  >
                    <option value="New">New Prospect</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Meeting">Meeting Scheduled</option>
                    <option value="Signed">Signed Agreement</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Scouting & Facility Notes</label>
                <textarea 
                  value={newProspect.notes}
                  onChange={e => setNewProspect(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white h-20 focus:outline-none focus:border-[#E2B53E]"
                  placeholder="e.g., Blue collar environment, high foot traffic..."
                />
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowAddProspect(false)}>Cancel</Button>
                <Button type="submit" className="bg-[#F04438] text-white hover:bg-[#F04438]/90 font-semibold">Save Prospect</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Task Modal */}
      {showAddTask && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#121214] border border-white/[0.06] rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Create Follow-Up Task</h3>
            <form onSubmit={handleAddTask} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Task Description / Action *</label>
                <input 
                  type="text" 
                  required
                  value={newTask.title}
                  onChange={e => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  placeholder="e.g., Call Sarah Connor to follow up on pitch"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Due Date *</label>
                  <input 
                    type="date" 
                    required
                    value={newTask.dueDate}
                    onChange={e => setNewTask(prev => ({ ...prev, dueDate: e.target.value }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Priority</label>
                  <select
                    value={newTask.priority}
                    onChange={e => setNewTask(prev => ({ ...prev, priority: e.target.value as FollowUpTask["priority"] }))}
                    className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-slate-400 mb-1">Linked Location / Prospect</label>
                <select
                  value={newTask.prospectName}
                  onChange={e => setNewTask(prev => ({ ...prev, prospectName: e.target.value }))}
                  className="w-full bg-zinc-900 border border-white/[0.06] rounded p-2.5 text-white focus:outline-none focus:border-[#E2B53E]"
                >
                  <option value="">None / General</option>
                  {prospects.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowAddTask(false)}>Cancel</Button>
                <Button type="submit" className="bg-[#F04438] text-white hover:bg-[#F04438]/90 font-semibold">Create Task</Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
