import Image from "next/image";
import Gallery from "../components/Gallery";
import QuoteForm from "../components/QuoteForm";
import { faqs, howItWorks, services } from "../data/content";
import { getGalleryImages } from "../lib/gallery";

export default async function HomePage() {
  const galleryImages = await getGalleryImages();
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
            <a className="secondary-cta" href="tel:+14452253515">
              Call Now
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/images/hero/hero.jpg"
            alt="Leather technician working"
            fill
            sizes="(min-width: 960px) 540px, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
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

      <Gallery images={galleryImages} />

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
        <div className="contact-grid">
          <div id="quote" className="quote-column">
            <h3>Request a Quote</h3>
            <p className="section-description">
              Share the scope of work, preferred timing, and any special requirements—we'll reply with a transparent
              plan.
            </p>
            <QuoteForm />
          </div>
          <div className="contact-card">
            <p>
              Phone: <a href="tel:+14452253515">+1 (445) 225-3515</a>
            </p>
            <p>
              Phone: <a href="tel:+12135440940">+1 (213) 544-0940</a>
            </p>
            <p>
              Email: <a href="mailto:leatherfixpro.1@gmail.com">leatherfixpro.1@gmail.com</a>
            </p>
            <p>Serving automotive, residential, commercial, and marine interiors from Portland to Salem.</p>
            <p>Same-day estimates, flexible appointments, and a fully mobile setup.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

