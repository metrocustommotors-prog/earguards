import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Contact Ear Guards — Questions, Feedback & Partnerships",
  description:
    "Get in touch with the Ear Guards team. Send questions, corrections, partnership inquiries, or feedback about our hearing protection guides.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: "mail",
    title: "Email",
    body: "hello@earguards.com",
    note: "Best for general questions and corrections.",
  },
  {
    icon: "doc",
    title: "Partnerships",
    body: "partners@earguards.com",
    note: "Sponsorships, sponsored content, and brand outreach.",
  },
  {
    icon: "clock",
    title: "Response time",
    body: "1–2 business days",
    note: "We read every message we receive.",
  },
];

const contactFaq = [
  {
    q: "Do you offer personalized product recommendations?",
    a: "We cannot give individual medical or fit advice, but our use-case guides are designed to point you to the right category quickly. For specific hearing concerns, consult an audiologist.",
  },
  {
    q: "How do I report an error in an article?",
    a: "Email us with the page title and the detail you believe is inaccurate. We review every correction and update guides promptly when needed.",
  },
  {
    q: "Can my brand be featured on Ear Guards?",
    a: "We consider products on merit only — placement cannot be purchased. For sponsored content or display partnerships, contact our partnerships address and we will share our guidelines.",
  },
  {
    q: "Do you accept guest articles?",
    a: "Occasionally, from qualified audiologists and safety professionals. Send a short pitch and your background, and we will follow up if it is a fit.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact us"
        description="Whether you have a question, a correction, or a partnership idea, we would genuinely like to hear from you."
        icon="mail"
      />

      <div className="container-site py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-ink">
              Send a message
            </h2>
            <p className="mt-1.5 text-brand-slate">
              Fill out the form and we will get back to you by email.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>

          {/* Channels */}
          <aside>
            <h2 className="font-display text-2xl font-bold text-brand-ink">
              Other ways to reach us
            </h2>
            <div className="mt-5 space-y-4">
              {channels.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-xl border border-brand-line bg-white p-5 shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-bluelight text-brand-blue">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-slate">
                      {c.title}
                    </p>
                    <p className="mt-0.5 font-display text-base font-bold text-brand-ink">
                      {c.body}
                    </p>
                    <p className="mt-0.5 text-sm text-brand-slate">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-brand-orange/25 bg-brand-orangelight/60 p-5">
              <Icon name="alert" className="h-7 w-7 text-brand-orange" />
              <p className="mt-2.5 font-display font-bold text-brand-ink">
                A note on medical advice
              </p>
              <p className="mt-1 text-sm text-brand-slate">
                {site.name} provides educational content only. For hearing
                loss, tinnitus, or ear pain, please see a licensed audiologist
                or physician.
              </p>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-brand-ink">
            Common questions
          </h2>
          <div className="mt-5 max-w-3xl">
            <FAQAccordion items={contactFaq} />
          </div>
        </section>
      </div>
    </div>
  );
}
