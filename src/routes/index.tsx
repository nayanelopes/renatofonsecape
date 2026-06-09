import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logoAsset from "@/assets/logo-renato.jpg.asset.json";
import renatoPhotoAsset from "@/assets/renato-foto.png.asset.json";
import {
  MessageCircle,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  Music2,
  MapPin,
  Calendar,
  ChevronRight,
  Flame,
  ShieldCheck,
  Landmark,
  Drum,
  Sprout,
  Users,
  HandHeart,
  HomeIcon,
  Brain,
  GraduationCap,
  Quote,
  ArrowRight,
  ArrowUpRight,
  Megaphone,
  Palette,
  Crown,
  BookOpen,
  CheckCircle2,
  Navigation,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renato Fonseca | Cultura, Dignidade e Liberdade Religiosa" },
      {
        name: "description",
        content:
          "Conheça a trajetória de Renato Fonseca, fundador da Macumba Ordinária, defensor dos povos tradicionais e pré-candidato a deputado federal por Pernambuco.",
      },
      { property: "og:title", content: "Renato Fonseca | Cultura, Dignidade e Liberdade Religiosa" },
      {
        property: "og:description",
        content:
          "Da rua à luta por cultura, dignidade e liberdade religiosa em Pernambuco. Faça parte da caminhada.",
      },
      { property: "og:image", content: renatoPhotoAsset.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: renatoPhotoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Renato Fonseca",
          jobTitle: "Pré-candidato a Deputado Federal",
          description:
            "Juremeiro há 22 anos, fundador da Macumba Ordinária, defensor dos povos tradicionais, da cultura popular e da liberdade religiosa em Pernambuco.",
          image: renatoPhotoAsset.url,
          address: { "@type": "PostalAddress", addressRegion: "PE", addressCountry: "BR" },
        }),
      },
    ],
  }),
  component: Index,
});

const logoImage = logoAsset.url;
const heroImage = renatoPhotoAsset.url;

const WHATSAPP_NUMBER = "558195834294";
const WHATSAPP_MSG = encodeURIComponent("Olá, Renato. Quero fazer parte da caminhada.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const INSTAGRAM_URL = "https://instagram.com/renatofonsecape";
const FACEBOOK_URL = "https://facebook.com/renatofonsecape";
const YOUTUBE_URL = "https://youtube.com/@renatofonsecape";
const TIKTOK_URL = "https://tiktok.com/@renatofonsecape";
const VAQUINHA_URL = "https://queroapoiar.com.br/renato-fonseca";

const NAV_LINKS = [
  { label: "Por que Renato", href: "#porque" },
  { label: "Quem é", href: "#quem" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Macumba Ordinária", href: "#macumba" },
  { label: "Bandeiras", href: "#bandeiras" },
  { label: "Propostas", href: "#propostas" },
  { label: "Resultados", href: "#resultados" },
  { label: "Agenda", href: "#agenda" },
  { label: "Faça Parte", href: "#participe" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster richColors position="top-center" />
      <Header />
      <Hero />
      <PorQueRenato />
      <Story />
      <Timeline />
      <MacumbaOrdinaria />
      <Bandeiras />
      <Propostas />
      <Resultados />
      <Agenda />
      <Galeria />
      <Depoimentos />
      <MapaPE />
      <FacaParte />
      <RedesSociais />
      <Apoio />
      <Footer />
      <FixedWhatsApp />
    </div>
  );
}

/* ============ Header ============ */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoImage} alt="Renato Fonseca" className="h-12 w-auto sm:h-14" />
        </a>
        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-foreground/75 transition-colors hover:text-[var(--brand-green-deep)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#participe"
            className="rounded-full bg-[var(--brand-green-deep)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Fazer Parte
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="rounded-md border border-border px-3 py-2 text-sm xl:hidden"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#participe"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--brand-green-deep)] px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground"
            >
              Fazer Parte
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============ Hero ============ */
const HERO_STATS = [
  { n: "500 mil+", l: "Pessoas alcançadas" },
  { n: "100+", l: "Eventos realizados" },
  { n: "80+", l: "Comunidades visitadas" },
  { n: "22 anos", l: "De caminhada na Jurema Sagrada" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--brand-green-soft),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.92_0.05_55),transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-brown)]/40 bg-[var(--brand-cream)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-brown-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
            Pré-candidato · Pernambuco
          </span>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-[var(--brand-green-deep)] sm:text-6xl lg:text-7xl">
            RENATO<br />FONSECA
          </h1>
          <p className="mt-5 text-xl font-semibold leading-snug text-[var(--brand-brown-deep)] sm:text-2xl">
            Da rua à luta por cultura, dignidade e liberdade religiosa em Pernambuco.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Ex-morador de rua, juremeiro há 22 anos, fundador da{" "}
            <strong>Macumba Ordinária</strong> e defensor dos povos tradicionais, da cultura popular
            e da liberdade religiosa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#participe"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green-deep)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Heart className="h-4 w-4" /> Fazer Parte da Caminhada
            </a>
            <a
              href="#quem"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-green-deep)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--brand-green-deep)] transition-colors hover:bg-[var(--brand-green-deep)] hover:text-primary-foreground"
            >
              Conheça Minha História <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-brown)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Entrar no WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--brand-green-deep)]/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[var(--brand-brown)]/40 shadow-2xl">
            <img
              src={heroImage}
              alt="Renato Fonseca"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-[var(--brand-green-deep)] px-4 py-3 text-primary-foreground shadow-xl sm:-bottom-6 sm:-left-6">
            <p className="font-serif text-xl font-bold leading-none sm:text-2xl">22 anos</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">
              na Jurema Sagrada
            </p>
          </div>
        </div>
      </div>
      {/* Números da caminhada */}
      <div className="border-t border-border bg-[var(--brand-cream)]/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-[var(--brand-brown)]/15 lg:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.l} className="bg-[var(--brand-cream)]/60 px-5 py-6 text-center">
              <p className="font-serif text-3xl font-bold leading-none text-[var(--brand-green-deep)] sm:text-4xl">
                {s.n}
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  intro,
  light,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.28em] ${
          light ? "text-[var(--brand-green-soft)]" : "text-[var(--brand-brown-deep)]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl ${
          light ? "text-primary-foreground" : "text-[var(--brand-green-deep)]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-primary-foreground/85" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ============ Por que Renato ============ */
const PORQUE = [
  {
    icon: HandHeart,
    title: "História Real",
    text: "Viveu em abrigos e em situação de rua. Conhece a exclusão por dentro.",
  },
  {
    icon: Flame,
    title: "Cultura",
    text: "Criador da Macumba Ordinária e do Espaço Cultural Macumba Ordinária.",
  },
  {
    icon: MapPin,
    title: "Território",
    text: "Presença viva em terreiros, comunidades e movimentos populares.",
  },
  {
    icon: ShieldCheck,
    title: "Experiência",
    text: "22 anos atuando junto aos povos tradicionais e à cultura popular.",
  },
];

function PorQueRenato() {
  return (
    <section id="porque" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Por que Renato?"
          title="Quatro razões para caminhar junto"
          intro="Trajetória, cultura, território e experiência — construídos no chão da realidade."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PORQUE.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-lg"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-green-soft)] text-[var(--brand-green-deep)] transition-colors group-hover:bg-[var(--brand-green-deep)] group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-[var(--brand-green-deep)]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Story ============ */
function Story() {
  return (
    <section id="quem" className="border-y border-border bg-[var(--brand-cream)]/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Quem é Renato Fonseca" title="Uma história real de transformação" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
            <p>
              <strong>Renato Fonseca conhece a exclusão porque viveu ela na própria pele.</strong>
            </p>
            <p>
              Passou parte da adolescência em abrigos e viveu em situação de rua. Enfrentou a
              dependência química e reconstruiu sua vida através da fé, da cultura e do trabalho
              comunitário.
            </p>
            <p>
              Há 22 anos na Jurema Sagrada, tombado ao{" "}
              <strong>Mestre Manoel Quebra Pedra</strong>, atua na defesa dos povos tradicionais, da
              cultura popular e da liberdade religiosa.
            </p>
            <p>
              Criou a <strong>Macumba Ordinária</strong>, um dos principais movimentos
              independentes de valorização das religiões de matriz africana em Pernambuco, e fundou
              o <strong>Espaço Cultural Macumba Ordinária</strong>, no Recife.
            </p>
            <p>
              Hoje transforma sua trajetória em uma caminhada coletiva por mais dignidade, cultura
              e oportunidades.
            </p>
          </div>
          <blockquote className="relative rounded-3xl border-l-4 border-[var(--brand-brown)] bg-card p-8 shadow-md">
            <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-[var(--brand-green-deep)] p-2 text-[var(--brand-green-soft)]" />
            <p className="font-serif text-xl italic leading-relaxed text-[var(--brand-green-deep)] sm:text-2xl">
              "Conheço a dor da exclusão porque vivi ela. Conheço a força da fé porque ela me
              levantou. Conheço a importância da cultura porque ela salvou minha vida. Agora quero
              transformar essa experiência em políticas públicas para Pernambuco."
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[var(--brand-brown-deep)]">
              — Renato Fonseca
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ============ Timeline ============ */
const TIMELINE = [
  { title: "Vida em abrigos", text: "Adolescência marcada pela vulnerabilidade e pelo acolhimento institucional." },
  { title: "Situação de rua", text: "Anos de sobrevivência, exclusão e aprendizado de quem viu a cidade pelo avesso." },
  { title: "Superação da dependência química", text: "Reconstrução pessoal pela fé, pela cultura e pelos vínculos comunitários." },
  { title: "Início da caminhada na Jurema Sagrada", text: "Pertencimento, ancestralidade e responsabilidade espiritual." },
  { title: "Defesa dos povos tradicionais", text: "Articulação com terreiros, mestres e comunidades de matriz africana e indígena." },
  { title: "Criação da Macumba Ordinária", text: "Movimento cultural independente de valorização das religiões de matriz africana." },
  { title: "Fundação do Espaço Cultural", text: "Casa de encontro, formação e celebração no coração do Recife." },
  { title: "Construção da pré-candidatura", text: "Entrada na vida pública para transformar trajetória em política pública." },
];

function Timeline() {
  return (
    <section id="trajetoria" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Linha do Tempo"
          title="A caminhada até aqui"
          intro="Marcos de uma trajetória de superação, fé e compromisso."
        />
        <ol className="relative space-y-8 border-l-2 border-[var(--brand-brown)]/30 pl-8 md:pl-12">
          {TIMELINE.map((m, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-green-deep)] text-xs font-bold text-primary-foreground shadow md:-left-[54px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="font-serif text-xl font-bold text-[var(--brand-green-deep)] sm:text-2xl">
                  {m.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ Macumba Ordinária ============ */
function MacumbaOrdinaria() {
  const stats = [
    { n: "500 mil+", l: "Alcance digital" },
    { n: "100+", l: "Eventos realizados" },
    { n: "30+", l: "Projetos culturais" },
    { n: "80+", l: "Comunidades atendidas" },
  ];
  const pilares = [
    "Combate ao racismo religioso",
    "Defesa da liberdade religiosa",
    "Promoção do Orgulho de Axé",
    "Valorização dos povos tradicionais",
    "Produção cultural independente",
    "Formação comunitária",
    "Preservação da memória dos terreiros",
    "Fortalecimento da identidade afro-indígena",
  ];
  return (
    <section
      id="macumba"
      className="relative overflow-hidden border-y border-border bg-[var(--brand-green-deep)] py-20 text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.45_0.1_150),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.4_0.08_55),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          light
          eyebrow="O Movimento"
          title="Macumba Ordinária"
          intro="Movimento cultural independente de resistência, valorização e defesa das religiões de matriz africana."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {pilares.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur"
              >
                <Flame className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-green-soft)]" />
                <span className="text-sm font-medium leading-snug">{p}</span>
              </li>
            ))}
          </ul>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">
              Nossos impactos
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur"
                >
                  <p className="font-serif text-4xl font-bold leading-none sm:text-5xl">{s.n}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">
                    {s.l}
                  </p>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm leading-relaxed text-primary-foreground/85">
                  O <strong>Espaço Cultural Macumba Ordinária</strong>, no Pátio do Terço (Recife),
                  é casa de encontro, formação, celebração e defesa do povo de terreiro.
                </p>
              </div>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-green-soft)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--brand-green-deep)] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Conhecer o Movimento <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Bandeiras ============ */
const BANDEIRAS = [
  {
    icon: ShieldCheck,
    title: "Regularização de Terreiros",
    text: "Formalização através de CNPJ e acesso a direitos.",
    detail:
      "Mutirões de regularização, orientação jurídica gratuita e acesso a editais e políticas públicas para casas de matriz africana e indígena.",
  },
  {
    icon: Flame,
    title: "Combate ao Racismo Religioso",
    text: "Proteção jurídica e institucional para o povo de terreiro.",
    detail:
      "Rede de proteção, denúncia qualificada, formação de agentes públicos e políticas de enfrentamento ao racismo religioso.",
  },
  {
    icon: Landmark,
    title: "Patrimônio Cultural",
    text: "Mapeamento e tombamento dos terreiros e mestres históricos.",
    detail:
      "Inventário cultural, registro de memória e proteção patrimonial das casas mais antigas e dos guardiões da tradição.",
  },
  {
    icon: Drum,
    title: "Cultura Popular",
    text: "Fortalecimento dos grupos culturais pernambucanos.",
    detail:
      "Fundo estadual de incentivo, editais simplificados, formação cultural e circulação para mestres e grupos populares.",
  },
  {
    icon: Sprout,
    title: "Economia Criativa",
    text: "Geração de renda através da cultura e da fé.",
    detail:
      "Apoio a produtores, artesãos, artistas e empreendedores culturais com crédito, formação e acesso a mercados.",
  },
  {
    icon: Users,
    title: "Povos Tradicionais",
    text: "Reconhecimento, proteção e visibilidade.",
    detail:
      "Mapeamento dos povos e comunidades tradicionais, proteção institucional e políticas afirmativas específicas.",
  },
  {
    icon: Crown,
    title: "Mulheres de Terreiro",
    text: "Visibilidade, proteção e protagonismo.",
    detail:
      "Programas de apoio a mães e ialorixás, enfrentamento à violência e fortalecimento da liderança feminina nas comunidades.",
  },
  {
    icon: BookOpen,
    title: "Mestres da Cultura Popular",
    text: "Reconhecimento e amparo aos guardiões da tradição.",
    detail:
      "Bolsa-mestre, registro vivo, transmissão de saberes e proteção previdenciária para mestres e mestras.",
  },
  {
    icon: HandHeart,
    title: "Projetos Sociais",
    text: "Fortalecimento das comunidades de base.",
    detail:
      "Apoio direto a iniciativas comunitárias de cultura, esporte, educação e cuidado nas periferias.",
  },
  {
    icon: HomeIcon,
    title: "População em Situação de Rua",
    text: "Acolhimento e reinserção com dignidade.",
    detail:
      "Política integrada de acolhimento, saúde, trabalho e cultura para quem vive nas ruas — feita com quem conhece a rua.",
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    text: "Cuidado em rede e atenção comunitária.",
    detail:
      "Fortalecimento dos CAPS, redução de danos, cuidado comunitário e enfrentamento ao sofrimento psíquico nas periferias.",
  },
  {
    icon: GraduationCap,
    title: "Juventude",
    text: "Oportunidades, cultura e educação.",
    detail:
      "Programas de primeiro emprego cultural, cursos técnicos, esporte e proteção da juventude negra e periférica.",
  },
];

function Bandeiras() {
  return (
    <section id="bandeiras" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Nossas Bandeiras"
          title="As lutas que carregamos"
          intro="Pautas concretas para Pernambuco — feitas com escuta, base e território. Passe o mouse para conhecer cada uma."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BANDEIRAS.map(({ icon: Icon, title, text, detail }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green-soft)] text-[var(--brand-green-deep)] transition-colors group-hover:bg-[var(--brand-green-deep)] group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold leading-tight text-[var(--brand-green-deep)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{text}</p>
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[var(--brand-green-deep)] via-[var(--brand-green-deep)]/95 to-[var(--brand-green-deep)]/80 p-6 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Icon className="h-6 w-6 text-[var(--brand-green-soft)]" />
                <h4 className="mt-3 font-serif text-lg font-bold">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90">{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Propostas ============ */
const PROPOSTAS = [
  {
    title: "Programa de Regularização de Terreiros",
    summary: "Caminho claro do reconhecimento à formalização das casas.",
    items: [
      "Mutirões estaduais para obtenção de CNPJ",
      "Orientação jurídica e contábil gratuita",
      "Capacitação para editais e políticas públicas",
      "Mapeamento estadual dos terreiros",
    ],
  },
  {
    title: "Cadastro Estadual de Terreiros Históricos",
    summary: "Memória viva e proteção patrimonial.",
    items: [
      "Inventário cultural das casas mais antigas",
      "Registro da memória oral e dos saberes",
      "Proteção patrimonial integrada com IPHAN e Fundarpe",
      "Sinalização e turismo cultural respeitoso",
    ],
  },
  {
    title: "Cultura Popular",
    summary: "Sustento real para quem segura a tradição.",
    items: [
      "Fundo estadual de incentivo à cultura popular",
      "Editais simplificados para mestres e grupos",
      "Formação cultural permanente",
      "Bolsa-mestre e proteção previdenciária",
    ],
  },
  {
    title: "Povos Tradicionais",
    summary: "Reconhecimento institucional e proteção.",
    items: [
      "Proteção institucional contra violência e despejo",
      "Mapeamento e cartografia social",
      "Reconhecimento e políticas afirmativas",
      "Acesso a saúde, educação e renda específicos",
    ],
  },
  {
    title: "Combate ao Racismo Religioso",
    summary: "Tolerância zero com a intolerância.",
    items: [
      "Plano estadual de enfrentamento ao racismo religioso",
      "Delegacia especializada e protocolo único",
      "Formação de agentes públicos e profissionais de imprensa",
      "Rede de acolhimento jurídico e psicológico",
    ],
  },
  {
    title: "População em Situação de Rua",
    summary: "Política feita com quem viveu a rua.",
    items: [
      "Expansão dos Consultórios na Rua",
      "Moradia primeiro e acolhimento qualificado",
      "Trabalho, renda e cultura como porta de saída",
      "Participação direta da população na construção da política",
    ],
  },
  {
    title: "Saúde Mental e Redução de Danos",
    summary: "Cuidado em rede, não exclusão.",
    items: [
      "Fortalecimento dos CAPS e da RAPS",
      "Apoio comunitário e atenção territorial",
      "Combate ao manicômio e às internações compulsórias",
      "Cuidado integral às pessoas em uso de drogas",
    ],
  },
  {
    title: "Juventude e Economia Criativa",
    summary: "Futuro para a juventude negra e periférica.",
    items: [
      "Primeiro emprego cultural",
      "Editais para coletivos jovens",
      "Equipamentos culturais nos bairros",
      "Crédito e formação para empreendedores criativos",
    ],
  },
];

function Propostas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? PROPOSTAS[openIndex] : null;
  return (
    <section id="propostas" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Propostas"
          title="Compromissos com Pernambuco"
          intro="Eixos prioritários para transformar experiência em política pública. Clique para ver os detalhes."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {PROPOSTAS.map((p, i) => (
            <li key={p.title}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group flex w-full items-start gap-4 rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--brand-green)] hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green-deep)] font-serif text-sm font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-[15px] font-bold leading-snug text-[var(--brand-green-deep)]">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm text-foreground/70">{p.summary}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-brown)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(v) => !v && setOpenIndex(null)}>
        <DialogContent className="max-w-xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[var(--brand-green-deep)]">
                  {active.title}
                </DialogTitle>
                <DialogDescription>{active.summary}</DialogDescription>
              </DialogHeader>
              <ul className="mt-3 space-y-3">
                {active.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-green)]" />
                    <span className="text-sm leading-relaxed text-foreground/85">{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="#participe"
                  onClick={() => setOpenIndex(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green-deep)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground"
                >
                  <Heart className="h-4 w-4" /> Apoiar esta pauta
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-green-deep)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-deep)]"
                >
                  <MessageCircle className="h-4 w-4" /> Falar com Renato
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ============ Resultados (animated counters) ============ */
const RESULTADOS = [
  { n: 22, suffix: " anos", label: "De caminhada na Jurema" },
  { n: 500000, suffix: "+", label: "Pessoas alcançadas", format: "compact" as const },
  { n: 100, suffix: "+", label: "Eventos realizados" },
  { n: 80, suffix: "+", label: "Comunidades atendidas" },
  { n: 30, suffix: "+", label: "Projetos culturais" },
];

function useCountUp(target: number, durationMs = 1600, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return val;
}

function Counter({
  target,
  suffix,
  format,
  start,
}: {
  target: number;
  suffix: string;
  format?: "compact";
  start: boolean;
}) {
  const v = useCountUp(target, 1800, start);
  const display =
    format === "compact"
      ? v >= 1000
        ? `${Math.round(v / 1000)} mil`
        : String(v)
      : v.toLocaleString("pt-BR");
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

function Resultados() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      id="resultados"
      className="relative overflow-hidden bg-[var(--brand-brown-deep)] py-20 text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,oklch(0.4_0.08_150),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.35_0.07_55),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          light
          eyebrow="Resultados da Caminhada"
          title="Números que contam essa história"
          intro="Atuação real, no chão das comunidades, dos terreiros e das ruas."
        />
        <div
          ref={ref}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {RESULTADOS.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur"
            >
              <p className="font-serif text-4xl font-bold leading-none sm:text-5xl">
                <Counter
                  target={r.n}
                  suffix={r.suffix}
                  format={r.format}
                  start={visible}
                />
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Agenda ============ */
type AgendaItem = {
  title: string;
  location: string;
  time: string;
  region: string;
  date: string; // dd/mm
  weekday: string;
  month: string;
};

const AGENDA: AgendaItem[] = [
  // Maio
  { date: "28/05", weekday: "Quinta", month: "Maio", region: "Região Metropolitana", title: "Canjerê Pai Carlos", location: "Rua Berlanda Bezerra, 58, Caixa D'água — Olinda", time: "18h" },
  { date: "28/05", weekday: "Quinta", month: "Maio", region: "Região Metropolitana", title: "Ilê Axé Aziri Lade", location: "Rua Caracas, 325, Alto Sol Nascente — Olinda", time: "19h" },
  { date: "29/05", weekday: "Sexta", month: "Maio", region: "Recife", title: "Inauguração Espaço Cultural Casa Macumba Ordinária", location: "Pátio do Terço — Recife", time: "18h" },
  { date: "30/05", weekday: "Sábado", month: "Maio", region: "Zona da Mata", title: "Ylé Asé Dan Lodó", location: "Vale do Capibaribe, Q.38 — Limoeiro", time: "13h" },
  { date: "30/05", weekday: "Sábado", month: "Maio", region: "Recife", title: "Yle Axé Oyá Egunitá — Pai Flor", location: "Rua da Misericórdia, 205 — Macaxeira", time: "15h" },
  { date: "30/05", weekday: "Sábado", month: "Maio", region: "Região Metropolitana", title: "Cabaré da Ritinha — Pai Fábio", location: "Rua Transamazônica, 506 — Abreu e Lima", time: "16h" },
  { date: "30/05", weekday: "Sábado", month: "Maio", region: "Recife", title: "Roça Obá Aganjú Osún Opará", location: "Rua Ernesto Cavalcanti, 84 — Afogados", time: "17h" },
  { date: "31/05", weekday: "Domingo", month: "Maio", region: "Região Metropolitana", title: "Centro de Jurema Mestre José dos Anjos", location: "Santo Aleixo — Jaboatão", time: "15h" },
  { date: "31/05", weekday: "Domingo", month: "Maio", region: "Recife", title: "Roça de Xangô Ogodô — Pai Rinaldo", location: "Jardim Jordão — Recife", time: "18h" },
  // Junho
  { date: "06/06", weekday: "Sábado", month: "Junho", region: "Recife", title: "Casa da Mestra Ritinha", location: "Vasco da Gama — Recife", time: "15h" },
  { date: "06/06", weekday: "Sábado", month: "Junho", region: "Recife", title: "Catimbó dos Mestres — Espaço Cultural Macumba Ordinária", location: "Santo Antônio — Recife", time: "18h" },
  { date: "10/06", weekday: "Quarta", month: "Junho", region: "Agreste", title: "Centro de Umbanda Zé do Beco", location: "Vila Social — Surubim", time: "14h" },
  { date: "10/06", weekday: "Quarta", month: "Junho", region: "Recife", title: "Reunião com Mãe Gilmara — Ilé Axé Olutum Nikeré", location: "Rua Frutuosa Gomes, 72 — Várzea (Brasilit), Recife", time: "19h30" },
  { date: "13/06", weekday: "Sábado", month: "Junho", region: "Região Metropolitana", title: "Café da Manhã + Oficina Formativa — Ilé Asé Keobambo Niwá Omin", location: "Rua Sertânia, 295 — Pau Amarelo, Paulista", time: "09h30" },
  { date: "13/06", weekday: "Sábado", month: "Junho", region: "Recife", title: "Asé Alaafin", location: "Rua Dois de Fevereiro — Nova Descoberta, Recife", time: "18h" },
  { date: "13/06", weekday: "Sábado", month: "Junho", region: "Recife", title: "Transmissão da Copa do Mundo + Roda de Afoxé — Casa Macumba Ordinária", location: "Pátio do Terço — Recife", time: "19h" },
  { date: "13/06", weekday: "Sábado", month: "Junho", region: "Recife", title: "Ilé Axé Omilayo", location: "Rua da Linha, 3306 — Alto da Bondade", time: "19h30" },
  { date: "20/06", weekday: "Sábado", month: "Junho", region: "Recife", title: "Casa José Sibamba Asé Oniré — Celebração da Mestra Maria Helena", location: "Rua Jornalista Luiz Beltrão de Andrade Lima, 02 — Iputinga, Recife", time: "15h30" },
  { date: "21/06", weekday: "Domingo", month: "Junho", region: "Recife", title: "Roça Okueran", location: "Rua Córrego Central, 189 — Linha do Tiro, Recife", time: "18h" },
  { date: "21/06", weekday: "Domingo", month: "Junho", region: "Região Metropolitana", title: "Centro Cultural Caboclo Emanuel da Luiz", location: "Rua 21, nº 45 — Maranguape I, Paulista", time: "19h30" },
  { date: "27/06", weekday: "Sábado", month: "Junho", region: "Região Metropolitana", title: "Samba dos Pretos Velhos — 2ª Edição — Ilé Asé Keobambo Niwá Omin", location: "Rua Sertânia, 295 — Pau Amarelo, Paulista", time: "18h" },
  // Julho
  { date: "14/07", weekday: "Terça", month: "Julho", region: "Região Metropolitana", title: "Canjerê Juremeiro Binho", location: "Rua Luiz Bezerra de Menezes, 38 — Águas Compridas, Olinda", time: "19h" },
  { date: "26/07", weekday: "Domingo", month: "Julho", region: "Recife", title: "Ilé Marokétu Asé Aronin", location: "Rua Dallas, nº 05 — Sítio Fragoso, Recife", time: "19h" },
];

const REGIOES_FILTRO = ["Todos", "Recife", "Região Metropolitana", "Zona da Mata", "Agreste", "Sertão"];

function Agenda() {
  const [filter, setFilter] = useState("Todos");
  const filtered = useMemo(
    () => (filter === "Todos" ? AGENDA : AGENDA.filter((e) => e.region === filter)),
    [filter],
  );

  return (
    <section id="agenda" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Agenda"
          title="Onde Renato vai estar"
          intro="Visitas, encontros, atos e eventos da pré-campanha. Filtre por região."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {REGIOES_FILTRO.map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                filter === r
                  ? "bg-[var(--brand-green-deep)] text-primary-foreground"
                  : "border border-[var(--brand-brown)]/30 bg-card text-[var(--brand-brown-deep)] hover:border-[var(--brand-green)]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhum evento nesta região por enquanto. Em breve novos encontros.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((ev, i) => {
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.location)}`;
              const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Olá, Renato. Quero confirmar presença em "${ev.title}" no dia ${ev.date}.`,
              )}`;
              return (
                <article
                  key={i}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative flex h-32 items-end bg-gradient-to-br from-[var(--brand-green-deep)] via-[var(--brand-green)] to-[var(--brand-brown)] p-5 text-primary-foreground">
                    <Calendar className="absolute right-4 top-4 h-6 w-6 opacity-40" />
                    <div>
                      <p className="font-serif text-3xl font-bold leading-none">{ev.date}</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">
                        {ev.weekday} · {ev.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="self-start rounded-full bg-[var(--brand-cream)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">
                      {ev.region}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-[var(--brand-green-deep)]">
                      {ev.title}
                    </h3>
                    <p className="mt-2 flex items-start gap-1.5 text-[13px] text-muted-foreground">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-brown)]" />
                      {ev.location}
                    </p>
                    <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--brand-green-deep)] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" /> Confirmar
                      </a>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--brand-brown)] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                      </a>
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--brand-green-deep)] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-deep)]"
                      >
                        <Navigation className="h-3.5 w-3.5" /> Como Chegar
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============ Galeria (masonry + filter + lightbox) ============ */
const GALERIA_CATS = [
  "Todos",
  "Terreiros",
  "Comunidades",
  "Cultura Popular",
  "Ações Sociais",
  "Orgulho de Axé",
  "Espaço Cultural",
  "Bastidores",
];

type Photo = { id: number; cat: string; ratio: "tall" | "wide" | "square"; caption: string };
const GALLERY: Photo[] = [
  { id: 1, cat: "Terreiros", ratio: "tall", caption: "Visita ao Ilê Axé Aziri Lade" },
  { id: 2, cat: "Cultura Popular", ratio: "wide", caption: "Mestres do coco" },
  { id: 3, cat: "Espaço Cultural", ratio: "square", caption: "Casa Macumba Ordinária" },
  { id: 4, cat: "Orgulho de Axé", ratio: "tall", caption: "Encontro de juremeiros" },
  { id: 5, cat: "Comunidades", ratio: "square", caption: "Visita comunitária" },
  { id: 6, cat: "Ações Sociais", ratio: "wide", caption: "Mutirão social" },
  { id: 7, cat: "Bastidores", ratio: "square", caption: "Bastidores da caminhada" },
  { id: 8, cat: "Terreiros", ratio: "tall", caption: "Catimbó dos Mestres" },
  { id: 9, cat: "Cultura Popular", ratio: "square", caption: "Roda de samba dos Pretos Velhos" },
  { id: 10, cat: "Espaço Cultural", ratio: "wide", caption: "Pátio do Terço" },
  { id: 11, cat: "Comunidades", ratio: "tall", caption: "Pau Amarelo" },
  { id: 12, cat: "Orgulho de Axé", ratio: "square", caption: "Mestre Manoel Quebra Pedra" },
];

function Galeria() {
  const [cat, setCat] = useState("Todos");
  const [open, setOpen] = useState<Photo | null>(null);
  const photos = cat === "Todos" ? GALLERY : GALLERY.filter((p) => p.cat === cat);

  return (
    <section id="galeria" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Galeria"
          title="Registros da caminhada"
          intro="Imagens da rua, do palco, do terreiro e da comunidade."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {GALERIA_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                cat === c
                  ? "bg-[var(--brand-green-deep)] text-primary-foreground"
                  : "border border-[var(--brand-brown)]/30 bg-card text-[var(--brand-brown-deep)] hover:border-[var(--brand-green)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
          {photos.map((p) => {
            const seed = `renato-${p.cat}-${p.id}`;
            const url = `https://picsum.photos/seed/${encodeURIComponent(seed)}/600/${
              p.ratio === "tall" ? 800 : p.ratio === "wide" ? 400 : 600
            }`;
            return (
              <button
                key={p.id}
                onClick={() => setOpen({ ...p })}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <img
                  src={url}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--brand-green-deep)]/90 to-transparent p-3 text-left text-xs font-semibold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {p.caption}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Fechar"
            className="absolute right-5 top-5 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={`https://picsum.photos/seed/${encodeURIComponent(`renato-${open.cat}-${open.id}`)}/1400/1000`}
              alt={open.caption}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm font-semibold text-white/90">
              {open.caption} · <span className="text-white/60">{open.cat}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

/* ============ Depoimentos ============ */
const DEPOIMENTOS = [
  {
    name: "Mestre João do Coco",
    role: "Mestre da cultura popular",
    city: "Olinda — PE",
    text: "Renato entende o valor dos mestres. Põe a cara, abre porta, fortalece a tradição. É dos nossos.",
    seed: "joao-coco",
  },
  {
    name: "Coletivo Maré Negra",
    role: "Coletivo artístico",
    city: "Recife — PE",
    text: "A Macumba Ordinária mudou a forma como falamos de fé, cultura e resistência em Pernambuco.",
    seed: "mare-negra",
  },
  {
    name: "Pai Flor de Oyá",
    role: "Babalorixá",
    city: "Macaxeira — Recife",
    text: "Renato caminha com o povo de terreiro. Está com a gente nas alegrias e nas dores.",
    seed: "pai-flor",
  },
  {
    name: "Dona Edileuza",
    role: "Liderança comunitária",
    city: "Pau Amarelo — Paulista",
    text: "Conheci Renato na rua, na luta, no abraço. Esse menino veio do povo e fala pelo povo.",
    seed: "edileuza",
  },
  {
    name: "Igor Tarcísio",
    role: "Produtor cultural",
    city: "Recife — PE",
    text: "Quando a cultura precisou de voz, Renato esteve. Quando a fé precisou de defesa, Renato esteve.",
    seed: "igor",
  },
  {
    name: "Juventude da Caixa D'água",
    role: "Coletivo de juventude",
    city: "Olinda — PE",
    text: "Renato escuta a juventude e devolve com ação. A gente confia.",
    seed: "juventude",
  },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Quem caminha junto"
          intro="Vozes de lideranças, artistas, mestres e moradores que constroem a caminhada."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <article
              key={d.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-lg"
            >
              <Quote className="h-8 w-8 text-[var(--brand-brown)]/70" />
              <p className="mt-4 flex-1 text-[15px] italic leading-relaxed text-foreground/85">
                "{d.text}"
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <img
                  src={`https://i.pravatar.cc/120?u=${d.seed}`}
                  alt={d.name}
                  loading="lazy"
                  className="h-14 w-14 rounded-full border-2 border-[var(--brand-green-soft)] object-cover"
                />
                <div>
                  <p className="font-serif text-base font-bold text-[var(--brand-green-deep)]">
                    {d.name}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-brown-deep)]">
                    {d.role}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{d.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Mapa PE ============ */
const REGIOES = [
  { name: "Região Metropolitana", info: "Recife, Olinda, Jaboatão, Paulista, Abreu e Lima", visits: 62, top: "62%", left: "18%" },
  { name: "Zona da Mata", info: "Limoeiro e municípios da mata norte e sul", visits: 14, top: "48%", left: "28%" },
  { name: "Agreste", info: "Surubim, Caruaru e cidades parceiras", visits: 9, top: "55%", left: "48%" },
  { name: "Sertão", info: "Articulações em construção", visits: 4, top: "50%", left: "75%" },
];

function MapaPE() {
  const [active, setActive] = useState(0);
  return (
    <section
      id="mapa"
      className="border-y border-border bg-[var(--brand-green-deep)] py-20 text-primary-foreground"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          light
          eyebrow="Onde estamos"
          title="A caminhada por Pernambuco"
          intro="Territórios visitados, terreiros, projetos e lideranças parceiras. Clique nos pontos."
        />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur">
            {/* Stylized PE map shape */}
            <svg viewBox="0 0 800 450" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d="M40,260 C100,180 200,150 320,170 C420,185 520,160 640,180 C720,195 760,230 760,280 C740,330 640,360 540,340 C430,320 330,360 220,340 C140,325 60,310 40,260 Z"
                fill="oklch(0.45 0.1 150)"
                opacity="0.35"
                stroke="oklch(0.92 0.03 150)"
                strokeWidth="1.5"
              />
            </svg>
            {REGIOES.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setActive(i)}
                style={{ top: r.top, left: r.left }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={r.name}
              >
                <span
                  className={`block h-4 w-4 rounded-full ring-4 transition-all ${
                    active === i
                      ? "scale-125 bg-[var(--brand-green-soft)] ring-[var(--brand-green-soft)]/40"
                      : "bg-white ring-white/30"
                  }`}
                />
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100">
                  {r.name}
                </span>
              </button>
            ))}
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {REGIOES.map((r, i) => (
                <button
                  key={r.name}
                  onClick={() => setActive(i)}
                  className={`rounded-2xl border p-5 text-left transition-all ${
                    active === i
                      ? "border-[var(--brand-green-soft)] bg-white/15"
                      : "border-white/15 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <MapPin className="h-5 w-5 text-[var(--brand-green-soft)]" />
                    <span className="font-serif text-2xl font-bold">{r.visits}</span>
                  </div>
                  <p className="mt-2 font-serif text-base font-bold leading-tight">{r.name}</p>
                  <p className="mt-1 text-xs text-primary-foreground/75">{r.info}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">
                    visitas registradas
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Faça Parte ============ */
const PARTICIPACAO = [
  "Quero ser voluntário",
  "Quero divulgar nas redes",
  "Quero organizar uma reunião",
  "Quero receber novidades",
  "Sou liderança de terreiro",
  "Sou liderança comunitária",
  "Sou artista",
  "Sou produtor cultural",
  "Quero levar Renato para meu evento",
  "Quero ajudar na comunicação",
  "Quero ajudar na mobilização",
  "Quero ajudar financeiramente",
];

function FacaParte() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    bairro: "",
    email: "",
    profissao: "",
    instagram: "",
  });
  const [opts, setOpts] = useState<Record<string, boolean>>({});
  const [lgpd, setLgpd] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggle = (k: string) => setOpts({ ...opts, [k]: !opts[k] });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) {
      toast.error("Preencha pelo menos nome e WhatsApp.");
      return;
    }
    if (!lgpd) {
      toast.error("Você precisa autorizar o contato conforme a LGPD.");
      return;
    }
    toast.success("Bem-vindo(a) à caminhada! Em breve entraremos em contato.");
    setForm({
      nome: "",
      whatsapp: "",
      cidade: "",
      bairro: "",
      email: "",
      profissao: "",
      instagram: "",
    });
    setOpts({});
    setLgpd(false);
  };

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/30";

  return (
    <section id="participe" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand-brown-deep)]">
            Faça parte
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[var(--brand-green-deep)] sm:text-5xl">
            Quero fazer parte dessa caminhada
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            Voluntários, lideranças, artistas, produtores e comunidades. A construção é coletiva — e
            começa por você.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[var(--brand-green)]/40 bg-[var(--brand-green-soft)] p-4 text-sm font-bold text-[var(--brand-green-deep)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Falar diretamente no WhatsApp
              <ArrowRight className="ml-auto h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[var(--brand-brown)]/30 bg-card p-4 text-sm font-bold text-[var(--brand-brown-deep)] transition-transform hover:-translate-y-0.5"
            >
              <Megaphone className="h-5 w-5" />
              Acompanhar nas redes
              <ArrowRight className="ml-auto h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 rounded-2xl border-l-4 border-[var(--brand-green)] bg-card p-5 text-sm text-foreground/80 shadow-sm">
            Seus dados são tratados com responsabilidade, conforme a <strong>LGPD</strong> e a
            legislação eleitoral brasileira.
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-md">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome *">
              <input
                name="nome"
                value={form.nome}
                onChange={onChange}
                className={input}
                maxLength={120}
                required
              />
            </Field>
            <Field label="WhatsApp *">
              <input
                name="whatsapp"
                value={form.whatsapp}
                onChange={onChange}
                className={input}
                maxLength={30}
                required
              />
            </Field>
            <Field label="Cidade">
              <input
                name="cidade"
                value={form.cidade}
                onChange={onChange}
                className={input}
                maxLength={80}
              />
            </Field>
            <Field label="Bairro">
              <input
                name="bairro"
                value={form.bairro}
                onChange={onChange}
                className={input}
                maxLength={80}
              />
            </Field>
            <Field label="E-mail">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className={input}
                maxLength={200}
              />
            </Field>
            <Field label="Profissão">
              <input
                name="profissao"
                value={form.profissao}
                onChange={onChange}
                className={input}
                maxLength={80}
              />
            </Field>
            <Field label="Instagram">
              <input
                name="instagram"
                value={form.instagram}
                onChange={onChange}
                className={input}
                maxLength={60}
                placeholder="@seuusuario"
              />
            </Field>
          </div>
          <fieldset className="mt-6">
            <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">
              Como você quer participar?
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {PARTICIPACAO.map((p) => (
                <label
                  key={p}
                  className={`flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                    opts[p]
                      ? "border-[var(--brand-green)] bg-[var(--brand-green-soft)]"
                      : "border-border bg-background hover:border-[var(--brand-green)]/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!opts[p]}
                    onChange={() => toggle(p)}
                    className="mt-0.5 h-4 w-4 accent-[var(--brand-green-deep)]"
                  />
                  <span className="leading-snug">{p}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="mt-5 flex cursor-pointer items-start gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-xs text-foreground/80">
            <input
              type="checkbox"
              checked={lgpd}
              onChange={() => setLgpd(!lgpd)}
              className="mt-0.5 h-4 w-4 accent-[var(--brand-green-deep)]"
            />
            <span className="leading-snug">
              Autorizo receber comunicações da pré-campanha conforme a <strong>LGPD</strong>.
            </span>
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-green-deep)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Heart className="h-4 w-4" /> Fazer parte da caminhada
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ============ Redes ============ */
const REDES = [
  { name: "Instagram", url: INSTAGRAM_URL, Icon: Instagram, handle: "@renatofonsecape" },
  { name: "Facebook", url: FACEBOOK_URL, Icon: Facebook, handle: "/renatofonsecape" },
  { name: "YouTube", url: YOUTUBE_URL, Icon: Youtube, handle: "@renatofonsecape" },
  { name: "TikTok", url: TIKTOK_URL, Icon: Music2, handle: "@renatofonsecape" },
  { name: "WhatsApp", url: WHATSAPP_URL, Icon: MessageCircle, handle: "Fale agora" },
];

function RedesSociais() {
  return (
    <section id="redes" className="border-y border-border bg-[var(--brand-cream)]/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Redes Sociais" title="Conecte-se com a caminhada" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {REDES.map(({ name, url, Icon, handle }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-green-deep)] text-primary-foreground transition-colors group-hover:bg-[var(--brand-brown)]">
                <Icon className="h-6 w-6" />
              </span>
              <p className="font-serif text-base font-bold text-[var(--brand-green-deep)]">{name}</p>
              <p className="text-xs font-semibold text-[var(--brand-brown-deep)]">{handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Apoio (vaquinha) ============ */
function Apoio() {
  return (
    <section
      id="apoie"
      className="relative overflow-hidden bg-[var(--brand-brown-deep)] py-24 text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.09_150),transparent_55%),radial-gradient(circle_at_75%_80%,oklch(0.35_0.08_55),transparent_55%)]" />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand-green-soft)]">
          Apoie
        </span>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-6xl">
          Sua contribuição fortalece essa luta
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">
          Cada apoio fortalece a comunicação, a circulação, os encontros e a mobilização em defesa
          da cultura, da fé e dos invisibilizados.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={VAQUINHA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl transition-transform hover:-translate-y-0.5"
          >
            <Heart className="h-4 w-4" /> Apoiar na vaquinha
          </a>
          <a
            href="#participe"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[var(--brand-brown-deep)]"
          >
            Faça parte da caminhada <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Footer ============ */
function Footer() {
  return (
    <footer className="bg-[var(--brand-green-deep)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src={logoImage}
            alt="Renato Fonseca"
            className="h-16 w-auto rounded-md bg-white/95 p-2"
          />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">
            Da rua à luta
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/85">
            Cultura, dignidade e liberdade religiosa para Pernambuco.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">
            Navegar
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#quem" className="hover:underline">Quem é Renato</a></li>
            <li><a href="#bandeiras" className="hover:underline">Bandeiras</a></li>
            <li><a href="#propostas" className="hover:underline">Propostas</a></li>
            <li><a href="#agenda" className="hover:underline">Agenda</a></li>
            <li><a href="#participe" className="hover:underline">Faça parte</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:contato@renatofonseca.com" className="hover:underline">
                contato@renatofonseca.com
              </a>
            </li>
            <li>
              <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="hover:underline">
                Apoiar a campanha
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">
            Redes
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:underline">YouTube</a></li>
            <li><a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="hover:underline">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Renato Fonseca — Conteúdo de pré-campanha em conformidade
            com a legislação eleitoral.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Transparência</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============ Fixed WhatsApp ============ */
function FixedWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.18_150)] px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl ring-4 ring-[oklch(0.62_0.18_150)]/25 transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

/* Unused icon import safeguard */
void Palette;
