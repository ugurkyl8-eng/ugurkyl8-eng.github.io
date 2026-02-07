import { motion } from "framer-motion";

const models = [
  { name: "GEMINI FLASH 3", logo: "https://www.chip.de/ii/1/2/7/2/0/6/3/9/2/Design_ohne_Titel_-_2025-09-11T141437.381-80762a52a0610058.jpg" },
  { name: "GEMINI 3 PRO", logo: "https://play-lh.googleusercontent.com/Pkwn0AbykyjSuCdSYCbq0dvOqHP-YXcbBLTZ8AOUZhvnRuhUnZ2aJrw_YCf6kVMcZ4PM" },
  { name: "CHATGPT 5.2", logo: "https://static.vecteezy.com/system/resources/previews/021/608/790/non_2x/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg" },
  { name: "CHATGPT 5 CHAT", logo: "https://static.vecteezy.com/system/resources/previews/021/059/825/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg" },
  { name: "CLAUDE 4.5 SONNET", logo: "https://play-lh.googleusercontent.com/4S1nfdKsH_1tJodkHrBHimqlCTE6qx6z22zpMyPaMc_Rlr1EdSFDI1I6UEVMnokG5zI" },
  { name: "CLAUDE 4.5 OPUS", logo: "https://play-lh.googleusercontent.com/4S1nfdKsH_1tJodkHrBHimqlCTE6qx6z22zpMyPaMc_Rlr1EdSFDI1I6UEVMnokG5zI" },
  { name: "CLAUDE 4.5 HAİKU", logo: "https://play-lh.googleusercontent.com/4S1nfdKsH_1tJodkHrBHimqlCTE6qx6z22zpMyPaMc_Rlr1EdSFDI1I6UEVMnokG5zI" },
];

export function ModelTicker() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white uppercase">
          DÖNER AI DESTEKLEDİĞİMİZ MODELLER
        </h2>
      </div>
      
      <div className="w-full overflow-hidden py-6 relative z-10">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-16 px-6 items-center"
            animate={{ x: [0, -2000] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {[...models, ...models, ...models, ...models, ...models, ...models, ...models, ...models].map((model, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-white/5 shadow-lg">
                  <img 
                    src={model.logo} 
                    alt={model.name} 
                    className="w-full h-full object-cover transition-all"
                  />
                </div>
                <span className="text-lg font-bold text-white tracking-wider uppercase font-mono">
                  {model.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
