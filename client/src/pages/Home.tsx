import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModelTicker } from "@/components/ModelTicker";
import logoPng from "@/assets/logo.png";
import { ChatDemo } from "@/components/ChatDemo";
import { PricingCard } from "@/components/PricingCard";
import { ReviewMarquee } from "@/components/ReviewMarquee";
import { AddReviewForm } from "@/components/AddReviewForm";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ChevronDown, ShieldCheck, Lock, Database } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const [showPurpose, setShowPurpose] = useState(false);
  const { t } = useLanguage();

  const faqs = [
    { question: t("faq_q1"), answer: t("faq_a1") },
    { question: t("faq_q2"), answer: t("faq_a2") },
    { question: t("faq_q3"), answer: t("faq_a3") },
    { question: t("faq_q4"), answer: t("faq_a4") },
    { question: t("faq_q5"), answer: t("faq_a5") },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium text-white/70 uppercase tracking-widest">{t("hero_badge")}</span>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                    MongoDB Atlas
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-tighter">
                    {t("hero_gdpr")}
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
                    Firebase Auth
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                  {t("hero_title_1")} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                    {t("hero_title_2")}
                  </span>
                </h1>
                
                <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {t("hero_desc")}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setShowPurpose(!showPurpose)}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                  >
                    {t("hero_about")}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showPurpose ? "rotate-180" : ""}`} />
                  </button>
                  <a href="#premium" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                    {t("hero_premium_btn")}
                  </a>
                </div>
              </motion.div>

              {/* Founding Purpose Expandable */}
              <AnimatePresence>
                {showPurpose && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 overflow-hidden"
                  >
                    <div className="p-8 bg-neutral-900/80 border border-white/10 rounded-3xl backdrop-blur-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        <div className="flex flex-col items-center text-center gap-2">
                          <Lock className="w-6 h-6 text-primary" />
                          <p className="text-xs font-bold uppercase">{t("about_e2e")}</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                          <Database className="w-6 h-6 text-primary" />
                          <p className="text-xs font-bold uppercase">{t("about_zero_log")}</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                          <ShieldCheck className="w-6 h-6 text-primary" />
                          <p className="text-xs font-bold uppercase">{t("about_max_security")}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{t("about_mission")}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">
                        {t("about_mission_text")}
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider">{t("about_founded")}</p>
                          <p className="font-mono text-white">27.12.2025</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider">{t("about_location")}</p>
                          <p className="font-mono text-white">Istanbul, TR</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex-1 w-full max-w-md lg:max-w-full">
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      <CountdownTimer />
      <ModelTicker />

      {/* Pricing Section */}
      <section id="premium" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">{t("pricing_title")}</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {t("pricing_subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Döner AI Free"
              price={t("pricing_free")}
              features={[
                { text: t("pf_thinking_pro_2"), included: true },
                { text: t("pf_search_7"), included: true },
                { text: t("pf_msg_limit_7k"), included: true },
                { text: t("pf_file_3mb"), included: true },
                { text: t("pf_images_3"), included: true },
                { text: t("pf_ultra_things"), included: false },
                { text: t("pf_voice_chat_ultra"), included: false },
                { text: t("pf_priority_support"), included: false },
                { text: t("pf_dedicated_servers"), included: false },
                { text: t("pf_better_messages"), included: false },
                { text: t("pf_enhanced_ui"), included: false },
                { text: t("pf_better_coding"), included: false },
              ]}
            />
            
            <PricingCard
              title="Döner AI Pro"
              price="169 TL"
              features={[
                { text: t("pf_thinking_pro_8"), included: true },
                { text: t("pf_search_25"), included: true },
                { text: t("pf_msg_limit_20k"), included: true },
                { text: t("pf_file_20mb"), included: true },
                { text: t("pf_images_5"), included: true },
                { text: t("pf_ultra_things_3"), included: true },
                { text: t("pf_enhanced_ui"), included: true },
                { text: t("pf_discord_access"), included: true },
                { text: t("pf_priority_support"), included: false },
                { text: t("pf_voice_chat"), included: false },
                { text: t("pf_dedicated_servers"), included: false },
                { text: t("pf_better_coding"), included: false },
              ]}
            />
            
            <PricingCard
              title="Döner AI Ultra"
              price="264 TL"
              oldPrice="364 TL"
              recommended={true}
              features={[
                { text: t("pf_thinking_pro_20"), included: true },
                { text: t("pf_voice_chat_dev"), included: true },
                { text: t("pf_dedicated_gemini"), included: true },
                { text: t("pf_file_40mb"), included: true },
                { text: t("pf_images_20"), included: true },
                { text: t("pf_ultra_unlimited"), included: true },
                { text: t("pf_better_messages"), included: true },
                { text: t("pf_enhanced_doner"), included: true },
                { text: t("pf_priority_support"), included: true },
                { text: t("pf_discord_friends"), included: true },
                { text: t("pf_better_coding"), included: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 border-t border-white/5 bg-neutral-900/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("faq_title")}</h2>
            <p className="text-white/50">{t("faq_subtitle")}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-white/10 rounded-2xl px-6 bg-white/5 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-left font-bold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-white/70 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 text-center p-12 bg-gradient-to-b from-white/5 to-transparent rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">{t("faq_still_questions")}</h3>
            <p className="text-white/50 mb-8">
              {t("faq_still_questions_text")}
            </p>
            <a 
              href="mailto:support@donerai.me"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-200"
            >
              {t("faq_email_us")}
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 border-t border-white/5 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <div className="inline-block mb-6 relative group">
            <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors" />
            <a href="https://donerai.me" target="_blank" rel="noopener noreferrer">
              <img src={logoPng} alt="Logo" className="w-24 h-24 object-contain relative z-10 hover:scale-110 transition-transform" />
            </a>
          </div>
          <h2 className="text-4xl font-bold mb-4">{t("reviews_title")}</h2>
          <p className="text-white/50 mb-4">{t("reviews_subtitle")}</p>
          <a 
            href="https://donerai.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-all text-primary"
          >
            {t("reviews_visit")}
          </a>
        </div>
        
        <ReviewMarquee />
        
        <div id="contact">
            <AddReviewForm />
        </div>
      </section>

      {/* Development Preview Section */}
      <section className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8 text-white/90">
            {t("dev_preview_title")}
          </h2>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/development-preview.png" 
              alt="Döner AI Development Stage" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
