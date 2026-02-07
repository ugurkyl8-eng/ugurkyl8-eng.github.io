import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/5 border-white/10 mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-white">404 Sayfa Bulunamadı</h1>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>

            <div className="mt-8">
              <Link href="/" className="text-primary hover:underline underline-offset-4">
                Ana Sayfaya Dön
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
