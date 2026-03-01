import { ExternalLink } from "lucide-react";

const floatingTags = [
  { label: "Copywriting", color: "bg-tag-yellow text-black", rotate: "-5deg", delay: "0s", position: "top-[8%] left-[5%]" },
  { label: "SEO", color: "bg-tag-blue text-black", rotate: "3deg", delay: "0.4s", position: "top-[12%] right-[10%]" },
  { label: "Scripts", color: "bg-tag-green text-black", rotate: "-3deg", delay: "0.8s", position: "top-[25%] left-[15%]" },
  { label: "Ads", color: "bg-tag-pink text-black", rotate: "4deg", delay: "1.2s", position: "top-[5%] left-[40%]" },
  { label: "Social Media", color: "bg-tag-orange text-black", rotate: "-2deg", delay: "0.6s", position: "top-[30%] right-[5%]" },
  { label: "Strategy", color: "bg-tag-green text-black", rotate: "5deg", delay: "1s", position: "bottom-[25%] left-[8%]" },
  { label: "Branding", color: "bg-tag-blue text-black", rotate: "-4deg", delay: "0.3s", position: "bottom-[15%] right-[12%]" },
  { label: "Content", color: "bg-tag-yellow text-black", rotate: "2deg", delay: "0.9s", position: "bottom-[8%] left-[30%]" },
  { label: "Reels", color: "bg-tag-pink text-black", rotate: "-3deg", delay: "1.4s", position: "bottom-[30%] left-[45%]" },
  { label: "Captions", color: "bg-tag-orange text-black", rotate: "3deg", delay: "0.2s", position: "top-[18%] right-[30%]" },
  { label: "Hashtags", color: "bg-tag-yellow text-black", rotate: "-2deg", delay: "0.7s", position: "bottom-[10%] right-[35%]" },
  { label: "Engagement", color: "bg-tag-green text-black", rotate: "4deg", delay: "1.1s", position: "top-[40%] left-[3%]" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  { label: "Mail", href: "mailto:meghaambasana@gmail.com", icon: "✉" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-card overflow-hidden">
      {/* Floating background tags */}
      {floatingTags.map((tag) => (
        <span
          key={tag.label}
          className={`absolute ${tag.position} inline-block px-2 py-0.5 rounded-full text-[9px] font-medium ${tag.color} opacity-15 animate-float pointer-events-none select-none`}
          style={{ animationDelay: tag.delay, "--rotate": tag.rotate } as React.CSSProperties}
        >
          {tag.label}
        </span>
      ))}

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Text + Socials */}
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Let's work together ✨
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              If my work made you pause for a second and think, "Hmm, बुरा तो नहीं है," then we're already halfway there.
              I'm looking to bring my chaos and creativity to a team that wants to grow, experiment, and actually get noticed.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="mailto:meghaambasana@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity"
              >
                CONTACT ME
              </a>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-0 w-10 h-10 rounded-full border border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/5 hover:w-auto hover:px-4 transition-all duration-300 overflow-hidden justify-center"
                >
                  <span className="text-base shrink-0">{s.icon}</span>
                  <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] group-hover:ml-1.5 transition-all duration-300 text-xs font-medium whitespace-nowrap">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex flex-col items-center md:items-end order-1 md:order-2 w-full md:w-auto">
            <div className="w-full aspect-square max-w-sm md:w-64 md:h-64 rounded-2xl border border-border overflow-hidden">
              <img src="/image.png" alt="Megha Ambasana" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
