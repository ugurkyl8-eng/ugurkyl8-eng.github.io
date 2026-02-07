import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReviewSchema, type InsertReview } from "@shared/schema";
import { useCreateReview } from "@/hooks/use-reviews";
import { Star, X, Check } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function AddReviewForm() {
  const [rating, setRating] = useState(5);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState<InsertReview | null>(null);
  const createReview = useCreateReview();
  
  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema.extend({
      name: insertReviewSchema.shape.name.min(4, "Kullanıcı adı en az 4 harfli olmalıdır"),
      content: insertReviewSchema.shape.content.min(175, "Mesaj en az 175 karakter olmalıdır"),
    })),
    defaultValues: {
      name: "",
      content: "",
      rating: 5,
    },
  });

  const onSubmit = (data: InsertReview) => {
    setFormData(data);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    if (formData && acceptedTerms) {
      createReview.mutate({ ...formData, rating });
      form.reset();
      setShowConfirm(false);
      setFormData(null);
      setAcceptedTerms(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 bg-neutral-900/30 border border-white/5 rounded-3xl mt-12">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Yorum Ekle</h3>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">İsim (En az 4 karakter)</label>
          <input
            {...form.register("name")}
            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:border-white/50 focus:outline-none transition-colors placeholder:text-neutral-700"
            placeholder="Kullanıcı Adınız"
          />
          {form.formState.errors.name && (
            <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">Puan</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => {
                  setRating(val);
                  form.setValue("rating", val);
                }}
                className="focus:outline-none transition-transform active:scale-95"
              >
                <Star
                  className={`w-8 h-8 ${
                    val <= rating ? "fill-yellow-500 text-yellow-500" : "text-neutral-800"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">Yorumunuz (En az 175 karakter)</label>
          <textarea
            {...form.register("content")}
            rows={4}
            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:border-white/50 focus:outline-none transition-colors placeholder:text-neutral-700 resize-none"
            placeholder="Döner AI hakkındaki düşünceleriniz..."
          />
          <div className="flex justify-between items-center">
            {form.formState.errors.content && (
              <p className="text-red-400 text-xs">{form.formState.errors.content.message}</p>
            )}
            <p className="text-xs text-white/30 ml-auto">
              {form.watch("content")?.length || 0} / 175
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={createReview.isPending}
          className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          {createReview.isPending ? "Gönderiliyor..." : "Yorumu Gönder"}
        </button>
      </form>

      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="bg-neutral-900 border-white/10 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Döner AI sitemizi Nasıl Buldunuz?</DialogTitle>
            <DialogDescription className="text-white/70 text-lg mt-4">
              Objektifçe Ve Saygılıca Düşüncelerinizi Bizimle Paylaşın
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-4">
              <p className="text-white/90 italic">"{formData?.content}"</p>
              <p className="text-sm font-bold text-primary">-- {formData?.name}</p>
            </div>

            <div className="space-y-2 text-sm text-red-400/80">
              <p>• Küfür Alakasız Yorum IP ban yemenize sebep olabilir</p>
              <p>• Mesajı Göndermek Padres Gizlilik Koşullarını Kabul Ediyor Olmanız Anlamına gelir</p>
            </div>

            <p className="font-bold">Mesajınızın gönderilmesini istiyormusunuz?</p>

            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Checkbox 
                id="terms" 
                checked={acceptedTerms} 
                onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                className="mt-1 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label htmlFor="terms" className="text-sm leading-tight cursor-pointer">
                Padres gizlilik koşullarını okudum kabul ediyorum ve devam ediyorum
              </label>
            </div>
          </div>

          <DialogFooter className="flex flex-row gap-4 sm:justify-end">
            <Button 
              variant="ghost" 
              onClick={() => setShowConfirm(false)}
              className="flex-1 sm:flex-none gap-2 hover:bg-red-500/10 hover:text-red-400"
            >
              <X className="w-4 h-4" /> Hayır
            </Button>
            <Button 
              onClick={handleConfirm}
              disabled={!acceptedTerms}
              className="flex-1 sm:flex-none gap-2 bg-white text-black hover:bg-gray-200 disabled:opacity-50"
            >
              <Check className="w-4 h-4" /> Onayla
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
