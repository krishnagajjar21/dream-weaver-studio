const reasons = [
  {
    emoji: "🔍",
    title: "Research Obsessed",
    desc: "I'll stalk— I mean research your target audience until I know them better than they know themselves.",
    badge: "Deep Diver",
    badgeColor: "bg-tag-blue text-black",
    accentBorder: "border-l-tag-blue",
  },
  {
    emoji: "🧠",
    title: "Overthinks (Strategically)",
    desc: "Love connecting the dots — social media trends ko brand ke sath connect kar lungi, without diluting brand voice.",
    badge: "Big Brain Energy",
    badgeColor: "bg-tag-pink text-black",
    accentBorder: "border-l-tag-pink",
  },
  {
    emoji: "📱",
    title: "Chronically Online",
    desc: "Internet culture, meme timing, and platform behavior — I get it quickly.",
    badge: "Trend Spotter",
    badgeColor: "bg-tag-green text-black",
    accentBorder: "border-l-tag-green",
  },
  {
    emoji: "⚡",
    title: "Creativity + Logic",
    desc: "Concept cool bhi hoga and brand ke business goal ko serve bhi karega.",
    badge: "Left + Right Brain",
    badgeColor: "bg-tag-orange text-black",
    accentBorder: "border-l-tag-orange",
  },
];

const WhyMeSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Why hire me? 🤔
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`group relative p-6 rounded-xl bg-background border border-border border-l-4 ${r.accentBorder} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{r.emoji}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold ${r.badgeColor}`}>
                  {r.badge}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
