import { FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logoPng from "@/assets/logo.png";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">PadresStudios</h3>
          
          <a href="https://donerai.me" target="_blank" rel="noopener noreferrer" className="mb-8 hover:scale-110 transition-transform">
            <img src={logoPng} alt="Doner AI" className="w-16 h-16 object-contain" />
          </a>

          <p className="text-white/50 max-w-sm mb-6">
            {t("footer_desc")}
          </p>
          <div className="flex gap-4">
            <a href="https://x.com/can048876115008" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-white/60 transition-colors">
              <FaXTwitter size={20} />
            </a>
            <a href="https://youtube.com/@ugurcaneditsyt?si=hZtf4y3csYCdNYt4" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-white/60 transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.instagram.com/ugurcanwht?igsh=dTMxdzg5MjBrcmU=" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-white/60 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-center">
          <div>
            <h4 className="text-white font-bold mb-6">{t("footer_legal")}</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/privacy" className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white/80 hover:text-white rounded-lg text-sm transition-all border border-white/5 shadow-sm">
                {t("footer_privacy")}
              </a>
              <a href="/privacy" className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white/80 hover:text-white rounded-lg text-sm transition-all border border-white/5 shadow-sm">
                {t("footer_cookies")}
              </a>
              <a href="/privacy" className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white/80 hover:text-white rounded-lg text-sm transition-all border border-white/5 shadow-sm">
                {t("footer_terms")}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t("footer_support")}</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <a href="mailto:zenixiletisimyt@gmail.com" className="px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors inline-block text-white font-medium">
                  {t("footer_contact")}
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>{t("footer_systems_active")}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">{t("footer_rights")}</p>
          <p className="text-white/30 text-sm flex items-center gap-2">
            {t("footer_security")}
          </p>
        </div>
      </div>
    </footer>
  );
}
