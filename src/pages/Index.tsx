import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const FloatingDots = () => {
  const [dots, setDots] = useState<{ x: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            animation: `float ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <FloatingDots />
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            О нас
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Мы бесплатно помогаем за подписку на наши каналы. Наша команда предоставляет профессиональную поддержку всем участникам сообщества.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <Icon name="HelpCircle" className="text-purple-400" size={32} />
            Как получить помощь?
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg border border-purple-500/30">
                1
              </div>
              <div className="flex-1">
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Подпишитесь на 2 канала выше:{" "}
                  <a href="https://t.me/blackchildren" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline transition-colors">
                    @blackchildren
                  </a>{" "}
                  и на adapter -{" "}
                  <a href="https://t.me/perehodnikHarora" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline transition-colors">
                    @perehodnikHarora
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg border border-purple-500/30">
                2
              </div>
              <div className="flex-1">
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Сделайте скриншоты подписок
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg border border-purple-500/30">
                3
              </div>
              <div className="flex-1">
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Отправьте скриншоты{" "}
                  <a href="https://t.me/atackharoraa" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline transition-colors">
                    @atackharoraa
                  </a>{" "}
                  в Telegram
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 backdrop-blur-sm border-purple-500/30 p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <Icon name="BarChart3" className="text-purple-400" size={32} />
            Наша статистика
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-purple-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                40+
              </div>
              <div className="text-gray-300 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
                подписчиков
              </div>
            </div>

            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-purple-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                10+
              </div>
              <div className="text-gray-300 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
                человек под защитой
              </div>
            </div>

            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-purple-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                10+
              </div>
              <div className="text-gray-300 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
                роботов выполнено
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Icon name="Heart" className="text-purple-400 mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Поддержать проект
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Если вы хотите поддержать проект, отправьте подарок на юзернейм в Telegram
          </p>
          <a 
            href="https://t.me/atackharoraa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            <Icon name="Send" size={20} />
            @atackharoraa
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Index;
