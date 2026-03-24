import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NOMINATIONS = [
  {
    emoji: "🏅",
    badge: "НОМИНАЦИЯ 1",
    title: "Оператор года",
    subtitle: "Точность · Скорость · Бережливость",
    color: "#d97706",
    bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    accent: "#f59e0b",
    border: "#fcd34d",
    shadow: "rgba(245,158,11,0.2)",
    items: [
      "Паллета в верхний ярус без единого касания",
      "Манёвр в узком проезде между стеллажами",
      "Плавная работа без рывков, полный контроль",
    ],
  },
  {
    emoji: "⛑️",
    badge: "НОМИНАЦИЯ 2",
    title: "Предсменный ритуал",
    subtitle: "Техника, которая не подведёт",
    color: "#dc2626",
    bg: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    accent: "#ef4444",
    border: "#fca5a5",
    shadow: "rgba(239,68,68,0.2)",
    items: [
      "Осмотр: колёса, гидравлика, ремень, сигнал",
      "Проверка батареи, зеркал и маршрута",
      "Безопасная парковка по всем правилам",
    ],
  },
  {
    emoji: "🧠",
    badge: "НОМИНАЦИЯ 3",
    title: "Секрет долгой работы",
    subtitle: "Опыт, который спасает жизни",
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
    accent: "#8b5cf6",
    border: "#c4b5fd",
    shadow: "rgba(139,92,246,0.2)",
    items: [
      "Предвидеть ситуацию на дороге склада",
      "Ошибки новичков и как их избежать",
      "Когда лучше выйти из кабины и осмотреться",
    ],
  },
];

const STEPS = [
  { num: "1", icon: "Video", title: "Сними видео", desc: "До 2 минут. В спецодежде, с соблюдением всех правил ТБ", color: "#f59e0b", bg: "#fffbeb" },
  { num: "2", icon: "Send", title: "Отправь", desc: "В чат, на почту или передай HR-менеджеру до дедлайна", color: "#3b82f6", bg: "#eff6ff" },
  { num: "3", icon: "Trophy", title: "Получи приз", desc: "Ценный подарок, звание и место в библиотеке лучших практик", color: "#10b981", bg: "#ecfdf5" },
];

const RULES = [
  { icon: "ShieldCheck", text: "Обязательная спецодежда (СИЗ)", ok: true },
  { icon: "SeatbeltIcon", text: "Ремень безопасности пристёгнут", ok: true },
  { icon: "Volume2", text: "Звуковой сигнал при движении", ok: true },
  { icon: "Gauge", text: "Скорость в пределах нормы", ok: true },
  { icon: "X", text: "Езда без ремня → дисквалификация", ok: false },
  { icon: "X", text: "Отсутствие СИЗ → дисквалификация", ok: false },
];

const PRIZES = [
  { icon: "🥇", title: "1 место в номинации", desc: "Ценный подарок + почётное звание", color: "#d97706", bg: "#fffbeb", border: "#fcd34d" },
  { icon: "🏆", title: "Гран-при конкурса", desc: "«Мастер безопасности» — главная награда", color: "#7c3aed", bg: "#f5f3ff", border: "#c4b5fd" },
  { icon: "📚", title: "Библиотека практик", desc: "Лучшие видео войдут в золотой фонд склада", color: "#0369a1", bg: "#eff6ff", border: "#93c5fd" },
];

const STATS = [
  { value: "3", unit: "номинации", icon: "🏅", color: "#d97706" },
  { value: "2", unit: "минуты видео", icon: "🎬", color: "#ef4444" },
  { value: "100%", unit: "участников склада", icon: "👷", color: "#7c3aed" },
  { value: "Гран-при", unit: "Мастер безопасности", icon: "🏆", color: "#10b981" },
];

export default function Index() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ background: "#f8f9fc" }}>

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1e1b4b 0%, #312e81 30%, #1e3a5f 65%, #0c1a35 100%)" }}
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full blur-3xl opacity-30 animate-float"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/5 w-64 h-64 rounded-full blur-3xl opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "25s" }} />

        {/* Floating warehouse icons */}
        <div className="absolute top-16 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🏗️</div>
        <div className="absolute bottom-24 left-16 text-4xl opacity-20 animate-float" style={{ animationDelay: "3s" }}>📦</div>
        <div className="absolute top-32 left-24 text-3xl opacity-20 animate-float" style={{ animationDelay: "5s" }}>🚜</div>
        <div className="absolute bottom-32 right-28 text-4xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>⛑️</div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Alert badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-slide-up"
            style={{ background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.5)", animationDelay: "0.1s" }}
          >
            <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#f59e0b" }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#fcd34d" }}>
              🚨 Стартует конкурс!
            </span>
          </div>

          <h1
            className="font-oswald font-black leading-none mb-6 animate-slide-up"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", animationDelay: "0.25s" }}
          >
            <span className="block" style={{ color: "#fcd34d" }}>МАСТЕРСТВО</span>
            <span className="block text-white/40 text-4xl md:text-5xl font-light my-1">=</span>
            <span className="block text-white">ОПЫТ</span>
            <span className="block text-white/40 text-4xl md:text-5xl font-light my-1">+</span>
            <span className="block" style={{ color: "#86efac" }}>БЕЗОПАСНОСТЬ</span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-xl mx-auto animate-slide-up"
            style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, animationDelay: "0.45s" }}
          >
            Настоящий профессионал склада — тот, кто делает свою работу
            <strong style={{ color: "white" }}> безопасно, аккуратно и с умом</strong>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <button
              className="px-8 py-4 rounded-2xl font-bold text-lg transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", color: "#1e1b4b", boxShadow: "0 8px 32px rgba(245,158,11,0.4)" }}
            >
              <span className="flex items-center gap-2 justify-center">
                <Icon name="Video" size={20} />
                Участвовать!
              </span>
            </button>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-lg transition-transform hover:scale-105"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "white", backdropFilter: "blur(8px)" }}
            >
              <span className="flex items-center gap-2 justify-center">
                <Icon name="ChevronDown" size={20} />
                Узнать больше
              </span>
            </button>
          </div>

          {/* Stats strip */}
          <div
            className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden animate-slide-up"
            style={{ border: "1px solid rgba(255,255,255,0.12)", animationDelay: "0.75s" }}
          >
            {STATS.map((s, i) => (
              <div key={i} className="px-6 py-4 text-center" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(10px)" }}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-oswald font-bold text-xl text-white">{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{s.unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#f8f9fc" />
          </svg>
        </div>
      </section>

      {/* ─── КАК УЧАСТВОВАТЬ ─── */}
      <section className="py-24 relative" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "#fff7ed", color: "#ea580c", border: "1px solid #fed7aa" }}
            >
              🎥 Как участвовать
            </span>
            <h2 className="font-oswald font-bold text-gray-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Три простых шага
            </h2>
            <p className="mt-3 text-gray-500 max-w-md mx-auto">Всё просто — снимай, отправляй и жди победы!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div
              className="absolute top-14 left-1/6 right-1/6 h-px hidden md:block"
              style={{ background: "linear-gradient(90deg, #f59e0b, #3b82f6, #10b981)" }}
            />

            {STEPS.map((step, i) => (
              <div
                key={i}
                className="reveal text-center relative"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Number circle */}
                <div
                  className="w-28 h-28 rounded-full flex flex-col items-center justify-center mx-auto mb-5 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`, border: `3px solid ${step.color}`, position: "relative", zIndex: 1 }}
                >
                  <span className="font-oswald font-black text-4xl" style={{ color: step.color }}>{step.num}</span>
                </div>
                <div
                  className="p-6 rounded-2xl shadow-sm"
                  style={{ background: step.bg, border: `1px solid ${step.color}30` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: step.color + "20" }}
                  >
                    <Icon name={step.icon as "Video"} size={20} style={{ color: step.color }} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── НОМИНАЦИИ ─── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #eef2ff 0%, #f8f9fc 100%)" }}>
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "#fef3c7", color: "#b45309", border: "1px solid #fde68a" }}
            >
              🏆 Три номинации
            </span>
            <h2 className="font-oswald font-bold text-gray-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Выбирай свою!
            </h2>
            <p className="mt-3 text-gray-500 max-w-md mx-auto">Каждый найдёт себе номинацию по мастерству</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {NOMINATIONS.map((nom, i) => (
              <div
                key={i}
                className="reveal rounded-3xl overflow-hidden shadow-lg flex flex-col transition-transform hover:-translate-y-1 duration-300"
                style={{ background: "white", border: `2px solid ${nom.border}`, transitionDelay: `${i * 0.12}s`, boxShadow: `0 8px 40px ${nom.shadow}` }}
              >
                {/* Header */}
                <div
                  className="px-6 pt-8 pb-6"
                  style={{ background: nom.bg }}
                >
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4"
                    style={{ background: nom.color + "15", color: nom.color, border: `1px solid ${nom.border}` }}
                  >
                    {nom.badge}
                  </div>
                  <div className="text-6xl mb-3">{nom.emoji}</div>
                  <h3 className="font-oswald font-bold text-2xl mb-1" style={{ color: nom.color }}>
                    {nom.title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: nom.color + "99" }}>
                    {nom.subtitle}
                  </p>
                </div>

                {/* Items */}
                <div className="px-6 py-5 flex-1">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Покажи, как ты:</p>
                  <div className="space-y-3">
                    {nom.items.map((item, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: nom.color + "15", border: `1.5px solid ${nom.accent}` }}
                        >
                          <Icon name="Check" size={12} style={{ color: nom.accent }} />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer bar */}
                <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${nom.accent}, ${nom.border})` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ПРАВИЛА + ВИЗУАЛИЗАЦИЯ ─── */}
      <section className="py-24" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

            {/* Left: погрузчик visualizer */}
            <div className="reveal-left">
              <div
                className="rounded-3xl p-8 relative overflow-hidden shadow-xl"
                style={{ background: "linear-gradient(135deg, #1e1b4b, #312e81)" }}
              >
                {/* Scene */}
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-4 animate-float">🚜</div>
                  <div
                    className="text-sm font-semibold mb-6 px-3 py-1 rounded-full inline-block"
                    style={{ background: "rgba(134,239,172,0.2)", color: "#86efac", border: "1px solid rgba(134,239,172,0.4)" }}
                  >
                    ✅ Правильно — так и снимай!
                  </div>

                  {/* Checklist visual */}
                  <div className="grid grid-cols-2 gap-3 text-left">
                    {[
                      { icon: "🦺", label: "Спецодежда", ok: true },
                      { icon: "🔔", label: "Сигнал", ok: true },
                      { icon: "📹", label: "Видео до 2 мин", ok: true },
                      { icon: "🪪", label: "В рабочее время", ok: true },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-xs text-white/70 font-medium">{item.label}</span>
                        <span className="ml-auto text-green-400">✓</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-32 blur-2xl opacity-30"
                  style={{ background: "radial-gradient(ellipse at center, #f59e0b, transparent)" }} />
              </div>
            </div>

            {/* Right: rules */}
            <div className="reveal-right">
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}
              >
                ⚠️ Важные правила
              </span>
              <h2 className="font-oswald font-bold text-gray-900 mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
                Что обязательно,<br />а что — нет
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Видео с нарушениями ТБ <strong className="text-red-600">снимается с конкурса</strong>. Мы ищем не лихачей — а настоящих мастеров!
              </p>

              <div className="space-y-3">
                {RULES.map((rule, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: rule.ok ? "#f0fdf4" : "#fef2f2",
                      border: `1px solid ${rule.ok ? "#bbf7d0" : "#fecaca"}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: rule.ok ? "#dcfce7" : "#fee2e2" }}
                    >
                      <span style={{ fontSize: "1rem" }}>{rule.ok ? "✅" : "❌"}</span>
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: rule.ok ? "#15803d" : "#dc2626" }}
                    >
                      {rule.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПРИЗЫ ─── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #f8f9fc 100%)" }}>
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14 reveal">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}
            >
              🎁 Награды
            </span>
            <h2 className="font-oswald font-bold text-gray-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Что тебя ждёт
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRIZES.map((prize, i) => (
              <div
                key={i}
                className="reveal text-center p-8 rounded-3xl shadow-md transition-transform hover:-translate-y-1 duration-300"
                style={{ background: prize.bg, border: `2px solid ${prize.border}`, transitionDelay: `${i * 0.12}s` }}
              >
                <div className="text-6xl mb-4">{prize.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{prize.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: prize.color }}>{prize.desc}</p>
              </div>
            ))}
          </div>

          {/* Grand Prix highlight */}
          <div className="reveal mt-8 max-w-2xl mx-auto text-center">
            <div
              className="inline-block px-8 py-4 rounded-2xl shadow-lg"
              style={{ background: "linear-gradient(135deg, #1e1b4b, #312e81)", color: "white" }}
            >
              <span className="text-2xl mr-2">🌟</span>
              <span className="font-oswald font-bold text-xl">Гран-при «Мастер безопасности»</span>
              <span className="text-2xl ml-2">🌟</span>
              <p className="text-sm mt-1 text-white/60">Тому, кто объединит в видео опыт, мастерство и безопасность</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a5f 100%)" }}
      >
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 animate-spin-slow" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="reveal max-w-2xl mx-auto">
            <div className="flex justify-center gap-3 text-5xl mb-6">
              <span className="animate-float">🚀</span>
              <span className="animate-float" style={{ animationDelay: "0.5s" }}>👷</span>
              <span className="animate-float" style={{ animationDelay: "1s" }}>🏆</span>
            </div>

            <h2
              className="font-oswald font-black text-white mb-4"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", lineHeight: 1.1 }}
            >
              Стань примером<br />
              <span style={{ color: "#fcd34d" }}>для коллег!</span>
            </h2>

            <p className="text-white/60 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Твой опыт и мастерство — это ценность всего склада.
              Покажи это в коротком видео и войди в историю!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="px-10 py-5 rounded-2xl font-bold text-xl transition-transform hover:scale-105"
                style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", color: "#1e1b4b", boxShadow: "0 8px 40px rgba(245,158,11,0.5)" }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <Icon name="Video" size={22} />
                  Снять видео и участвовать
                </span>
              </button>
              <button
                className="px-10 py-5 rounded-2xl font-semibold text-lg transition-transform hover:scale-105"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "white" }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <Icon name="MessageCircle" size={20} />
                  По вопросам — к HR
                </span>
              </button>
            </div>

            <div
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)" }}
            >
              <Icon name="Clock" size={14} />
              Отправить видео до указанной даты · По всем вопросам — к HR
            </div>
          </div>
        </div>

        {/* Wave top */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" fill="#f8f9fc" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t" style={{ borderColor: "#e5e7eb", color: "#9ca3af", background: "#f8f9fc" }}>
        <p className="text-sm">Конкурс профессионального мастерства · «Мастерство = Опыт + Безопасность»</p>
      </footer>
    </div>
  );
}
