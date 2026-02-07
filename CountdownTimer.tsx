import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set fixed target date: 30 days from a specific point in time (Feb 7, 2026)
    const targetDate = new Date("2026-03-09T12:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-2xl min-w-[100px] backdrop-blur-sm">
      <span className="text-4xl font-bold font-mono text-primary">{value.toString().padStart(2, '0')}</span>
      <span className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{label}</span>
    </div>
  );

  return (
    <section className="py-20 bg-black/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white uppercase mb-4">
          DÖNER AI TAHMİNİ ÇIKIŞ SÜRESİ
        </h2>
        <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-12">
          ( ERTELENEBİLİR TAHMİNİDİR )
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <TimeUnit value={timeLeft.days} label="GÜN" />
          <TimeUnit value={timeLeft.hours} label="SAAT" />
          <TimeUnit value={timeLeft.minutes} label="DAKİKA" />
          <TimeUnit value={timeLeft.seconds} label="SANİYE" />
        </div>
      </div>
    </section>
  );
}
