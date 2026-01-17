import Image from "next/image";
import { beforeAfterPairs, faqs, galleryImages, howItWorks, services } from "../data/content";

export default function HomePage() {
  return (
    <main>
      <section id="top" className="hero">
        <div>
          <p className="section-description">Mobile leather and vinyl repair across the region</p>
          <h1>Restore your interiors without the hassle of replacement</h1>
          <p className="hero-intro">
            LeatherFixPro brings on-site specialists to your driveway, business, or marina with the
            tools and experience to repair scratches, sun damage, and deep cracks.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#contact">
              Book Service
            </a>
            <a className="secondary-cta" href="tel:+18009998877">
              Call Now
            </a>
          </div>
        </div>
        <div className="hero-figure">
          <Image
            src="/images/hero/hero.jpg"
            alt="Leather technician working"
            width={540}
            height={360}
            priority
          />
        </div>
      </section>

      <section id="how-it-works" className="section">
        <h2 className="section-title">How it works</h2>
        <p className="section-description">
          We keep the process simple with transparent quotes, mobile repairs, and finishes that last.
        </p>
        <div className="how-grid">
          {howItWorks.map((step) => (
            <article key={step.title} className="how-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <h2 className="section-title">Services</h2>
        <p className="section-description">
          LeatherFixPro is trained on domestic, luxury, and commercial materials—each service includes
          site-safe prep, precise dye matching, and protective finishing.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="highlight-list">
                {service.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="before-after" className="section">
        <h2 className="section-title">Before &amp; After</h2>
        <p className="section-description">
          See how we blend pigments and repair structure to make aging leather look showroom fresh again.
        </p>
        <div className="before-after-grid">
          {beforeAfterPairs.map((pair) => (
            <article key={pair.label} className="before-after-card">
              <strong>{pair.label}</strong>
              <Image
                src={pair.before}
                alt={`${pair.label} before repair`}
                width={600}
                height={320}
              />
              <Image
                src={pair.after}
                alt={`${pair.label} after repair`}
                width={600}
                height={320}
              />
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="section">
        <h2 className="section-title">Gallery</h2>
        <p className="section-description">
          Curated highlights from automotive, furniture, and marine jobs—we let the finishes speak for themselves.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.src} className="gallery-item">
              <Image src={image.src} alt={image.alt} width={400} height={280} />
            </figure>
          ))}
        </div>
      </section>

      <section id="faqs" className="section">
        <h2 className="section-title">FAQs</h2>
        <p className="section-description">
          Common questions about turnaround time, coverage, and warranty.
        </p>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <p className="section-description">
          Book consultations, request commercial estimates, or ask about our pickup and delivery partners.
        </p>
        <div className="contact-card">
          <p>
            Phone: <a href="tel:+18009998877">+1 (800) 999-8877</a>
          </p>
          <p>
            Email: <a href="mailto:info@leatherfixpro.com">info@leatherfixpro.com</a>
          </p>
          <p>Serving automotive, residential, commercial, and marine interiors from Portland to Salem.</p>
          <p>Same-day estimates, flexible appointments, and a fully mobile setup.</p>
        </div>
      </section>
    </main>
  );
}

