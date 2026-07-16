import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, CreditCard, Lock, ChevronRight, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../shared/seo/SEO';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('phone'); // phone, email, tckn
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Fake login simulation
    setTimeout(() => {
      setIsLoading(false);
      navigate('/portal/dashboard');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxera-navy pt-20 pb-12">
      <SEO 
        title="Giriş Yap | Luxera Towers Sakinler Portalı"
        description="Luxera Towers sakinlerine özel dijital yönetim sistemine giriş yapın."
      />

      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/exterior/14_2025-12-18_02-46-35_78c2e7.webp" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-luxera-navy/90 via-luxera-navy/70 to-luxera-navy/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Glow inside the card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-luxera-gold/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo/logo.webp" alt="Luxera Logo" className="h-10 mx-auto brightness-0 invert" />
            </Link>
            <h1 className="text-2xl font-serif text-white mb-2">Portal Girişi</h1>
            <p className="text-gray-400 text-sm">Dijital rezidans yönetimi sistemine hoş geldiniz.</p>
          </div>

          {/* Login Method Selector */}
          <div className="flex bg-black/40 p-1 rounded-xl mb-8 border border-white/10">
            <button 
              type="button"
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all ${loginMethod === 'phone' ? 'bg-luxera-gold text-luxera-navy shadow-md' : 'text-gray-400 hover:text-white'}`}
            >
              <Phone size={14} /> Telefon
            </button>
            <button 
              type="button"
              onClick={() => setLoginMethod('tckn')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all ${loginMethod === 'tckn' ? 'bg-luxera-gold text-luxera-navy shadow-md' : 'text-gray-400 hover:text-white'}`}
            >
              <CreditCard size={14} /> TCKN
            </button>
            <button 
              type="button"
              onClick={() => setLoginMethod('email')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all ${loginMethod === 'email' ? 'bg-luxera-gold text-luxera-navy shadow-md' : 'text-gray-400 hover:text-white'}`}
            >
              <Mail size={14} /> E-Posta
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2">
                {loginMethod === 'phone' ? 'Cep Telefonu' : loginMethod === 'tckn' ? 'TC Kimlik No' : 'E-Posta Adresi'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  {loginMethod === 'phone' ? <Phone size={18} /> : loginMethod === 'tckn' ? <CreditCard size={18} /> : <Mail size={18} />}
                </div>
                <input 
                  type={loginMethod === 'email' ? 'email' : 'text'}
                  placeholder={loginMethod === 'phone' ? '0(5XX) XXX XX XX' : loginMethod === 'tckn' ? '11 Haneli TCKN' : 'ornek@email.com'}
                  className="w-full bg-black/40 border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-luxera-gold focus:ring-1 focus:ring-luxera-gold transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2">
                Şifre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Şifreniz"
                  className="w-full bg-black/40 border border-white/10 text-white pl-12 pr-12 py-3 rounded-xl focus:outline-none focus:border-luxera-gold focus:ring-1 focus:ring-luxera-gold transition-all"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox bg-black/40 border-white/10 text-luxera-gold focus:ring-luxera-gold rounded" />
                <span className="text-sm text-gray-300">Beni Hatırla</span>
              </label>
              <button type="button" className="text-sm text-luxera-gold hover:text-white transition-colors">
                Şifremi Unuttum
              </button>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-luxera-gold text-luxera-navy font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <><Loader2 size={20} className="animate-spin" /> Giriş Yapılıyor...</>
              ) : (
                <>Giriş Yap <ChevronRight size={18} /></>
              )}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-white/10 pt-6">
            <p className="text-sm text-gray-400">
              Sisteme giriş yapamıyor musunuz? <br/>
              <a href="tel:+902120000000" className="text-luxera-gold hover:text-white transition-colors font-semibold">
                Destek Hattını Arayın
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
