import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoLight from "@/assets/projetiva-logo-light.png.asset.json";
import logoDark from "@/assets/projetiva-logo-dark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projetiva Comunicação Visual — Campo Mourão/PR" },
      {
        name: "description",
        content:
          "Letreiros, painéis, fachadas e sinalização com acabamento premium em Campo Mourão/PR. Orçamento pelo WhatsApp (44) 99806-1710.",
      },
      { property: "og:title", content: "Projetiva Comunicação Visual — Campo Mourão/PR" },
      {
        property: "og:description",
        content:
          "Letreiros, painéis e fachadas de alto padrão em Campo Mourão/PR. Fale com a Projetiva: (44) 99806-1710.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "(44) 99806-1710";
const PHONE_TEL = "+5544998061710";
const WA = (msg: string) => `https://wa.me/5544998061710?text=${encodeURIComponent(msg)}`;
const WA_DEFAULT = WA("Olá! Vim pelo site e gostaria de solicitar um orçamento.");
const ADDRESS = "R. Francisco Ferreira Albuquerque, 720 - Centro, Campo Mourão - PR, 87301-130";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const navItems = [
  { href: "#sobre", label: "A Empresa" },
  { href: "#funciona", label: "Como Funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#local", label: "Localização" },
];

const steps = [
  {
    n: "01",
    t: "Chame no WhatsApp",
    d: "Conte sua ideia, envie referências ou o problema que precisa resolver na fachada, painel ou letreiro.",
  },
  {
    n: "02",
    t: "Orçamento personalizado",
    d: "A equipe avalia o projeto e retorna com uma proposta sob medida para o seu espaço e orçamento.",
  },
  {
    n: "03",
    t: "Produção acompanhada",
    d: "Aprovado o projeto, a peça é produzida com atualizações de andamento também pelo WhatsApp.",
  },
  {
    n: "04",
    t: "Instalação profissional",
    d: "Equipe especializada realiza a instalação no local, com acabamento cuidadoso do início ao fim.",
  },
];

const servicos = [
  {
    t: "Letreiros Luminosos",
    d: "Letras caixa, luminosos em LED e painéis iluminados que dão destaque à marca de dia e de noite.",
    p: "M4 4h16v12H4z M9 20h6 M12 16v4",
  },
  {
    t: "Painéis e Totens",
    d: "Estruturas para pontos comerciais, condomínios e áreas externas com alto impacto visual.",
    p: "M4 3h16v14H4z M9 21h6 M12 17v4",
  },
  {
    t: "Fachadas Comerciais",
    d: "Projeto completo de fachada, unindo arquitetura e identidade visual em um só conceito.",
    p: "M3 21V9l9-6 9 6v12 M9 21v-8h6v8",
  },
  {
    t: "Adesivagem e Envelopamento",
    d: "Vitrines, veículos e ambientes personalizados com adesivos de alta durabilidade.",
    p: "M4 4h16v16H4z M4 9h16 M9 21V9",
  },
  {
    t: "Placas e Sinalização",
    d: "Sinalização interna e externa, placas indicativas e de segurança com padrão profissional.",
    p: "M12 2 3 7v10l9 5 9-5V7z M3 7l9 5 9-5 M12 12v10",
  },
  {
    t: "Projetos Personalizados",
    d: "Ideias fora do padrão? A equipe desenvolve soluções sob medida para cada necessidade.",
    p: "M12 3v18 M3 12h18",
  },
];

const diferenciais = [
  {
    t: "Avaliação 5 estrelas",
    d: "Nota máxima no Google, construída com trabalho consistente e atenção ao cliente.",
    p: "M20 6 9 17l-5-5",
  },
  {
    t: "Atendimento direto",
    d: "Sem intermediários: converse direto com quem vai projetar e produzir sua peça.",
    p: "M21 11.5a8.38 8.38 0 0 1-8.5 8.5H3l1.5-4A8.38 8.38 0 1 1 21 11.5z",
  },
  {
    t: "Acabamento de alto padrão",
    d: "Materiais e execução pensados para durar e representar a marca com sofisticação.",
    p: "M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  },
];

const depoimentos = [
  { q: "Ótimos profissionais. Trabalho de qualidade.", a: "Ezilmari Ferreira", w: "Avaliação no Google · há 1 ano" },
  {
    q: "Ótimo atendimento e execução do trabalho. Recomendo.",
    a: "Thiago Fabrício",
    w: "Avaliação no Google · há 2 anos",
  },
  {
    q: "Comprometimento e qualidade no serviço e atendimento! Nota 10.",
    a: "Giovanne Dias",
    w: "Avaliação no Google · há 2 anos",
  },
];

function Icon({ d, className }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {d.split(" M").map((seg, i) => (
        <path key={i} d={i === 0 ? seg : `M${seg}`} stroke="currentColor" />
      ))}
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5,14.4c-0.3-0.1-1.6-0.8-1.9-0.9c-0.3-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.9-0.8,1.1c-0.2,0.2-0.3,0.2-0.6,0.1 c-0.3-0.1-1.2-0.5-2.3-1.4c-0.9-0.8-1.4-1.7-1.6-2c-0.2-0.3,0-0.5,0.1-0.6c0.1-0.1,0.5-0.6,0.6-0.8c0.1-0.2,0.1-0.4,0-0.5 c-0.1-0.1-0.6-1.4-0.8-1.9c-0.2-0.5-0.4-0.4-0.6-0.4c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0.1-0.8,0.4C7.3,7.9,7,8.5,7,9.5 c0,1,0.7,2,0.8,2.1c0.1,0.1,1.6,2.5,4,3.5c2,0.8,2.4,0.6,2.8,0.6c0.4,0,1.3-0.5,1.5-1c0.2-0.5,0.2-0.9,0.1-1 C17.9,14.6,17.8,14.5,17.5,14.4z M12,2C6.5,2,2,6.5,2,12c0,1.9,0.5,3.6,1.4,5.1L2,22l5-1.3c1.4,0.8,3.1,1.3,4.9,1.3 c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20.3c-1.6,0-3.1-0.4-4.4-1.2l-0.3-0.2l-2.8,0.7l0.8-2.7l-0.2-0.3C4.4,15.1,3.7,13.6,3.7,12 c0-4.6,3.7-8.3,8.3-8.3s8.3,3.7,8.3,8.3S16.6,20.3,12,20.3z" />
    </svg>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* ---------------- header ---------------- */}
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 transition-all duration-300 md:px-10 ${
          scrolled
            ? "border-b border-border bg-background/85 py-3 backdrop-blur-md shadow-soft"
            : "border-b border-transparent py-5"
        }`}
      >
        <a href="#top" className="flex items-center">
          <img
            src={logoDark.url}
            alt="Projetiva Comunicação Visual"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.82rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Orçamento
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className="block h-px w-6 bg-foreground" />
          <span className="block h-px w-6 bg-foreground" />
          <span className="block h-px w-6 bg-foreground" />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground"
          >
            Orçamento
          </a>
        </div>
      )}

      {/* ---------------- hero (sem fundo, logo em destaque) ---------------- */}
      <section id="top" className="relative flex min-h-screen items-center justify-center px-5 pb-20 pt-32">
        <div className="mx-auto max-w-3xl text-center reveal-up">
          <img
            src={logoDark.url}
            alt="Projetiva Comunicação Visual"
            className="mx-auto h-40 w-auto sm:h-52 md:h-64"
          />
          <p className="eyebrow mt-10">Comunicação visual premium · Campo Mourão/PR</p>
          <h1 className="mt-5 text-[clamp(2.4rem,6vw,4.4rem)] font-light leading-[1.05]">
            Sua marca, <em className="not-italic font-semibold text-primary">impossível</em> de passar despercebida
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
            Projetamos e produzimos letreiros, painéis e fachadas que traduzem a identidade do seu negócio em
            experiência real — do conceito à instalação, com acabamento de alto padrão.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-primary px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Orçamento no WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-colors hover:bg-secondary"
            >
              Ligar {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-14 gap-y-6 border-t border-border pt-10">
            {[
              ["5.0 ★", "Avaliação no Google"],
              ["13", "Avaliações verificadas"],
              ["100%", "Atendimento direto"],
            ].map(([n, l]) => (
              <div key={l}>
                <strong className="block font-display text-2xl font-semibold">{n}</strong>
                <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- sobre ---------------- */}
      <section id="sobre" className="border-t border-border py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative aspect-4/5 overflow-hidden bg-secondary shadow-elegant">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={logoDark.url} alt="Marca Projetiva" className="w-3/5" />
            </div>
            <div className="absolute bottom-6 left-6 bg-primary px-4 py-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-primary-foreground">
              Precisão em cada corte
            </div>
          </div>
          <div>
            <p className="eyebrow">Quem somos</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.5rem)] font-light leading-tight">
              Comunicação visual pensada como{" "}
              <em className="not-italic font-semibold text-primary">experiência de marca</em>
            </h2>
            <p className="mt-6 leading-[1.85] text-muted-foreground">
              A Projetiva Comunicação Visual é especializada em transformar fachadas, painéis e sinalizações em
              extensões visíveis da identidade de cada cliente. Cada projeto nasce de um conceito claro: comunicação
              visual não é apenas produzir uma peça, é traduzir a essência de um negócio para quem passa na rua.
            </p>
            <p className="mt-4 leading-[1.85] text-muted-foreground">
              Sediada em Campo Mourão (PR), a empresa atua com atendimento consultivo e direto — do primeiro contato ao
              acompanhamento pós-instalação, com a atenção aos detalhes que um projeto premium exige.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Atendimento direto via WhatsApp", "Projeto personalizado", "Acabamento premium"].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 border border-line bg-secondary px-4 py-2.5 text-[0.78rem]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- como funciona ---------------- */}
      <section id="funciona" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Do orçamento à instalação</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.7rem)] font-light">Como Funciona</h2>
            <p className="mt-4 text-muted-foreground">
              Todo o atendimento da Projetiva acontece diretamente pelo WhatsApp ou telefone — simples, rápido e sem
              burocracia.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="border border-line bg-card p-8 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="font-display text-4xl font-semibold text-primary">{s.n}</div>
                <h3 className="mt-5 text-base font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-sm text-muted-foreground">Pronto para dar visibilidade ao seu negócio?</p>
            <a
              href={WA("Olá! Quero iniciar um projeto de comunicação visual.")}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 bg-primary px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Começar Agora
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- serviços ---------------- */}
      <section id="servicos" className="bg-secondary py-24 text-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">O que produzimos</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.7rem)] font-light">Serviços</h2>
            <p className="mt-4 text-muted-foreground">Soluções completas em comunicação visual, do projeto à instalação.</p>
          </div>
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <div key={s.t} className="bg-card p-10 transition-colors hover:bg-muted">
                <Icon d={s.p} className="h-8 w-8 text-primary" />
                <h3 className="mt-6 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- diferenciais ---------------- */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
          <div>
            <p className="eyebrow">Por que a Projetiva</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.4rem)] font-light">Experiência premium em cada detalhe</h2>
            <div className="mt-8 flex flex-col gap-7">
              {diferenciais.map((d) => (
                <div key={d.t} className="flex items-start gap-5">
                  <div className="flex h-11 w-11 min-w-11 items-center justify-center border border-line bg-secondary">
                    <Icon d={d.p} className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{d.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary p-14 text-center text-foreground shadow-elegant">
            <div className="text-2xl tracking-[6px] text-primary">★★★★★</div>
            <strong className="mt-3 block font-display text-6xl font-light">5.0</strong>
            <span className="text-sm text-muted-foreground">Nota média das avaliações</span>
            <div className="mt-6 inline-block border border-line px-5 py-2 text-xs tracking-wide text-primary">
              Google · 13 avaliações
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- depoimentos ---------------- */}
      <section id="depoimentos" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Quem já confiou</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.7rem)] font-light">Depoimentos</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d) => (
              <div key={d.a} className="border border-line bg-card p-8 transition-transform hover:-translate-y-1">
                <div className="tracking-[3px] text-primary">★★★★★</div>
                <p className="mt-4 font-display text-lg font-light leading-relaxed">“{d.q}”</p>
                <div className="mt-6 border-t border-border pt-4">
                  <strong className="block text-sm">{d.a}</strong>
                  <span className="text-xs text-muted-foreground">{d.w}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- localização ---------------- */}
      <section id="local" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Onde estamos</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.7rem)] font-light">Localização</h2>
          </div>
          <div className="mt-14 grid overflow-hidden border border-line shadow-elegant md:grid-cols-2">
            <div className="flex flex-col justify-center bg-card p-12 text-foreground">
              <p className="eyebrow">Projetiva Comunicação Visual</p>
              <h3 className="mt-3 text-2xl font-light">Atendimento em Campo Mourão e região</h3>

              <div className="mt-8 flex items-start gap-4">
                <Icon d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" className="mt-1 h-5 w-5 min-w-5 text-primary" />
                <div>
                  <strong className="block text-sm">Endereço</strong>
                  <a href={MAPS_LINK} target="_blank" rel="noopener" className="text-sm text-muted-foreground hover:text-primary">
                    {ADDRESS}
                  </a>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <Icon d="M12 7v5l3 3" className="mt-1 h-5 w-5 min-w-5 text-primary" />
                <div>
                  <strong className="block text-sm">Horário</strong>
                  <span className="text-sm text-muted-foreground">Atendimento comercial · fecha às 18h</span>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <Icon
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  className="mt-1 h-5 w-5 min-w-5 text-primary"
                />
                <div>
                  <strong className="block text-sm">Telefone</strong>
                  <a href={`tel:${PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-primary">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-primary-foreground"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 border border-line px-6 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-foreground hover:bg-secondary"
                >
                  Ligar agora
                </a>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps?q=R.+Francisco+Ferreira+Albuquerque,+720+-+Centro,+Campo+Mour%C3%A3o+-+PR,+87301-130&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da Projetiva Comunicação Visual"
              className="min-h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-primary px-5 py-24 text-center text-primary-foreground">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] opacity-70">
          Experiência premium em comunicação visual
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.4vw,3.1rem)] font-light leading-tight">
          Transforme sua fachada em um cartão de visita
        </h2>
        <p className="mx-auto mt-5 max-w-lg opacity-80">
          Peça uma avaliação gratuita do seu espaço e descubra como elevar a presença visual do seu negócio.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={WA("Olá! Quero uma avaliação gratuita para minha fachada.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-onyx px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-cream"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Avaliação Gratuita
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 border border-onyx/40 px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.16em]"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-line bg-background pb-8 pt-20 text-muted-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src={logoDark.url} alt="Projetiva Comunicação Visual" className="h-16 w-auto" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Comunicação visual premium em Campo Mourão/PR — letreiros, painéis e fachadas que dão presença real à
                sua marca.
              </p>
            </div>
            <div>
              <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-foreground">Navegação</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {navItems.map((i) => (
                  <li key={i.href}>
                    <a href={i.href} className="hover:text-primary">
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-foreground">Contato</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={WA_DEFAULT} target="_blank" rel="noopener" className="hover:text-primary">
                    WhatsApp {PHONE_DISPLAY}
                  </a>
                </li>
                <li>Atendimento comercial · fecha às 18h</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-foreground">Endereço</h4>
              <address className="mt-5 not-italic text-sm leading-relaxed text-muted-foreground">
                <a href={MAPS_LINK} target="_blank" rel="noopener" className="hover:text-primary">
                  R. Francisco Ferreira Albuquerque, 720
                  <br />
                  Centro, Campo Mourão - PR
                  <br />
                  87301-130
                </a>
              </address>
            </div>
          </div>

          <div className="mt-14 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Projetiva Comunicação Visual</span> — {ADDRESS} ·{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-primary hover:underline">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-3 text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} Projetiva Comunicação Visual. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1ea952] text-white shadow-elegant transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
