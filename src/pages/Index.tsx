import { useState } from "react";
import { Phone, MessageCircle, Send, Heart, ChevronDown, ExternalLink, Copy, Check } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ПЕРСОНАЛЬНЫЙ САЙТ-ВИЗИТКА                                ║
 * ║  Все редактируемые данные — ниже в константе PROFILE.     ║
 * ║  Чтобы заменить фото: положите файл в src/assets/         ║
 * ║  и измените импорт portrait в начале файла.               ║
 * ╚══════════════════════════════════════════════════════════╝
 */

// ─── РЕДАКТИРУЕМЫЕ ДАННЫЕ ──────────────────────────────────
const PROFILE = {
  name: "Александр В. Люцко",
  quote: "Путь в тысячи километров начинается с первого шага",
  quoteAuthor: "Лао-цзы",
  story: [
    "Моя профессиональная история начиналась в сфере строительства и реставрации.",
    "В 2021 году жизнь изменилась, открыв путь к новой профессии.",
    "Графический дизайн позволяет находить визуальные решения для задач разного уровня сложности.",
    "Я работаю в разных направлениях. Опыт в строительстве научил меня вниманию к деталям и умению доводить работу до конечного результата.",
    "Эти качества я перенёс в дизайн. Я открыт к новым задачам и продолжаю развиваться в выбранном направлении.",
  ],
  services: [
    "реставрация фотографий и их анимация",
    "монтаж видеоматериалов",
    "разработка и анимация логотипа",
    "создание рекламных роликов",
  ],
  portfolioUrl: "https://t.me/obychnye_lyudi_by",
  portfolioLabel: "t.me/obychnye_lyudi_by",
  contacts: {
    phone: "+375 (29) 532-09-07",
    phoneRaw: "+375295320907",
    viber: "viber://chat?number=%2B375295320907",
    telegram: "https://t.me/dedbabai_5320907",
    telegramLabel: "t.me/dedbabai_5320907",
  },
  donate: "+375 29 5320907  \"СБЕРБАНК\" (БЕЛАРУСЬ)",
};
// ───────────────────────────────────────────────────────────

const Index = () => {
  const [showDonate, setShowDonate] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.donate);
      setCopied(true);
      toast.success("Номер скопирован в буфер обмена");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Не удалось скопировать номер");
    }
  };

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen w-full px-4 py-8 sm:px-8 sm:py-12 md:px-12 lg:px-16 lg:py-16 outline-none"
    >
      <div className="mx-auto w-full max-w-7xl">
        <article className="glass-panel rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 animate-fade-in">
          {/* ── HEADER GRID ─────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-16">
            {/* LEFT COLUMN */}
            <header className="flex flex-col gap-8 animate-fade-up">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.05] font-bold tracking-tight uppercase text-foreground">
                {PROFILE.name}
              </h1>

              <div className="group relative overflow-hidden rounded-2xl border border-hairline shadow-[var(--shadow-elegant)]">
                <img
                  src={portrait}
                  alt={`Портрет — ${PROFILE.name}`}
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
              </div>
            </header>

            {/* RIGHT COLUMN */}
            <section className="flex flex-col gap-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              {/* Quote */}
              <blockquote className="border-l-2 border-accent-glow/60 pl-5 italic">
                <p className="font-display text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/90">
                  «{PROFILE.quote}»
                </p>
                <cite className="mt-2 block text-sm not-italic text-muted-foreground">
                  ({PROFILE.quoteAuthor})
                </cite>
              </blockquote>

              {/* МОЯ ИСТОРИЯ */}
              <Section title="Моя история">
                <div className="space-y-3 text-[15px] leading-relaxed text-foreground/85">
                  {PROFILE.story.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Section>

              {/* ЧЕМ Я ЗАНИМАЮСЬ */}
              <Section title="Чем я занимаюсь">
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {PROFILE.services.map((s) => (
                    <li
                      key={s}
                      className="group flex items-start gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-surface-elevated/60"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-glow transition-transform duration-300 group-hover:scale-150" />
                      <span className="text-[15px] text-foreground/85 group-hover:text-foreground transition-colors">{s}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* ПОРТФОЛИО */}
              <Section title="Портфолио">
                <a
                  href={PROFILE.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Портфолио — откроется в новой вкладке"
                  className="group inline-flex items-center gap-2 link-underline text-[15px] text-foreground/90"
                >
                  {PROFILE.portfolioLabel}
                  <ExternalLink
                    aria-hidden="true"
                    className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Section>
            </section>
          </div>

          {/* ── FOOTER ──────────────────────────────────── */}
          <div className="mt-14 border-t border-hairline pt-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {/* СВЯЗАТЬСЯ СО МНОЙ */}
              <div>
                <SectionTitle>Связаться со мной</SectionTitle>
                <ul className="mt-5 space-y-3">
                  <ContactRow
                    icon={<Phone aria-hidden="true" className="h-4 w-4" />}
                    href={`tel:${PROFILE.contacts.phoneRaw}`}
                    label={PROFILE.contacts.phone}
                    ariaLabel="Позвонить"
                  />
                  <ContactRow
                    icon={<MessageCircle aria-hidden="true" className="h-4 w-4" />}
                    href={PROFILE.contacts.viber}
                    label={PROFILE.contacts.phone}
                    sub="Viber"
                    ariaLabel="Написать в Viber"
                  />
                  <ContactRow
                    icon={<Send aria-hidden="true" className="h-4 w-4" />}
                    href={PROFILE.contacts.telegram}
                    label={PROFILE.contacts.telegramLabel}
                    sub="Telegram"
                    external
                    ariaLabel="Telegram — откроется в новой вкладке"
                  />
                </ul>
              </div>

              {/* ПОМОЩЬ ПРОЕКТУ */}
              <div>
                <SectionTitle>Помощь проекту</SectionTitle>
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setShowDonate((s) => !s)}
                    aria-expanded={showDonate}
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
                  >
                    <Heart
                      aria-hidden="true"
                      className="h-4 w-4 text-accent-glow transition-transform duration-300 group-hover:scale-110"
                    />
                    Поддержать проект
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 opacity-70 transition-transform duration-300 ${showDonate ? "rotate-180" : ""}`}
                    />
                  </button>

                  {showDonate && (
                    <div className="animate-slide-down mt-4 overflow-hidden rounded-xl border border-hairline bg-surface-elevated/60 px-5 py-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">Номер для перевода</p>
                          <a
                            href={`tel:${PROFILE.contacts.phoneRaw}`}
                            className="mt-1 block font-display text-xl font-semibold tracking-wide text-foreground link-underline"
                          >
                            {PROFILE.donate}
                          </a>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              onClick={handleCopy}
                              aria-label={copied ? "Скопировано" : "Копировать номер для перевода"}
                              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface text-muted-foreground transition-all duration-300 hover:border-accent-glow/60 hover:text-accent-glow hover:shadow-[0_0_15px_hsl(var(--accent-glow)/0.2)]"
                            >
                              {copied ? (
                                <Check aria-hidden="true" className="h-4 w-4" />
                              ) : (
                                <Copy aria-hidden="true" className="h-4 w-4" />
                              )}
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{copied ? "Скопировано" : "Копировать"}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        <footer className="mt-8 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </div>
    </main>
  );
};

// ─── ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ────────────────────────────
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
    {children}
  </h2>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    <div className="mt-4">{children}</div>
  </div>
);

const ContactRow = ({
  icon,
  href,
  label,
  sub,
  external,
  ariaLabel,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
  sub?: string;
  external?: boolean;
  ariaLabel?: string;
}) => (
  <li>
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-3 rounded-lg px-2 py-1.5 -mx-2 transition-all duration-300 hover:bg-surface-elevated/60"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-muted-foreground transition-all duration-300 group-hover:border-accent-glow/60 group-hover:text-accent-glow">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[15px] text-foreground/90 transition-colors group-hover:text-foreground">
          {label}
        </span>
        {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
      </span>
    </a>
  </li>
);

export default Index;
