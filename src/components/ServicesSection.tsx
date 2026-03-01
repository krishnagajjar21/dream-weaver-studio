const services = [
  "Social media copy and content strategy",
  "Ad copies (Meta and Google)",
  "Short form scripts for Youtube and Instagram",
  "Client coordination and communication",
  "SEO writing (intermediate level)",
];

const ServicesSection = () => {
  return (
    <section id="services" className="pt-6 md:pt-10 pb-20 md:pb-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-tag-green" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                I'll help you with
              </span>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-base md:text-lg text-foreground flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              If it involves thinking, researching and writing — then I am in.
              I've worked across 20+ categories including FMCG, hospitality, cafés, schools, service brands, and more.
            </p>
            <p>
              I read comments of people fighting on insta and reddit — which helps me quickly spot audience pain points, triggers, and the language they actually use.
            </p>
            <p>
              Chronically online — so internet culture, meme timing, and platform behavior? I get it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
