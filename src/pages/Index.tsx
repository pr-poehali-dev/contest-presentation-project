import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
  tx: (Math.random() - 0.5) * 200,
  size: 2 + Math.random() * 4,
  color: i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#00ff88" : "#a855f7",
}));

const ADVANTAGES = [
  {
    icon: "Brain",
    title: "Адаптивное обучение",
    desc: "ИИ подстраивает программу под каждого ученика в реальном времени",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "rgba(0,212,255,0.3)",
  },
  {
    icon: "Gamepad2",
    title: "Геймификация",
    desc: "Система достижений и наград превращает обучение в захватывающую игру",
    color: "from-purple-500/20 to-pink-500/20",
    border: "rgba(168,85,247,0.3)",
  },
  {
    icon: "Users",
    title: "Командная работа",
    desc: "Коллаборативные проекты развивают навыки 21 века с первых дней",
    color: "from-green-500/20 to-teal-500/20",
    border: "rgba(0,255,136,0.3)",
  },
  {
    icon: "BarChart3",
    title: "Аналитика роста",
    desc: "Прозрачные метрики прогресса для учеников, учителей и родителей",
    color: "from-orange-500/20 to-yellow-500/20",
    border: "rgba(251,146,60,0.3)",
  },
  {
    icon: "Globe",
    title: "Глобальный доступ",
    desc: "Обучение без границ — онлайн и офлайн форматы для любой точки мира",
    color: "from-cyan-500/20 to-purple-500/20",
    border: "rgba(0,212,255,0.3)",
  },
  {
    icon: "Zap",
    title: "Результат в 3× быстрее",
    desc: "Доказанная методика ускоряет усвоение знаний в три раза относительно классических подходов",
    color: "from-yellow-500/20 to-orange-500/20",
    border: "rgba(234,179,8,0.3)",
  },
];

const STATS = [
  { value: "10K+", label: "Учеников", icon: "GraduationCap" },
  { value: "3×", label: "Быстрее результат", icon: "TrendingUp" },
  { value: "97%", label: "Довольны курсом", icon: "Star" },
  { value: "50+", label: "Экспертов", icon: "Award" },
];

const UNIQUE = [
  {
    num: "01",
    title: "Нейро-ориентированный подход",
    desc: "Программа создана с учётом последних исследований в нейронауках — мозг запоминает информацию эффективнее через мультисенсорный опыт.",
  },
  {
    num: "02",
    title: "Живые проекты с первого дня",
    desc: "Никаких абстрактных задач — с первого занятия ученики работают над реальными проектами с ощутимым результатом.",
  },
  {
    num: "03",
    title: "Наставник + ИИ-ассистент",
    desc: "Каждый ученик получает опытного ментора и персонального ИИ-помощника, доступного 24/7 для ответов на вопросы.",
  },
];

export default function Index() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ background: "var(--deep-bg)" }}>
      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              ["--tx" as string]: `${p.tx}px`,
            }}
          />
        ))}
      </div>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-float"
          style={{ background: "radial-gradient(circle, #a855f7, transparent)", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, #00ff88, transparent)", animationDelay: "4s" }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full border opacity-5 animate-spin-slow"
          style={{ borderColor: "#00d4ff" }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full border opacity-5 animate-spin-slow"
          style={{ borderColor: "#a855f7", animationDirection: "reverse", animationDuration: "15s" }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-slide-up"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              animationDelay: "0.2s",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm font-medium" style={{ color: "#00d4ff" }}>
              Конкурс инновационных образовательных проектов 2026
            </span>
          </div>

          <h1
            className="font-oswald font-bold mb-6 leading-none animate-slide-up"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", animationDelay: "0.4s" }}
          >
            <span className="block text-white">ОБРАЗОВАНИЕ</span>
            <span className="block gradient-text">БУДУЩЕГО</span>
            <span className="block text-white" style={{ fontSize: "0.5em", fontWeight: 300, opacity: 0.7 }}>
              уже сегодня
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-slide-up"
            style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, animationDelay: "0.6s" }}
          >
            Революционная методика, которая объединяет нейронауки, ИИ и геймификацию
            для достижения результата в три раза быстрее
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <button
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden animate-pulse-glow"
              style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)", color: "#070b1a" }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Icon name="Rocket" size={20} />
                Узнать подробнее
              </span>
            </button>
            <button
              className="px-8 py-4 rounded-xl font-semibold text-lg"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,212,255,0.4)",
                color: "#00d4ff",
              }}
            >
              <span className="flex items-center gap-2 justify-center">
                <Icon name="Play" size={20} />
                Смотреть презентацию
              </span>
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-xs tracking-widest uppercase" style={{ color: "#00d4ff" }}>
              Скролл
            </span>
            <div
              className="w-px h-16"
              style={{ background: "linear-gradient(to bottom, #00d4ff, transparent)" }}
            />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 relative" style={{ background: "rgba(0,212,255,0.03)" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="reveal glass-card p-6 text-center group cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(0,212,255,0.15)" }}
                >
                  <Icon name={stat.icon as "Star"} size={22} style={{ color: "#00d4ff" }} />
                </div>
                <div
                  className="font-oswald font-bold mb-1"
                  style={{ fontSize: "2.5rem", color: "#00d4ff" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-24 relative overflow-hidden grid-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{ background: "rgba(0,255,136,0.1)", color: "#00ff88", border: "1px solid rgba(0,255,136,0.3)" }}
              >
                Наше решение
              </span>
              <h2
                className="font-oswald font-bold mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
              >
                <span className="text-white">Методика</span>
                <br />
                <span style={{ color: "#00ff88", textShadow: "0 0 10px rgba(0,255,136,0.8)" }}>EduFlow™</span>
              </h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                EduFlow™ — это не просто курс. Это живая образовательная экосистема, которая
                адаптируется к каждому ученику, отслеживает прогресс и автоматически
                подбирает оптимальный темп и формат подачи материала.
              </p>
              <div className="space-y-4">
                {["Персонализированный путь обучения", "Мгновенная обратная связь", "Проектная работа в командах"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,255,136,0.2)", border: "1px solid rgba(0,255,136,0.4)" }}
                    >
                      <Icon name="Check" size={12} style={{ color: "#00ff88" }} />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.75)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div
                className="relative p-8 rounded-2xl"
                style={{ background: "rgba(13,18,37,0.8)", border: "1px solid rgba(0,212,255,0.15)" }}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center animate-pulse-glow"
                    style={{ background: "rgba(0,212,255,0.1)", border: "2px solid #00d4ff" }}
                  >
                    <span className="text-3xl">🧠</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "🎯", label: "Диагностика", color: "#00d4ff" },
                    { icon: "📚", label: "Контент", color: "#a855f7" },
                    { icon: "🏆", label: "Результат", color: "#00ff88" },
                    { icon: "🔄", label: "Адаптация", color: "#00d4ff" },
                    { icon: "👥", label: "Команда", color: "#f59e0b" },
                    { icon: "📊", label: "Аналитика", color: "#a855f7" },
                  ].map((node, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${node.color}50` }}
                    >
                      <span className="text-2xl">{node.icon}</span>
                      <span className="text-xs text-center font-medium" style={{ color: node.color }}>
                        {node.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section className="py-24 relative" style={{ background: "var(--deep-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(168,85,247,0.1)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              Преимущества
            </span>
            <h2
              className="font-oswald font-bold"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white" }}
            >
              Почему выбирают{" "}
              <span className="gradient-text">EduFlow™</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={i}
                className="reveal glass-card p-6 group cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${adv.color} group-hover:scale-110 transition-transform`}
                  style={{ border: `1px solid ${adv.border}` }}
                >
                  <Icon name={adv.icon as "Brain"} size={24} style={{ color: adv.border.replace("0.3", "1").replace("rgba(", "").replace(")", "").split(",").slice(0, 3).join(",") }} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{adv.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UNIQUE ─── */}
      <section className="py-24 relative grid-bg overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.3)" }}
            >
              Уникальные особенности
            </span>
            <h2
              className="font-oswald font-bold"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white" }}
            >
              Что делает нас{" "}
              <span style={{ color: "#00d4ff", textShadow: "0 0 10px rgba(0,212,255,0.8)" }}>уникальными</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {UNIQUE.map((item, i) => (
              <div
                key={i}
                className="reveal flex gap-6 items-start p-6 rounded-2xl"
                style={{
                  background: "rgba(13,18,37,0.6)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div
                  className="font-oswald font-bold text-4xl flex-shrink-0 w-16 text-right"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-white">{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "var(--deep-bg)" }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.08), transparent)",
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="reveal max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.3)",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00ff88" }} />
              <span className="text-sm font-medium" style={{ color: "#00ff88" }}>
                Присоединяйтесь к движению
              </span>
            </div>

            <h2
              className="font-oswald font-bold mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.05 }}
            >
              <span className="text-white">Готовы изменить</span>
              <br />
              <span className="gradient-text">образование?</span>
            </h2>

            <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              Станьте частью образовательной революции. Запишитесь на пилотную программу
              и получите бесплатный доступ на первые 30 дней.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                className="px-10 py-5 rounded-xl font-bold text-xl"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #00ff88)",
                  color: "#070b1a",
                  boxShadow: "0 0 40px rgba(0,212,255,0.4)",
                }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <Icon name="Rocket" size={22} />
                  Начать бесплатно
                </span>
              </button>
              <button
                className="px-10 py-5 rounded-xl font-semibold text-xl"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <Icon name="Calendar" size={22} />
                  Записаться на демо
                </span>
              </button>
            </div>

            <div
              className="inline-flex flex-wrap gap-6 items-center justify-center px-8 py-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2">
                <Icon name="User" size={16} style={{ color: "#00d4ff" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Авторы проекта:</span>
              </div>
              <span className="text-sm font-medium text-white">Команда EduFlow™</span>
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff" }}
              >
                2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.25)" }}
      >
        <p className="text-sm">EduFlow™ — Образование будущего · Конкурс инновационных проектов 2026</p>
      </footer>
    </div>
  );
}
