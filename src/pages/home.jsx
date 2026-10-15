
import { ArrowRight, Compass } from "lucide-react";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Compass size={18} />
            YOUR NEXT ADVENTURE STARTS HERE
          </div>

          <h1>
            Travel more.
            <br />
            <span>Worry less.</span>
          </h1>

          <p>
            Discover beautiful destinations, plan your perfect
            itinerary, and make every journey unforgettable.
          </p>

          <a href="#destinations" className="hero-button">
            Explore destinations <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="destinations" className="destinations-section">
        <p className="section-label">FIND YOUR NEXT ESCAPE</p>
        <h2>Where will you go next?</h2>
        <p>Adventure is waiting. Your journey starts here.</p>
      </section>
    </main>
  );
}

export default Home;
