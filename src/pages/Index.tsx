import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 7 + Math.random() * 6,
  tx: (Math.random() - 0.5) * 160,
  size: 2 + Math.random() * 3,
  color: i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#ef4444" : "#fbbf24",
}));

const NOMINATIONS = [
  {
    emoji: "🏅",
    badge: "НОМИНАЦИЯ 1",
    title: "Оператор года",
    subtitle: "Точность, скорость, бережливость",
    color: "#f59e0b",
    border: "rgba(245,158,11,0.35)",
    glow: "rgba(245,158,11,0.12)",
    items: [
      "Ставишь паллету в верхний ярус без единого касания",
      "Маневрируешь в узком проезде между стеллажами",
      "Работаешь плавно, без рывков и с полным контролем",
    ],
  },
  {
    emoji: "⛑️",
    badge: "НОМИНАЦИЯ 2",
    title: "Мой предсменный ритуал",
    subtitle: "Техника, которая не подведёт",
    color: "#ef4444",
    border: "rgba(239,68,68,0.35)",
    glow: "rgba(239,68,68,0.12)",
    items: [
      "Осмотр погрузчика: колёса, гидравлика, ремень, сигнал",
      "Проверка батареи и зеркал",
      "Безопасная парковка: вилы на пол, ручник, ключ в кармане",
    ],
  },
  {
    emoji: "🧠",
    badge: "НОМИНАЦИЯ 3",
    title: "Секрет долгой работы",
    subtitle: "Как опыт делает вождение безопасным",
    color: "#a855f7",
    border: "rgba(168,85,247,0.35)",
    glow: "rgba(168,85,247,0.12)",
    items: [
      "Как предвидеть ситуацию на дороге склада",
      "Ошибки новичков и как их избежать",
      "Когда лучше выйти из кабины и посмотреть",
    ],
  },
];

const STEPS = [
  { num: "01", icon: "Video", title: "Сними видео", desc: "До 2 минут. Ты за работой — в спецодежде, с соблюдением всех правил ТБ" },
  { num: "02", icon: "Send", title: "Отправь", desc: "Отправь видео в чат, на почту или передай HR-менеджеру до указанной даты" },
  { num: "03", icon: "Trophy", title: "Получи приз", desc: "Победители получат ценные подарки, почётные звания и место в библиотеке лучших практик" },
];

const PRIZES = [
  { icon: "🥇", title: "1 место в каждой номинации", desc: "Ценный подарок + почётное звание" },
  { icon: "🏆", title: "Гран-при «Мастер безопасности»", desc: "Главная награда тому, кто объединит опыт, мастерство и безопасность" },
  { icon: "📚", title: "Библиотека лучших практик", desc: "Твоё видео станет примером для всего склада — с указанием автора" },
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
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ background: "#0a0a0f" }}>

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
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              ["--tx" as string]: `${p.tx}px`,
            }}
          />
        ))}
      </div>

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(245,158,11,0.12) 0%, rgba(239,68,68,0.06) 40%, transparent 70%), #0a0a0f",
        }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Rotating rings */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full border opacity-10 animate-spin-slow"
          style={{ borderColor: "#f59e0b" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full border animate-spin-slow"
          style={{ borderColor: "#ef4444", opacity: 0.08, animationDirection: "reverse", animationDuration: "14s" }}
        />

        {/* Glow orbs */}
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15 animate-float"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full blur-3xl opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, #ef4444, transparent)", animationDelay: "3s" }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 animate-slide-up"
            style={{
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.4)",
              animationDelay: "0.1s",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#f59e0b" }} />
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#f59e0b" }}>
              🚨 Стартует конкурс профессионального мастерства
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-oswald font-black mb-4 leading-none animate-slide-up"
            style={{ fontSize: "clamp(2.8rem, 9vw, 6.5rem)", animationDelay: "0.25s" }}
          >
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ef4444, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}
            >
              МАСТЕРСТВО
            </span>
            <span className="block text-white">=</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #a855f7, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite reverse",
              }}
            >
              ОПЫТ + БЕЗОПАСНОСТЬ
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-slide-up"
            style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, animationDelay: "0.45s" }}
          >
            Настоящий профессионал склада — тот, кто работает безопасно, аккуратно и с умом.
            <br />
            <strong style={{ color: "rgba(255,255,255,0.85)" }}>Покажи, как ты работаешь!</strong>
          </p>

          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl animate-slide-up"
            style={{
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.25)",
              animationDelay: "0.6s",
            }}
          >
            <Icon name="Users" size={20} style={{ color: "#f59e0b" }} />
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              Участвуют <strong className="text-white">все кладовщики склада</strong>
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
            <div className="w-px h-14" style={{ background: "linear-gradient(to bottom, #f59e0b, transparent)" }} />
            <Icon name="ChevronDown" size={16} style={{ color: "#f59e0b" }} />
          </div>
        </div>
      </section>

      {/* ─── КАК УЧАСТВОВАТЬ ─── */}
      <section className="py-20 relative" style={{ background: "rgba(245,158,11,0.04)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(245,158,11,0.12)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}
            >
              🎥 Как участвовать
            </span>
            <h2
              className="font-oswald font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Три простых шага
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="reveal text-center p-6 rounded-2xl"
                style={{
                  background: "rgba(13,13,20,0.8)",
                  border: "1px solid rgba(245,158,11,0.15)",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div
                  className="font-oswald font-black text-5xl mb-3"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {step.num}
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}
                >
                  <Icon name={step.icon as "Video"} size={22} style={{ color: "#f59e0b" }} />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── НОМИНАЦИИ ─── */}
      <section className="py-24 relative" style={{ background: "#0a0a0f" }}>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(239,68,68,0.12)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)" }}
            >
              🏆 Три номинации
            </span>
            <h2
              className="font-oswald font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Выбирай свою!
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {NOMINATIONS.map((nom, i) => (
              <div
                key={i}
                className="reveal rounded-2xl p-6 flex flex-col"
                style={{
                  background: "rgba(13,13,20,0.9)",
                  border: `1px solid ${nom.border}`,
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold tracking-widest uppercase mb-4 self-start"
                  style={{ background: nom.glow, color: nom.color, border: `1px solid ${nom.border}` }}
                >
                  {nom.badge}
                </div>

                <div className="text-5xl mb-4">{nom.emoji}</div>

                <h3
                  className="font-oswald font-bold text-2xl mb-1"
                  style={{ color: nom.color }}
                >
                  {nom.title}
                </h3>
                <p className="text-sm mb-5 font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {nom.subtitle}
                </p>

                <div className="space-y-3 flex-1">
                  {nom.items.map((item, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: nom.glow, border: `1px solid ${nom.border}` }}
                      >
                        <Icon name="Check" size={11} style={{ color: nom.color }} />
                      </div>
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ВАЖНО ─── */}
      <section
        className="py-16 relative"
        style={{ background: "rgba(239,68,68,0.05)", borderTop: "1px solid rgba(239,68,68,0.15)", borderBottom: "1px solid rgba(239,68,68,0.15)" }}
      >
        <div className="container mx-auto px-6">
          <div className="reveal max-w-3xl mx-auto">
            <div className="flex items-start gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.35)" }}
              >
                <Icon name="AlertTriangle" size={26} style={{ color: "#ef4444" }} />
              </div>
              <div>
                <h3 className="font-oswald font-bold text-2xl text-white mb-3">⚠️ Важно!</h3>
                <p className="leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Видео, в котором <strong className="text-white">нарушена техника безопасности</strong> — отсутствие СИЗ, езда без ремня, превышение скорости, работа без сигнала — <strong style={{ color: "#ef4444" }}>снимается с конкурса</strong>.
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(239,68,68,0.12)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                  <Icon name="Shield" size={16} />
                  Мы ищем не лихачей, а настоящих профессионалов!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПРИЗЫ ─── */}
      <section className="py-24 relative" style={{ background: "#0a0a0f" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(168,85,247,0.12)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              🎁 Призы
            </span>
            <h2
              className="font-oswald font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Что тебя ждёт
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRIZES.map((prize, i) => (
              <div
                key={i}
                className="reveal text-center p-7 rounded-2xl"
                style={{
                  background: "rgba(13,13,20,0.9)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div className="text-5xl mb-4">{prize.icon}</div>
                <h3 className="font-bold text-base text-white mb-2">{prize.title}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{prize.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 70%), #0a0a0f",
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="reveal max-w-2xl mx-auto">

            <div className="text-6xl mb-6">🚀</div>

            <h2
              className="font-oswald font-black mb-4"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
            >
              <span className="text-white">Стань примером</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                для коллег!
              </span>
            </h2>

            <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              Покажи, как опыт и безопасность делают тебя мастером своего дела.
              Твой опыт станет золотым фондом нашего склада.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                className="px-10 py-5 rounded-xl font-bold text-xl"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                  color: "#0a0a0f",
                  boxShadow: "0 0 40px rgba(245,158,11,0.35)",
                }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <Icon name="Video" size={22} />
                  Снять видео и участвовать
                </span>
              </button>
              <button
                className="px-10 py-5 rounded-xl font-semibold text-lg"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <Icon name="MessageCircle" size={20} />
                  По вопросам — к HR
                </span>
              </button>
            </div>

            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-sm"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
            >
              <Icon name="Clock" size={15} />
              Отправить видео до указанной даты · До встречи на конкурсе!
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-7 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.2)" }}
      >
        <p className="text-sm">Конкурс профессионального мастерства · «Мастерство = Опыт + Безопасность»</p>
      </footer>
    </div>
  );
}
