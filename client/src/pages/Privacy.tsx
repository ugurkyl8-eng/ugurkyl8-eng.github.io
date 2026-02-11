import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, FileText, CreditCard } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <h1 className="text-5xl font-bold mb-12">{t("privacy_title")}</h1>
        
        <div className="grid gap-12">
          {/* Security Section */}
          <section className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold">{t("privacy_data_security")}</h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              {t("privacy_data_security_text")}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Lock className="w-4 h-4" />
                <span>{t("privacy_ssl")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Shield className="w-4 h-4" />
                <span>{t("privacy_audits")}</span>
              </div>
            </div>
          </section>

          {/* Third Party Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-white/50" />
              {t("privacy_third_party")}
            </h2>
            <div className="space-y-6 text-white/70">
              <p>
                {t("privacy_third_party_text")}
              </p>
              
              <div className="pl-6 border-l-2 border-white/10 space-y-4">
                <div>
                  <h4 className="text-white font-bold mb-2">{t("privacy_exceptions")}</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <span className="text-white font-medium">{t("privacy_legal_req")}</span> {t("privacy_legal_req_text")}
                    </li>
                    <li>
                      <span className="text-white font-medium">{t("privacy_service_providers")}</span> {t("privacy_service_providers_text")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Section */}
          <section>
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-white/50" />
              {t("privacy_payment")}
            </h2>
            <p className="text-white/70 leading-relaxed">
              {t("privacy_payment_text")}
            </p>
          </section>

          {/* Cookies Section */}
          <section className="pt-12 border-t border-white/5">
            <h3 className="text-xl font-bold mb-4">{t("privacy_cookies")}</h3>
            <p className="text-white/60 text-sm mb-4">
              {t("privacy_cookies_text")}
            </p>
            <h3 className="text-xl font-bold mb-4 mt-8">{t("privacy_changes")}</h3>
            <p className="text-white/60 text-sm">
              {t("privacy_changes_text")}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
