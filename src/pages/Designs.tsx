import { ArrowUpRight, Palette, Sparkles, Layout, PenTool, Image as ImageIcon, X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "@/components/Footer";

type GalleryImage = { src: string; caption?: string };

type DesignWork = {
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  gradient: string;
  cover?: string;
  gallery?: GalleryImage[];
  slug: string;
  bullets?: string[];
};

const designWorks: DesignWork[] = [
  {
    title: "IOT-FORENSIK: Secure Data Wiping UI",
    subtitle: "Forensic toolkit for IoT evidence acquisition",
    description:
      "Specialized desktop app for investigators to safely acquire and analyze data from wearables, smart cameras, and speakers, then generate court-ready reports.",
    bullets: [
      "Device acquisition across USB, Wi‑Fi, Ethernet",
      "Case management + report generation",
      "Risk-aware wipe and encrypted export options",
    ],
    tags: ["Product UI", "Forensics", "Dark UI", "Desktop"],
    gradient: "from-slate-800/80 to-blue-800/60",
    cover: "/designs/iot-forensik-cover.jpg",
    gallery: [
      { src: "/designs/iot-forensik-1.jpg", caption: "Device acquisition flow with wipe and export controls" },
      { src: "/designs/iot-forensik-2.jpg", caption: "Data analysis timeline with map and media filters" },
      { src: "/designs/iot-forensik-3.jpg", caption: "Case management view with filters and summaries" },
    ],
    slug: "iot-forensik",
  },
  {
    title: "Y2K Social Poster",
    subtitle: "Neon-fueled retro aesthetic with pixel accents",
    description: "A vibrant Y2K-inspired poster series featuring bold neon colors, retro pixel aesthetics, and nostalgic design elements. Created for social media campaigns with high engagement in mind, blending modern design trends with 2000s nostalgia.",
    tags: ["Poster", "Y2K", "Social", "Print"],
    gradient: "from-pink-500/25 to-cyan-400/20",
    cover: "/designs/poster-y2k.jpg",
    gallery: [
      { src: "/designs/poster-y2k.jpg", caption: "Y2K social poster — neon palette, retro pixel accents" },
      { src: "/designs/poster-y2k-1.jpg", caption: "Y2K neon portrait with glow effects" },
      { src: "/designs/poster-y2k-2.jpg", caption: "Y2K Devnagari typography poster" },
      { src: "/designs/poster-y2k-3.jpg", caption: "Y2K fashion editorial with annotations" },
    ],
    slug: "poster-y2k",
  },
  {
    title: "Ink & Ochre",
    subtitle: "Minimalist city illustration series with iconic architecture",
    description: "A cohesive illustration series celebrating Indian cities through minimalist line art and strategic use of ochre/gold accents. Each poster captures the essence of a city's cultural heritage through iconic landmarks, creating a unified brand aesthetic perfect for tourism campaigns and cultural exhibitions.",
    tags: ["Poster", "City", "Illustration", "Print"],
    gradient: "from-amber-500/30 to-orange-400/20",
    cover: "/designs/poster-inak-ochre-collection.jpg",
    gallery: [
      { src: "/designs/poster-kolkata.jpg", caption: "Kolkata — the cultural heritage" },
      { src: "/designs/poster-delhi.jpg", caption: "Delhi — The Capital City" },
      { src: "/designs/poster-karnataka.jpg", caption: "Karnataka — The Heritage State" },
      { src: "/designs/poster-mumbai.jpg", caption: "Mumbai — The Dream City" },
      { src: "/designs/poster-jaipur.jpg", caption: "Jaipur — The Pink City" },
    ],
    slug: "poster-kolkata",
  },
  {
    title: "Pizza King Menu Poster",
    subtitle: "Layered food photography with vibrant red & gold palette",
    description: "A premium pizza menu poster featuring dynamic composition with product photography, menu items, and promotional offers. Designed with warm color schemes and visual hierarchy for maximum impact across print and digital.",
    tags: ["Poster", "Food", "Campaign", "Print"],
    gradient: "from-red-600/30 to-orange-500/25",
    cover: "/designs/pizza-menu-2.jpg",
    gallery: [
      { src: "/designs/pizza-menu-1.jpg", caption: "Pizza menu poster — Super Delicious MENU with detailed product showcase" },
      { src: "/designs/pizza-menu-2.jpg", caption: "Pizza menu poster — PIZZA variant with premium presentation" },
    ],
    slug: "poster-pizza",
  },
  {
    title: "We Only Rise — Kinetic Typography",
    subtitle: "Dynamic layered typography with gradient overlays and motion blur",
    description: "A motivational kinetic typography poster featuring bold 3D text effects, layered depth, and vibrant gradient overlays. Designed with motion principles to convey energy and forward momentum through typographic composition.",
    tags: ["Poster", "Typography", "Kinetic", "Print"],
    gradient: "from-purple-600/25 to-pink-500/20",
    cover: "/designs/poster-rise.jpg",
    gallery: [
      { src: "/designs/poster-rise.jpg", caption: "Kinetic typography poster — layered 3D text with gradient effects and motion" },
    ],
    slug: "poster-rise",
  },
];

const Designs = () => {
  const [active, setActive] = useState<{ work: DesignWork; index: number } | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const openWork = (work: DesignWork, index = 0) => {
    setActive({ work, index });
    setSearchParams({ work: work.slug, i: String(index) });
  };
  const closeWork = () => {
    setActive(null);
    setSearchParams({});
  };
  const nextImage = () => {
    if (!active?.work.gallery) return;
    setActive((prev) => {
      const work = prev!.work;
      const nextIdx = ((prev!.index + 1) % (work.gallery?.length || 1));
      setSearchParams({ work: work.slug, i: String(nextIdx) });
      return { work, index: nextIdx };
    });
  };
  const prevImage = () => {
    if (!active?.work.gallery) return;
    setActive((prev) => {
      const work = prev!.work;
      const len = work.gallery?.length || 1;
      const nextIdx = (prev!.index - 1 + len) % len;
      setSearchParams({ work: work.slug, i: String(nextIdx) });
      return { work, index: nextIdx };
    });
  };

  // Keyboard shortcuts for modal navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!active) return;
      if (e.key === 'Escape') closeWork();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active]);

  // Open from deep link: ?work=slug&i=index
  useEffect(() => {
    const slug = searchParams.get('work');
    const iParam = searchParams.get('i');
    if (slug) {
      const work = designWorks.find((w) => w.slug === slug);
      if (work) {
        const idx = Math.max(0, Math.min(Number(iParam ?? 0) || 0, (work.gallery?.length || 1) - 1));
        setActive({ work, index: idx });
      }
    }
  }, [searchParams]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="px-4 sm:px-6 lg:px-10 py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex justify-start">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-sm font-semibold transition-colors"
            >
              <ChevronLeft size={16} />
              Back to Portfolio
            </button>
          </div>
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/40 bg-gradient-to-r from-primary/15 to-primary/5 text-primary text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/10">
              <Palette size={16} strokeWidth={2.5} /> Design Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Designs that <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Drive Results</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
              Strategic design solutions that blend creativity with business impact — from brand identity systems to UI/UX design for enterprise applications.
            </p>
            
            {/* Professional Stats */}
            <div className="flex items-center justify-center gap-8 pt-4 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">3+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Design Systems</div>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-500/50 transition-all">
                <Sparkles size={16} className="text-amber-500" /> Brand Identity
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-all">
                <Layout size={16} className="text-blue-500" /> UI/UX Design
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-500/50 transition-all">
                <PenTool size={16} className="text-purple-500" /> Marketing Visuals
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designWorks.map((work) => (
              <div
                key={work.title}
                className={`group relative rounded-2xl overflow-hidden hover:-translate-y-2 flex flex-col ${
                  work.slug === 'iot-forensik'
                    ? 'border-2 border-blue-400/60 dark:border-blue-600/40 bg-secondary/60 hover:border-blue-500/80 dark:hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20'
                    : work.slug === 'poster-y2k'
                    ? 'border-2 border-pink-400/60 dark:border-pink-600/40 bg-secondary/60 hover:border-pink-500/80 dark:hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/20'
                    : work.slug === 'poster-kolkata' 
                    ? 'border-2 border-amber-300/60 dark:border-amber-600/40 bg-secondary/60 hover:border-amber-400/80 dark:hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20' 
                    : work.slug === 'poster-pizza'
                    ? 'border-2 border-red-400/60 dark:border-red-600/40 bg-secondary/60 hover:border-red-500/80 dark:hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-500/20'
                    : work.slug === 'poster-rise'
                    ? 'border-2 border-purple-400/60 dark:border-purple-600/40 bg-secondary/60 hover:border-purple-500/80 dark:hover:border-purple-500/60 hover:shadow-2xl hover:shadow-white/30'
                    : 'border border-border/60 bg-secondary/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'
                } transition-all duration-300`}
              >
                {/* Image First */}
                {work.cover && (
                  <div className="relative cursor-zoom-in overflow-hidden bg-white dark:bg-slate-900" onClick={() => openWork(work, 0)}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-border shadow-lg">
                        <ImageIcon size={18} className="text-primary" />
                      </div>
                    </div>
                    <img
                      src={work.cover}
                      alt={`${work.title} cover`}
                      className="w-full h-[400px] object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="relative p-6 flex-1 flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-30 pointer-events-none`} />
                  
                  <div className="relative space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{work.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{work.subtitle}</p>
                    {work.description && (
                      <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-3">{work.description}</p>
                    )}
                  </div>

                  <div className="relative flex flex-wrap gap-2 pt-4 pb-3">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-background/90 border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="relative mt-auto pt-3 border-t border-border/50 flex items-center justify-between gap-3">
                    {work.gallery && work.gallery.length > 1 ? (
                      <>
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <ImageIcon size={13} />
                          <span className="font-medium">{work.gallery.length} images</span>
                        </p>
                        <button
                          onClick={() => openWork(work, 0)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold border border-primary/30 hover:border-primary/50 transition-all hover:scale-105"
                        >
                          View Gallery
                          <ArrowUpRight size={12} />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => openWork(work, 0)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold border border-primary/30 hover:border-primary/50 transition-all hover:scale-105 w-full justify-center"
                      >
                        View Design
                        <ArrowUpRight size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 py-12 px-6 rounded-3xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 border-2 border-primary/20">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold">Let's Create Something Amazing</h3>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Interested in seeing detailed case studies, design process, or source files? I'd love to discuss how my design approach can add value to your team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=iot23.viveknonia.33@gmail.com&su=Design%20Project%20Inquiry&body=Hi%20Vivek,%0D%0A%0D%0AI%20was%20impressed%20by%20your%20design%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project.%0D%0A%0D%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white font-bold border-2 border-purple-300/50 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 hover:-translate-y-1 transition-all"
              >
                <Palette size={20} />
                Get in Touch
                <ArrowUpRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-bold border-2 border-border hover:border-primary/40 hover:scale-105 transition-all"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-[92vw] max-w-5xl">
            <div className="absolute -top-10 right-0 flex gap-2">
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20" onClick={prevImage} aria-label="Previous">
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20" onClick={nextImage} aria-label="Next">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20" onClick={closeWork} aria-label="Close">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <img
              src={active.work.gallery?.[active.index]?.src || "/placeholder.svg"}
              alt={`${active.work.title} preview ${active.index + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-xl border border-border/60"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            <div className="mt-3 text-center text-xs text-muted-foreground">
              {active.work.title} — {active.index + 1}/{active.work.gallery?.length || 1}
              {active.work.gallery?.[active.index]?.caption ? (
                <div className="mt-1 text-[11px] text-foreground/70">{active.work.gallery?.[active.index]?.caption}</div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Designs;
