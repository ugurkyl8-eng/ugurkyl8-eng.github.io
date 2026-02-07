import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  { role: "user", text: "Döner AI nedir?" },
  { role: "ai", text: "Döner AI, 27 Aralık 2025'te geliştirilmeye başlanan en gelişmiş Türk yapay zeka asistanıdır." },
  { role: "user", text: "Neler yapabilirsin?" },
  { role: "ai", text: "Kod yazabilirim, Türkçe metinleri kusursuz analiz edebilirim ve en yeni modelleri kullanırım." },
];

export function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => (prev < messages.length ? prev + 1 : prev));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto h-[400px] bg-neutral-900/50 rounded-3xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-end shadow-2xl shadow-black">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-neutral-900/80 to-transparent z-10 pointer-events-none" />
      
      <div className="space-y-4">
        {messages.slice(0, visibleMessages).map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-white text-black rounded-tr-sm"
                  : "bg-neutral-800 text-white border border-white/10 rounded-tl-sm"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        {visibleMessages < messages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1 pl-2"
          >
            <span className="w-2 h-2 bg-white/30 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-white/30 rounded-full animate-bounce delay-75" />
            <span className="w-2 h-2 bg-white/30 rounded-full animate-bounce delay-150" />
          </motion.div>
        )}
      </div>
    </div>
  );
}
