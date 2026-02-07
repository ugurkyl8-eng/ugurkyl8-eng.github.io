import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import logoPng from "@/assets/logo.png";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingProps {
  title: string;
  price: string;
  oldPrice?: string;
  features: PricingFeature[];
  recommended?: boolean;
  className?: string;
}

export function PricingCard({ title, price, oldPrice, features, recommended, className }: PricingProps) {
  const { toast } = useToast();

  const handleBuy = () => {
    toast({
      title: "Henüz Kullanılamıyor",
      description: "Şuan alamazsınız daha eklenmedi.",
      variant: "default",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "relative p-8 rounded-3xl border flex flex-col h-full backdrop-blur-md transition-all duration-300",
        recommended 
          ? "bg-white/10 border-[#FFD700]/30 shadow-xl shadow-[#FFD700]/5" 
          : "bg-neutral-900/40 border-white/5",
        className
      )}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFD700] text-black text-xs font-bold rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(255,215,0,0.3)]">
          Çok Satan
        </div>
      )}

      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            {oldPrice && (
              <span className="text-lg text-white/30 line-through decoration-red-500/50">{oldPrice}</span>
            )}
            {oldPrice && <span className="text-white/30">→</span>}
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white tracking-tight">{price}</span>
              {price !== "Ücretsiz" && <span className="text-white/50 text-sm">/ay</span>}
            </div>
          </div>
        </div>
        <img src={logoPng} alt="Logo" className="w-10 h-10 object-contain" />
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-400 shrink-0" />
            ) : (
              <X className="w-5 h-5 text-red-400/50 shrink-0" />
            )}
            <span className={feature.included ? "text-white/80" : "text-white/30"}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleBuy}
        className={cn(
          "w-full py-4 rounded-xl font-bold transition-all duration-200",
          recommended
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        Satın Al
      </button>
    </motion.div>
  );
}
