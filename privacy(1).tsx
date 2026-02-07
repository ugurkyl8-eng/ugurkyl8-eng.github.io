import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-32 pb-20 px-4 sm:px-6">
        <h1 className="text-4xl font-display font-bold mb-12">Gizlilik Politikası</h1>
        
        <div className="prose prose-invert prose-lg text-neutral-400">
          <p className="mb-8">
            PadresStudios ("biz", "bizim" veya "şirketimiz") olarak gizliliğinize büyük önem veriyoruz. 
            Verileriniz 1Password altyapısı ve endüstri standardı şifreleme yöntemleri ile korunmaktadır.
          </p>

          <h3 className="text-white font-semibold mt-8 mb-4">Gizlilik Politikası Değişiklikleri</h3>
          <p>
            Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada güncellenmiş revizyon tarihi ile birlikte yayınlanacaktır.
            Bu Gizlilik Politikasını değişiklikler için düzenli olarak gözden geçirmenizi öneririz.
          </p>

          <h3 className="text-white font-semibold mt-8 mb-4">Çerezler</h3>
          <p>
            Websitemiz tarama deneyiminizi geliştirmek için çerezler kullanır. Websitemizi kullanarak çerez kullanımımızı kabul etmiş olursunuz.
            Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu website işlevselliğini etkileyebilir.
          </p>

          <h3 className="text-white font-semibold mt-8 mb-4">İletişim</h3>
          <p>
            Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin: 
            <a href="mailto:zenixiletisim@gmail.com" className="text-white hover:underline ml-1">zenixiletisim@gmail.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
