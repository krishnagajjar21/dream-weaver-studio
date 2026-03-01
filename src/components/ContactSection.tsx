const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Let's work together ✨
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          If my work made you pause for a second and think, "Hmm, बुरा तो नहीं है," then we're already halfway there.
          I'm looking to bring my chaos and creativity to a team that wants to grow, experiment, and actually get noticed.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity"
        >
          CONTACT ME
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
