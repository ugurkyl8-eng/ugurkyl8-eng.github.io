import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useReviews } from "@/hooks/use-reviews";
import { useLanguage } from "@/hooks/use-language";

export function ReviewMarquee() {
  const { data: reviews, isLoading } = useReviews();
  const { t } = useLanguage();

  const MOCK_REVIEWS = [
    { id: 991, name: t("mock_r1_name"), content: t("mock_r1_text"), rating: 5 },
    { id: 992, name: t("mock_r2_name"), content: t("mock_r2_text"), rating: 5 },
    { id: 993, name: t("mock_r3_name"), content: t("mock_r3_text"), rating: 4 },
    { id: 994, name: t("mock_r4_name"), content: t("mock_r4_text"), rating: 5 },
    { id: 995, name: t("mock_r5_name"), content: t("mock_r5_text"), rating: 5 },
  ];

  const displayReviews = (reviews && reviews.length > 0) ? reviews : MOCK_REVIEWS;

  if (isLoading) return <div className="h-40 w-full animate-pulse bg-white/5" />;

  return (
    <div className="w-full overflow-hidden py-12 bg-black relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="flex">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1500] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {[...displayReviews, ...displayReviews, ...displayReviews].map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="flex-shrink-0 w-[350px] p-6 bg-neutral-900/50 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="font-bold text-white">{review.name}</div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 ${starIdx < review.rating ? "fill-yellow-500 text-yellow-500" : "text-neutral-700"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">"{review.content}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
