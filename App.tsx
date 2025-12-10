import React from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Chatbot } from './components/Chatbot';
import { SERVICES, PRICES, TESTIMONIALS } from './constants';
import { ArrowRight, CheckCircle2, MapPin, Phone, Clock, Instagram, Facebook, Star, Shirt, Sparkles, Truck, WashingMachine } from 'lucide-react';

const App: React.FC = () => {
  
  const getIcon = (name: string) => {
    switch(name) {
      case 'Shirt': return <Shirt className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      default: return <Shirt className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=2071&auto=format&fit=crop" 
            alt="Laundry Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-down">
            Bersih, Wangi, Rapi<br />
            <span className="text-brand-300">dalam Sekejap!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Solusi laundry terpercaya untuk pakaian kesayangan Anda. Teknologi modern, deterjen ramah lingkungan, dan layanan antar jemput gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
              Lihat Harga
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-900" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Hubungi Kami
            </Button>
          </div>
        </div>
        
        {/* Decorative Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-50 fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Layanan Kami</h2>
            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Apapun Kebutuhan Cucian Anda</h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">Kami menangani segala jenis pakaian dengan perawatan terbaik.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(service.iconName)}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Daftar Harga</h2>
            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Transparan & Terjangkau</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICES.map((price) => (
              <div key={price.id} className={`relative p-8 rounded-3xl border-2 flex flex-col ${price.recommended ? 'border-brand-500 bg-brand-50/50 shadow-lg scale-105 z-10' : 'border-gray-100 bg-white hover:border-brand-200'}`}>
                {price.recommended && (
                  <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                    <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Paling Laris</span>
                  </div>
                )}
                <h4 className="text-lg font-semibold text-gray-900">{price.service}</h4>
                <div className="mt-4 mb-6 flex items-baseline text-gray-900">
                  <span className="text-base font-semibold">Rp</span>
                  <span className="text-4xl font-bold tracking-tight">{price.price}</span>
                  <span className="ml-1 text-sm text-gray-500">{price.unit}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {price.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-brand-500 flex-shrink-0 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={price.recommended ? 'primary' : 'outline'} className="w-full">
                  Pilih Paket
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 opacity-10">
           <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.8,2.2C83.1,16.1,73.1,28.8,63.2,40.1C53.3,51.4,43.5,61.3,31.9,68.2C20.3,75.1,6.9,79.1,-5.4,76.8C-17.7,74.5,-29,65.9,-39.9,56.7C-50.8,47.5,-61.4,37.7,-69.5,25.6C-77.6,13.5,-83.3,-0.9,-81.1,-14.2C-78.9,-27.5,-68.8,-39.7,-57.1,-47.5C-45.4,-55.4,-32.1,-58.9,-19.3,-62.4C-6.5,-65.9,5.8,-69.4,19.2,-71.3C32.6,-73.2,47.1,-73.5,45.7,-76.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-brand-300 font-semibold tracking-wide uppercase text-sm">Testimoni</h2>
            <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Kata Pelanggan Kami</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi) => (
              <div key={testi.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-100 italic mb-6">"{testi.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full border-2 border-brand-400 object-cover" />
                  <div>
                    <h5 className="font-bold text-white">{testi.name}</h5>
                    <span className="text-sm text-brand-200">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Siap Membuat Pakaian Anda Seperti Baru?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Jangan biarkan tumpukan cucian mengganggu hari Anda. Serahkan pada ahlinya.
          </p>
          <Button size="lg" className="shadow-xl" onClick={() => window.open('https://wa.me/6281234567890', '_blank')}>
            Pesan via WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-600 p-2 rounded-lg">
                    <WashingMachine className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl text-brand-900">Laundry Rarare</span>
              </div>
              <p className="text-gray-500 mb-6">
                Layanan laundry premium dengan harga bersahabat. Kami mengutamakan kebersihan, kerapian, dan ketepatan waktu.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-brand-100 text-gray-600 hover:text-brand-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-brand-100 text-gray-600 hover:text-brand-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Hubungi Kami</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                  <span>Jl. Mawar Indah No. 12,<br/>Jakarta Selatan, DKI Jakarta</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <span>0812-3456-7890</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <span>Senin - Minggu: 08.00 - 20.00</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Area Layanan</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Kebayoran Baru</li>
                <li>Pondok Indah</li>
                <li>Gandaria</li>
                <li>Blok M</li>
                <li>Senopati</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Laundry Rarare. All rights reserved.
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;