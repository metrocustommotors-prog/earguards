export default function RangeNrrCard() {
  return (
    <div className="nrr-card-outer">
      <article className="nrr-card" aria-label="Ear pro NRR range counter card">
        <header className="nrr-card__header">
          <p className="nrr-card__kicker">
            Range counter card · one page · no sales pitch
          </p>
          <div className="nrr-card__title-row">
            <h1 className="nrr-card__title">
              Ear pro <span>NRR</span>
            </h1>
            <p className="nrr-card__deck">
              The number on the package is a lab score — not a gunshot rating.
              This is what it means on a SoCal firing line.
            </p>
          </div>
        </header>

        <div className="nrr-card__bar">
          <p className="nrr-card__bar-db">
            85 <span>dB</span>
          </p>
          <p className="nrr-card__bar-copy">
            Hearing damage from <em>steady</em> noise starts around here with
            enough time. A gunshot is a different animal — typically{" "}
            <em>155–168 dB peak</em>. Unprotected peaks above <em>140 dB</em>{" "}
            are already over the occupational ceiling.
          </p>
        </div>

        <section className="nrr-card__section">
          <h2 className="nrr-card__h">
            <span>01</span> Gunshot vs. range vs. that 85 dB number
          </h2>
          <div className="nrr-card__cols2">
            <div className="nrr-card__stack">
              <div>
                <h3 className="nrr-card__sub">Shop-floor 85</h3>
                <p>
                  NIOSH’s 8-hour recommended limit is 85 dBA. OSHA’s legal
                  8-hour cap is 90 dBA; they start a hearing program at 85.
                  Those are averages over a shift — grinders, HVAC, traffic.
                </p>
              </div>
              <div>
                <h3 className="nrr-card__sub">Indoors adds bounce</h3>
                <p>
                  Walls throw the blast back. Your neighbor’s muzzle and the
                  concrete are part of your dose. That is why a range posts “ear
                  pro required” and never bothers printing 85 — the number on a
                  construction poster is not the number at the firing line.
                </p>
              </div>
            </div>
            <div>
              <h3 className="nrr-card__sub">A shot is impulse</h3>
              <p>
                Pistol and rifle peaks at the ear commonly land 155–168 dB. Some
                rifles and indoor bays run higher. OSHA and NIOSH both say: do
                not take unprotected impulse peaks above 140 dB.
              </p>
            </div>
          </div>
        </section>

        <section className="nrr-card__section">
          <h2 className="nrr-card__h">
            <span>02</span> Foam vs. muffs vs. electronic
          </h2>
          <div className="nrr-card__types">
            <div className="nrr-card__type">
              <h3 className="nrr-card__type-name">Foam</h3>
              <p className="nrr-card__type-nrr">Labeled NRR ~29–33</p>
              <p className="nrr-card__type-body">
                Highest number on the package — <em>if</em> they go in. Roll
                into a crease, pull the ear up and back, insert, hold until they
                expand. A plug sitting in the bowl of the ear is jewelry, not
                protection. Muffles commands.
              </p>
              <p className="nrr-card__when">
                <span>When</span> You want max attenuation. Under muffs indoors.
                You will insert them correctly.
              </p>
            </div>
            <div className="nrr-card__type">
              <h3 className="nrr-card__type-name">Muffs</h3>
              <p className="nrr-card__type-nrr">Labeled NRR ~20–31</p>
              <p className="nrr-card__type-body">
                Consistent. You can see they are on. No insertion skill
                required. Glasses, hats, and hair break the seal — stems under
                the cups leak. Easy on and off between strings.
              </p>
              <p className="nrr-card__when">
                <span>When</span> You want honest, visible coverage. Glasses
                with thin stems, or wear the frames over the cushion.
              </p>
            </div>
            <div className="nrr-card__type">
              <h3 className="nrr-card__type-name">Electronic</h3>
              <p className="nrr-card__type-nrr">Labeled NRR often ~20–26</p>
              <p className="nrr-card__type-body">
                Lets you hear “cease fire” and the person next to you, then
                clamps down on the shot. The electronics are awareness, not extra
                NRR — the cups are the protection. Dead batteries = dumb muffs.
                Not a toy.
              </p>
              <p className="nrr-card__when">
                <span>When</span> You need commands and still have enough cup
                NRR for the gun. Best with foam underneath indoors.
              </p>
            </div>
          </div>
        </section>

        <section className="nrr-card__section">
          <h2 className="nrr-card__h">
            <span>03</span> When to double up indoors
          </h2>
          <ol className="nrr-card__grid4">
            <li>
              <span className="nrr-card__num nrr-card__num--orange">1</span>
              <div>
                <h3>Indoor rifle — yes.</h3>
                <p>
                  Foam plus muffs. NIOSH tells indoor-range workers to
                  dual-protect whenever the line is hot. Magnum, short bay, or a
                  crowded indoor pistol line: same rule.
                </p>
              </div>
            </li>
            <li>
              <span className="nrr-card__num nrr-card__num--ink">2</span>
              <div>
                <h3>Need to hear commands?</h3>
                <p>
                  Foam under electronic muffs. That is the instructor setup —
                  awareness on top, plug in the canal.
                </p>
              </div>
            </li>
            <li>
              <span className="nrr-card__num nrr-card__num--orange">3</span>
              <div>
                <h3>Do not add the two NRRs.</h3>
                <p>
                  Extra protection is about +5 dB over the better of the two —
                  not 29+25=54. Bone conduction is the ceiling.
                </p>
              </div>
            </li>
            <li>
              <span className="nrr-card__num nrr-card__num--ink">4</span>
              <div>
                <h3>
                  Outdoor, well-fitted single device can cover a quiet pistol
                  string.
                </h3>
                <p>
                  Indoor, rifle, or a hot neighbor: double up. If in doubt,
                  double up.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="nrr-card__section nrr-card__rule">
          <h2 className="nrr-card__h">
            <span>04</span> Why the package number is optimistic
          </h2>
          <p>
            NRR is an EPA lab score on a well-trained test subject. Real ears,
            real glasses, real haste at the counter: worse.
          </p>
          <p>
            <strong className="nrr-card__field">
              Field rule people actually use:
            </strong>{" "}
            labeled NRR − 7. NIOSH on foam: about half the NRR, then − 7. Muffs
            hold up better (~75%, then − 7).
          </p>
          <p>
            Fit beats the sticker. A seated NRR 29 beats a loose NRR 33. Roll,
            pull, hold — or the number on the box is fiction.
          </p>
        </section>

        <footer className="nrr-card__footer">
          <p className="nrr-card__brand">
            <span className="nrr-card__mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3.2l7.2 3.1v5.2c0 5.1-3.6 8.6-7.2 10.1-3.6-1.5-7.2-5-7.2-10.1V6.3L12 3.2z"
                  fill="currentColor"
                />
              </svg>
            </span>
            earguards.com
          </p>
          <p className="nrr-card__fine">
            Educational range card — not medical or legal advice. Typical values
            from OSHA, NIOSH, and CDC. No products, no prices, no checkout.
          </p>
        </footer>
      </article>
    </div>
  );
}
