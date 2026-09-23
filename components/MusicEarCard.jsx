export default function MusicEarCard() {
  return (
    <div className="nrr-card-outer">
      <article className="nrr-card nrr-card--music" aria-label="Music ear protection counter card">
        <header className="nrr-card__header">
          <p className="nrr-card__kicker">
            Music counter card · one page · no sales pitch
          </p>
          <div className="nrr-card__title-row">
            <p className="nrr-card__title">
              Protect
              <br />
              your <span>ears.</span>
            </p>
            <p className="nrr-card__deck">
              Keep the music. For the crowd in the room, and for the player
              standing next to the source.
            </p>
          </div>
        </header>

        <div className="nrr-card__bar">
          <p className="nrr-card__bar-db">
            85 <span>dBA</span>
          </p>
          <p className="nrr-card__bar-copy">
            NIOSH’s recommended limit for an <em>8-hour</em> day. Live music
            often runs louder than that — on stage and in the room. Near{" "}
            <em>100 dBA</em>, that day’s dose is about <em>15 minutes</em>.
          </p>
        </div>

        <section className="nrr-card__section">
          <h2 className="nrr-card__h">
            <span>01</span> Why a set is loud enough to matter
          </h2>
          <div className="nrr-card__cols2">
            <div className="nrr-card__stack">
              <div>
                <h3 className="nrr-card__sub">An 8-hour average</h3>
                <p>
                  NIOSH’s recommended limit is 85 dBA over eight hours. Every
                  extra 3 dB cuts that time in half. OSHA’s legal 8-hour cap is
                  90 dBA; a hearing program starts at 85. Those rules were
                  written for workplaces. The dose math is the same in a club.
                </p>
              </div>
              <div>
                <h3 className="nrr-card__sub">The player is closer</h3>
                <p>
                  A wedge, a kit, or a small rehearsal room puts the source at
                  the ear. NIOSH has found stage and rehearsal levels that pass
                  85 dBA and can pass 100 dBA. The crowd is in the same room.
                  The musician is nearer the speaker.
                </p>
              </div>
            </div>
            <div>
              <h3 className="nrr-card__sub">A set outlasts the window</h3>
              <p>
                About an hour around 94 dBA is a full day on the NIOSH scale.
                At about 100 dBA, that allowance is roughly 15 minutes. A bar,
                a festival, or a rehearsal often runs longer than that window.
                Ringing or a muffled feeling afterward means the night was loud
                enough to count.
              </p>
            </div>
          </div>
        </section>

        <section className="nrr-card__section">
          <h2 className="nrr-card__h">
            <span>02</span> Hi-fi filters vs. foam
          </h2>
          <div className="nrr-card__types">
            <div className="nrr-card__type">
              <h3 className="nrr-card__type-name">Hi-fi</h3>
              <p className="nrr-card__type-nrr">Music you want to hear</p>
              <p className="nrr-card__type-body">
                A musician or high-fidelity filter lowers the level and keeps
                the balance closer to the mix. Vocals and pitch stay usable.
                The usual pick for a show, a rehearsal, or a demo you came to
                hear.
              </p>
              <p className="nrr-card__when">
                <span>When</span> You want the music, just quieter. Audience
                and most playing.
              </p>
            </div>
            <div className="nrr-card__type">
              <h3 className="nrr-card__type-name">Foam</h3>
              <p className="nrr-card__type-nrr">When quiet matters more</p>
              <p className="nrr-card__type-body">
                Higher labeled reduction, and it dulls the highs first. The
                mix goes muddy. Fine when the goal is simply less sound — not
                the plug you try to tune or sing through.
              </p>
              <p className="nrr-card__when">
                <span>When</span> Maximum quiet beats tone. A painful wedge, or
                a room that is simply too loud.
              </p>
            </div>
            <div className="nrr-card__type">
              <h3 className="nrr-card__type-name">Stage</h3>
              <p className="nrr-card__type-nrr">Closer than the crowd</p>
              <p className="nrr-card__type-body">
                The back of the room can often live with a moderate flat
                filter. At the wedge, the kit, or in a garage-sized rehearsal,
                start with a stronger filter you can still play through.
              </p>
              <p className="nrr-card__when">
                <span>When</span> You are next to the source. Foam only if the
                filter is not enough.
              </p>
            </div>
          </div>
        </section>

        <section className="nrr-card__section">
          <h2 className="nrr-card__h">
            <span>03</span> Where this card belongs
          </h2>
          <ol className="nrr-card__grid4">
            <li>
              <span className="nrr-card__num nrr-card__num--orange">1</span>
              <div>
                <h3>Concerts and festivals</h3>
                <p>
                  The room stays loud for the whole set. A flat filter keeps it
                  musical.
                </p>
              </div>
            </li>
            <li>
              <span className="nrr-card__num nrr-card__num--ink">2</span>
              <div>
                <h3>Loud bars and clubs</h3>
                <p>
                  A house system plus a packed room adds up over a night, not
                  one song.
                </p>
              </div>
            </li>
            <li>
              <span className="nrr-card__num nrr-card__num--orange">3</span>
              <div>
                <h3>Rehearsal rooms and the stage</h3>
                <p>
                  Small rooms and monitors. Stronger filter, still one you can
                  play through.
                </p>
              </div>
            </li>
            <li>
              <span className="nrr-card__num nrr-card__num--ink">4</span>
              <div>
                <h3>Music-store demo rooms</h3>
                <p>
                  A loud amp in a small room is still a dose. Same idea as
                  rehearsal.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <footer className="nrr-card__footer nrr-card__footer--music">
          <div className="nrr-card__foot-copy">
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
            <ul className="nrr-card__urls">
              <li>
                <span>Music hub</span>
                <a href="https://earguards.com/best-ear-protection#concerts">
                  earguards.com/best-ear-protection#concerts
                </a>
              </li>
              <li>
                <span>Concerts</span>
                <a href="https://earguards.com/blog/best-ear-protection-for-concerts">
                  earguards.com/blog/best-ear-protection-for-concerts
                </a>
              </li>
              <li>
                <span>Musicians</span>
                <a href="https://earguards.com/blog/best-ear-protection-for-musicians">
                  earguards.com/blog/best-ear-protection-for-musicians
                </a>
              </li>
            </ul>
            <p className="nrr-card__fine nrr-card__fine--left">
              Educational counter card — not medical or legal advice. Exposure
              figures from NIOSH. No products, no prices, no checkout.
            </p>
          </div>
          <div className="nrr-card__qr">
            <img
              src="/music-ear-card-qr.svg"
              alt="QR code for earguards.com/best-ear-protection#concerts"
              width="120"
              height="120"
            />
            <p>Music hub</p>
          </div>
        </footer>
      </article>
    </div>
  );
}
