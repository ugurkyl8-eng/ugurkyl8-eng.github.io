import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";

export function ChatDemo() {
  const { t } = useLanguage();
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  const messages = [
    { role: "user", text: t("chat_q1") },
    { role: "ai", text: t("chat_a1") },
    { role: "user", text: t("chat_q2") },
    { role: "ai", text: t("chat_a2") },
  ];

  useEffect(() => {
    setVisibleMessages(0);
    const interval = setInterval(() => {
      setVisibleMessages((prev) => (prev < messages.length ? prev + 1 : prev));
    }, 1500);

    return () => clearInterval(interval);
  }, [t]);

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
