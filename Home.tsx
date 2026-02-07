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

export default function Home() {
  const [showPurpose, setShowPurpose] = useState(false);

  const faqs = [
    {
      question: "Döner AI Ne Zaman Çıkacak?",
      answer: "Ekibimiz Milli Yapay Zeka Döner AI üzerinde çalışıyor ve çalışmaya da devam ediyoruz. Şu an için net bir çıkış tarihimiz yok ancak ufak tefek hatalar üzerinde yoğunlaşmış durumdayız. Gizlilik prosedürleri ve ödeme altyapısı (kredi kartı işlemleri vb.) tamamlandığında lansmanımızı gerçekleştireceğiz. Sabrınız ve desteğiniz için teşekkürler!"
    },
    {
      question: "Döner AI Kimler Tarafından Tasarlandı?",
      answer: "Döner AI, Padres ekibi tarafından geliştirilmektedir. Amacımız, en gelişmiş yapay zeka modellerini tek bir çatı altında toplayarak kullanıcılarımıza sunan güçlü bir Türk AI ekosistemi oluşturmaktır. Yerli bir yapay zeka deneyimi için beklemede kalın..."
    },
    {
      question: "Verilerimiz Güvende Mi?",
      answer: "Kesinlikle. Döner AI, 'Önce Gizlilik' prensibiyle tasarlanmıştır. Sohbetleriniz uçtan uca şifrelenmektedir. Gelişmiş şifreleme algoritmalarımız sayesinde verileriniz sadece sizin cihazınızda anlamlandırılabilir. Verileriniz sunucularımıza ham metin olarak asla kaydedilmez ve cihazınız ile yapay zeka modelleri arasındaki iletişim tamamen güvenli kanallar üzerinden yürütülür."
    },
    {
      question: "Kredi Kartı Verilerimiz Güvende Mi?",
      answer: "Ödeme güvenliği bizim için en üst önceliktir. Kredi kartı bilgileriniz sunucularımızda asla saklanmaz. Tüm işlemler, uluslararası güvenlik standartlarına (PCI-DSS) sahip lisanslı ödeme kuruluşları üzerinden gerçekleştirilir. Ödeme anında verileriniz 256-bit SSL sertifikası ile korunmaktadır ve banka onayınız olmadan hiçbir işlem başlatılmaz."
    },
    {
      question: "Döner AI GitHub Student Pack veya Öğrenci İndirimi Var Mı?",
      answer: "Eğitimi ve öğrencilerimizi her zaman destekliyoruz. GitHub Student Pack entegrasyonu için henüz görüşmelerimiz sürse de, lansman sonrası öğrenciler için özel indirim kodları ve kampanyalar tanımlayacağız. Öğrenci dostu bir fiyatlandırma politikası için çalışmalarımız devam ediyor."
    }
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
                  <span className="text-xs font-medium text-white/70 uppercase tracking-widest">Uçtan Uca Şifreli & Güvenli</span>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                    AES-256 Şifreleme
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-tighter">
                    GDPR Uyumlu
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
                    KVKK Korumalı
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                  Döner AI ile <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                    Geleceği Keşfet
                  </span>
                </h1>
                
                <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Profesyonel gizlilik standartları ile donatılmış Türk yapay zekası. 
                  Sohbetleriniz uçtan uca şifrelenir ve verileriniz sunucularımıza asla ham olarak ulaşmaz.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setShowPurpose(!showPurpose)}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                  >
                    Hakkımızda
                    <ChevronDown className={`w-4 h-4 transition-transform ${showPurpose ? "rotate-180" : ""}`} />
                  </button>
                  <a href="#premium" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                    Premium Paketler
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
                          <p className="text-xs font-bold uppercase">Uçtan Uca Şifreleme</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                          <Database className="w-6 h-6 text-primary" />
                          <p className="text-xs font-bold uppercase">Sıfır Sunucu Kaydı</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                          <ShieldCheck className="w-6 h-6 text-primary" />
                          <p className="text-xs font-bold uppercase">Maksimum Güvenlik</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4">Kuruluş Amacımız</h3>
                      <p className="text-white/70 leading-relaxed mb-4">
                        PadresStudios olarak amacımız, Türkiye'nin yapay zeka alanındaki potansiyelini 
                        ortaya çıkarmak ve global ölçekte rekabet edebilecek teknolojiler üretmektir. 
                        Döner AI, bu vizyonun ilk ve en güçlü adımıdır.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider">Kuruluş</p>
                          <p className="font-mono text-white">27.12.2025</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider">Lokasyon</p>
                          <p className="font-mono text-white">İstanbul, TR</p>
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
            <h2 className="text-4xl font-bold mb-4">Premium Erişim</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              İhtiyaçlarınıza en uygun paketi seçin. İster bireysel kullanım, ister profesyonel çözümler.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Döner AI Free"
              price="Ücretsiz"
              features={[
                { text: "Düşünen ve Pro Kullanım Hakkı 2", included: true },
                { text: "Search Hakkı Günde 7", included: true },
                { text: "Mesaj Uzunluk Sınırı 7.5 Bin", included: true },
                { text: "Dosya Boyutu 3 MB", included: true },
                { text: "Görsel Gönderme Günde 3", included: true },
                { text: "Ultra Things Erişim", included: false },
                { text: "Sesli Sohbet (Ultra'ya Özel)", included: false },
                { text: "Destek Mesajlarınıza Öncelik", included: false },
                { text: "Size Özel Sunucular", included: false },
                { text: "Daha iyi ve size Özel Mesajlar", included: false },
                { text: "Özel AI Arayüzünü Daha Şık Yapma", included: false },
                { text: "Pro Modunda Daha İyi Kodlama", included: false },
              ]}
            />
            
            <PricingCard
              title="Döner AI Pro"
              price="169 TL"
              features={[
                { text: "Düşünen ve Pro Günde 8 Limit", included: true },
                { text: "Günde 25 Search Hakkı", included: true },
                { text: "20 Bin Karakter Mesaj Sınırı", included: true },
                { text: "20 MB Dosya Boyutu", included: true },
                { text: "Günde 5 Görsel", included: true },
                { text: "Ultra Things Erişim Günde 3", included: true },
                { text: "AI Arayüzünü Daha Şık Yapma", included: true },
                { text: "Discord Kanalımıza Katılma", included: true },
                { text: "Destek Mesajlarınıza Öncelik", included: false },
                { text: "Sesli Sohbet", included: false },
                { text: "Size Özel Sunucular", included: false },
                { text: "Pro Modunda Daha İyi Kodlama", included: false },
              ]}
            />
            
            <PricingCard
              title="Döner AI Ultra"
              price="264 TL"
              oldPrice="364 TL"
              recommended={true}
              features={[
                { text: "Düşünen ve Pro Günde 20 Limit", included: true },
                { text: "Sesli Sohbet Avantajı (Geliştirilme Aşamasındadır)", included: true },
                { text: "Size Özel Gemini, Claude, ChatGPT Sunucuları", included: true },
                { text: "40 MB Dosya Boyutu", included: true },
                { text: "Görsel Gönderme Limiti 20", included: true },
                { text: "Ultra Things Sınırsız Erişim", included: true },
                { text: "Daha İyi ve Size Özel Mesajlar", included: true },
                { text: "Döner AI Arayüzünü Daha Şık Yapma", included: true },
                { text: "Destek Mesajlarınıza Öncelik", included: true },
                { text: "Discord Kanalımıza Katılma (Arkadaş edinin)", included: true },
                { text: "Pro Modunda Daha İyi Kodlama", included: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 border-t border-white/5 bg-neutral-900/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-white/50">Döner AI hakkında merak edilenler.</p>
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
            <h3 className="text-2xl font-bold mb-4">Hala Sorularınız Var Mı?</h3>
            <p className="text-white/50 mb-8">
              Ekibimize aşağıdaki kanallardan ulaşabilirsiniz. Aklınızda kalan bir soru varsa ekibimiz yardımcı olacaktır.
            </p>
            <a 
              href="mailto:zenixiletisimyt@gmail.com"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-200"
            >
              Bize Mail Gönderin
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
          <h2 className="text-4xl font-bold mb-4">Kullanıcı Yorumları</h2>
          <p className="text-white/50 mb-4">Topluluğumuzun deneyimleri bizim için değerlidir.</p>
          <a 
            href="https://donerai.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-all text-primary"
          >
            sitemizi ziyaret edin donerai.me
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
            DÖNER AI GELİŞTİRİLME AŞAMASINDAN GÖRÜNTÜLER
          </h2>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/images/development-preview.png" 
              alt="Döner AI Geliştirilme Aşaması" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
