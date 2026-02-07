import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Shield, CreditCard, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Ana Sayfa", href: "/", icon: Home },
    { title: "Premium Erişim", href: "/#premium", icon: CreditCard },
    { title: "Gizlilik", href: "/privacy", icon: Shield },
    { title: "SSS", href: "/#faq", icon: HelpCircle },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="cursor-pointer">
              <span className="text-2xl font-display font-bold text-white tracking-tighter">
                Padres<span className="text-primary">Studios</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/10"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-8 h-8" />
                </Button>
              </div>
              
              <div className="flex flex-col space-y-6">
                {menuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-2xl font-bold text-white/70 hover:text-white transition-colors"
                  >
                    <item.icon className="w-6 h-6" />
                    {item.title}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-white/30 text-sm">PadresStudios © 2026</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
