import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, FileText, CreditCard } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <h1 className="text-5xl font-bold mb-12">Gizlilik ve Güvenlik</h1>
        
        <div className="grid gap-12">
          {/* Security Section */}
          <section className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold">Veri Güvenliği</h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. 
              Altyapımızda <strong>1Password</strong> şifreleme teknolojileri kullanılmaktadır. 
              Gizliliğinize en üst düzeyde önem veriyor ve verilerinizi asla yetkisiz kişilerle paylaşmıyoruz.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Lock className="w-4 h-4" />
                <span>SSL/TLS Şifreleme</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Shield className="w-4 h-4" />
                <span>Düzenli Güvenlik Denetimleri</span>
              </div>
            </div>
          </section>

          {/* Third Party Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-white/50" />
              Üçüncü Taraf Paylaşımı
            </h2>
            <div className="space-y-6 text-white/70">
              <p>
                Bilgilerinizi üçüncü taraflara <strong>satmaz, takas etmez veya aktarmayız.</strong>
              </p>
              
              <div className="pl-6 border-l-2 border-white/10 space-y-4">
                <div>
                  <h4 className="text-white font-bold mb-2">İstisnalar:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <span className="text-white font-medium">Yasal Gereklilikler:</span> Mahkeme kararı gibi yasal süreçlere uymak için gerektiğinde bilgi paylaşabiliriz.
                    </li>
                    <li>
                      <span className="text-white font-medium">Hizmet Sağlayıcılar:</span> Web sitemizi işletmemize yardımcı olan güvenilir ortaklarla anonim analitik veriler paylaşabiliriz.
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
              Ödeme ve Altyapı
            </h2>
            <p className="text-white/70 leading-relaxed">
              Ödeme işlemleriniz güvenli altyapılar üzerinden gerçekleştirilmektedir. 
              GitHub Student Pack avantajlarından yararlanan kullanıcılarımız için özel doğrulama sistemleri kullanılmaktadır. 
              Kart bilgileriniz sunucularımızda asla saklanmaz.
            </p>
          </section>

          {/* Cookies Section */}
          <section className="pt-12 border-t border-white/5">
            <h3 className="text-xl font-bold mb-4">Çerez Politikası</h3>
            <p className="text-white/60 text-sm mb-4">
              Web sitemiz tarama deneyiminizi geliştirmek için çerezler kullanır.
              Web sitemizi kullanarak çerez kullanımımızı kabul etmiş olursunuz.
              Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu website işlevselliğini etkileyebilir.
            </p>
            <h3 className="text-xl font-bold mb-4 mt-8">Gizlilik Politikası Değişiklikleri</h3>
            <p className="text-white/60 text-sm">
              Gizlilik Politikamızı zaman zaman güncelleyebiliriz.
              Değişiklikler bu sayfada güncellenmiş revizyon tarihi ile birlikte olacaktır.
              Bu Gizlilik Politikasını değişiklikler için düzenli gözden geçirmenizi öneririz.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
