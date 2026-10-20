import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Leaf, Flower2, Sprout, Trees } from "lucide-react";
import f1 from "@/assets/foto-1.webp.asset.json";
import f2 from "@/assets/foto-2.webp.asset.json";
import f3 from "@/assets/foto-3.webp.asset.json";
import f4 from "@/assets/foto-4.webp.asset.json";
import f5 from "@/assets/foto-5.webp.asset.json";
import f6 from "@/assets/foto-6.webp.asset.json";
import f7 from "@/assets/foto-7.webp.asset.json";
import f8 from "@/assets/foto-8.webp.asset.json";

const WHATS = "https://wa.me/5519981586113?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eufloria%20Garden.";
const MAPS =
  "https://www.google.com/maps/place/Floricultura+Eufloria+Garden/@-22.9207687,-47.2491577,17z/data=!4m6!3m5!1s0x94c8bbde788a72d3:0x3b210736ddb3e8c4!8m2!3d-22.9207687!4d-47.2491577!16s%2Fg%2F11y3n098gk";
const EMBED = "https://maps.google.com/maps?q=-22.9207687,-47.2491577&z=16&output=embed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Floricultura Eufloria Garden | Plantas e flores em Monte Mor" },
      { name: "description", content: "Garden center em Monte Mor - SP: plantas ornamentais, flores, palmeiras, folhagens e vasos. Aberto todos os dias. Fale no WhatsApp." },
      { property: "og:title", content: "Floricultura Eufloria Garden" },
      { property: "og:description", content: "Plantas, flores e paisagismo em Monte Mor - SP. Aberto todos os dias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categorias = [
  { icon: Flower2, nome: "Plantas com flor", img: f5.url },
  { icon: Leaf, nome: "Folhagens", img: f4.url },
  { icon: Trees, nome: "Palmeiras", img: f3.url },
  { icon: Sprout, nome: "Mudas e forrações", img: f2.url },
];

const galeria = [f8, f6, f7, f4, f2];

const horarios = [
  ["Segunda a sábado", "08:00 – 18:00"],
  ["Domingo", "08:00 – 13:00"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-primary-foreground">
          <a href="#" className="flex items-center gap-2 font-display text-xl">
            <Leaf className="h-6 w-6" /> Eufloria Garden
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#plantas" className="font-medium opacity-100 hover:opacity-80">Plantas</a>
            <a href="#galeria" className="font-medium opacity-100 hover:opacity-80">Galeria</a>
            <a href="#visite" className="font-medium opacity-100 hover:opacity-80">Visite</a>
          </nav>
          <a href={WHATS} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground">
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-40">
          <div className="text-legibility">
            <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Um jardim inteiro <em className="text-secondary">esperando</em> por você.
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-90">
              Plantas ornamentais, flores, palmeiras e folhagens com atendimento de quem ama o que faz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATS} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground">
                Falar no WhatsApp
              </a>
              <a href={MAPS} target="_blank" rel="noreferrer" className="rounded-full border border-primary-foreground/70 bg-primary-foreground/15 px-7 py-3 font-semibold">
                Como chegar
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
            <img src={f5.url} alt="Mão segurando um antúrio vermelho recém-colhido" width={381} height={677} fetchPriority="high" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-primary-foreground/20" />
          </div>
        </div>
      </section>

      <section id="plantas" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">O que você encontra</p>
          <h2 className="mt-3 text-4xl md:text-5xl text-primary">Variedade para todo tipo de cantinho</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map(({ icon: Icon, nome, img }) => (
            <div key={nome} className="group overflow-hidden rounded-2xl bg-card shadow-sm">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={img} alt={nome} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 p-5">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="text-lg text-primary">{nome}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <img src={f1.url} alt="Fachada da Floricultura Eufloria Garden" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          <div>
            <h2 className="text-4xl md:text-5xl">Um garden center de verdade, à beira da rodovia.</h2>
            <p className="mt-6 text-lg opacity-85">
              Nosso viveiro coberto reúne centenas de espécies — de mudas e forrações a palmeiras e plantas de interior. Venha passear entre as plantas, tirar dúvidas e levar o verde para casa.
            </p>
            <p className="mt-6 italic opacity-85">"Atendimento nota 10. Muitas variedades de plantas, podem conferir que não vão se arrepender."</p>
            <p className="mt-2 text-sm opacity-70">— Avaliação no Google</p>
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-4xl md:text-5xl text-primary">Um passeio pelo viveiro</h2>
        <div className="columns-2 gap-4 md:columns-3 [&>img]:mb-4">
          {galeria.map((g, i) => (
            <img key={i} src={g.url} alt="Plantas da Eufloria Garden" loading="lazy" className="w-full rounded-2xl" />
          ))}
        </div>
      </section>

      <section id="visite" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl text-primary">Venha nos visitar</h2>
            <ul className="mt-8 space-y-6 text-secondary-foreground">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span>Rod. Jornalista Francisco Aguirre Proença, km 16,5<br />Monte Mor - SP</span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <a href={WHATS} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">(19) 98158-6113</a>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="space-y-1">
                  {horarios.map(([d, h]) => (
                    <div key={d} className="flex gap-6"><span className="w-40">{d}</span><span className="font-semibold">{h}</span></div>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={WHATS} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground">Chamar no WhatsApp</a>
              <a href={MAPS} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground">Abrir no Google Maps</a>
            </div>
          </div>
          <iframe title="Mapa da Eufloria Garden" src={EMBED} loading="lazy" className="min-h-[380px] w-full rounded-2xl border-0" />
        </div>
      </section>

      <footer className="bg-primary py-10 text-center text-sm text-primary-foreground/80">
        © {new Date().getFullYear()} Floricultura Eufloria Garden · Monte Mor - SP
      </footer>
    </div>
  );
}
