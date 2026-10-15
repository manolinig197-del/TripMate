
import { useState, useEffect } from "react";



const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    category: "Beach",
    description: "Tropical beaches, peaceful temples and sunsets.",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
    tag: "POPULAR",
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    category: "City",
    description: "Romantic streets, cafés and iconic landmarks.",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
    tag: "ROMANTIC",
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    category: "Adventure",
    description: "Luxury skylines and exciting desert adventures.",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
    tag: "TRENDING",
  },
  {
    id: 4,
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Nature",
    description: "Snowy peaks, mountain villages and scenic views.",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85",
    tag: "SCENIC",
  },
  {
    id: 5,
    name: "Maldives",
    country: "Maldives",
    category: "Beach",
    description: "Crystal-clear water and beautiful island stays.",
    price: 40000,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85",
    tag: "RELAX",
  },
  {
    id: 6,
    name: "Kyoto",
    country: "Japan",
    category: "Culture",
    description: "Traditional streets, gardens and ancient temples.",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85",
    tag: "CULTURE",
  },
];

const categories = [
  "All",
  "Beach",
  "City",
  "Adventure",
  "Nature",
  "Culture",
];

function TripPlanner({ destination, onClose }) {
  const [days, setDays] = useState("3");
  const [travelers, setTravelers] = useState("2");
  const [startDate, setStartDate] = useState("");
  const [activities, setActivities] = useState(["Sightseeing"]);
  const [generated, setGenerated] = useState(false);

  const activityOptions = [
    "Sightseeing",
    "Food & cafes",
    "Nature",
    "Adventure",
    "Shopping",
    "Relaxation",
  ];

  function toggleActivity(activity) {
    setActivities((current) =>
      current.includes(activity)
        ? current.filter((item) => item !== activity)
        : [...current, activity]
    );
  }

  
const itinerary = [
  {
    title: "Arrival & explore",
    description: `Arrive in ${destination.name}, check in, and explore nearby places.`,
  },
  
{
  title: activities.includes("Adventure")
    ? "Adventure awaits"
    : activities.includes("Food & cafes")
    ? "Taste the local flavors"
    : activities.includes("Nature")
    ? "Connect with nature"
    : activities.includes("Shopping")
    ? "Shopping & local finds"
    : activities.includes("Relaxation")
    ? "Relax and recharge"
    : "Discover the highlights",
  description: activities.length
    ? `Enjoy ${activities.join(", ").toLowerCase()} experiences in ${destination.name}, based on your interests.`
    : `Explore the highlights of ${destination.name} and discover places you love.`,
},

  {
    title: "A memorable day",
    description: `Enjoy local experiences and discover more of ${destination.name}.`,
  },
  {
    title: "Explore at your pace",
    description: `Visit your favorite spots and enjoy some free time in ${destination.name}.`,
  },
  {
    title: "Local culture & cuisine",
    description: `Try local food and explore cultural attractions in ${destination.name}.`,
  },
  {
    title: "Your final adventure",
    description: `Enjoy one last outing and prepare for your return journey.`,
  },
  {
    title: "Departure",
    description: `Check out and head home with wonderful memories.`,
  },
];

const plannedDays = itinerary.slice(0, Number(days));


  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="trip-modal planner-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="planner-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close planner"
        >
          ×
        </button>

        <div className="planner-heading">
          <span className="section-label">YOUR NEXT ADVENTURE</span>
          <h2 id="planner-title">Plan your trip to {destination.name}</h2>
          <p>Make a trip that feels like you.</p>
        </div>

        
<div className="planner-form">
  <label className="planner-control">
    <span>Destination</span>
    <input
      className="planner-input"
      value={`${destination.name}, ${destination.country}`}
      readOnly
    />
  </label>

  <div className="planner-fields">
    <label className="planner-control">
      <span>Start date</span>
      <input
        className="planner-input"
        type="date"
        value={startDate}
        min={new Date().toISOString().split("T")[0]}
        onChange={(event) => {
          setStartDate(event.target.value);
          setGenerated(false);
        }}
      />
    </label>

    <label className="planner-control">
      <span>Duration</span>
      <select
        className="planner-input"
        value={days}
        onChange={(event) => {
          setDays(event.target.value);
          setGenerated(false);
        }}
      >
        <option value="1">1 day</option>
        <option value="2">2 days</option>
        <option value="3">3 days</option>
        <option value="4">4 days</option>
        <option value="5">5 days</option>
        <option value="7">7 days</option>
      </select>
    </label>

    <label className="planner-control">
      <span>Travelers</span>
      <select
        className="planner-input"
        value={travelers}
        onChange={(event) => {
          setTravelers(event.target.value);
          setGenerated(false);
        }}
      >
        <option value="1">1 traveler</option>
        <option value="2">2 travelers</option>
        <option value="3">3 travelers</option>
        <option value="4">4 travelers</option>
        <option value="5">5 travelers</option>
        <option value="6">6 travelers</option>
      </select>
    </label>
  </div>

  <fieldset className="activity-fieldset">
    <legend>What do you enjoy?</legend>
    <div className="activity-options">
      {activityOptions.map((activity) => (
        <button
          type="button"
          key={activity}
          className={`category-chip ${
            activities.includes(activity) ? "active" : ""
          }`}
          onClick={() => {
            toggleActivity(activity);
            setGenerated(false);
          }}
        >
          {activities.includes(activity) ? "✓ " : "+ "}
          {activity}
        </button>
      ))}
    </div>
  </fieldset>

  <button
    type="button"
    className="search-button planner-submit"
    onClick={() => setGenerated(true)}
  >
    Create my itinerary →
  </button>
</div>


        {generated && (
          <div className="itinerary-results">
            <span className="section-label">YOUR SAMPLE ITINERARY</span>
            <h3>
              {days}-day trip · {travelers}{" "}
              {travelers === "1" ? "traveler" : "travelers"}
            </h3>
            {startDate && (
              <p className="itinerary-date">
                Starting {new Date(`${startDate}T12:00:00`).toLocaleDateString(
                  "en-IN",
                  { day: "numeric", month: "long", year: "numeric" }
                )}
              </p>
            )}

            <div className="itinerary-list">
              {itinerary.slice(0, Number(days)).map((item, index) => (
                <article className="itinerary-day" key={item.title}>
                  <span className="day-number">{index + 1}</span>
                  <div>
                    <h4>Day {index + 1}: {item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="modal-disclaimer">
              This is a sample itinerary generated in your browser. It does
              not include live bookings, verified opening hours, or travel
              times.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function App() {
  const [backendDestinations, setBackendDestinations] = useState([]);
  const allDestinations = [
  ...destinations,
  ...backendDestinations
];
  async function fetchDestinations() {
    try {
      const response = await fetch("https://tripmate-backend-nw10.onrender.com/destinations");
      const data = await response.json();
      setBackendDestinations(data.destinations);
      console.log("Destinations loaded:", data.destinations);
    } catch (error) {
      console.error("Failed to fetch destinations:", error);
    }
  }

  // Keep
  useEffect(() => {
  fetchDestinations();
}, []);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [plannerTrip, setPlannerTrip] = useState(null);
  const [budget, setBudget] = useState("Any budget");

  const filteredDestinations = allDestinations.filter((place) => {
    const matchesSearch =
      `${place.name} ${place.country}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || place.category === category;

    const matchesBudget =
      budget === "Any budget" ||
      (budget === "Under ₹30,000" && place.price < 30000) ||
      (budget === "₹30,000–₹45,000" &&
        place.price >= 30000 &&
        place.price <= 45000) ||
      (budget === "Above ₹45,000" && place.price > 45000);

    return matchesSearch && matchesCategory && matchesBudget;
  });

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  if (activePage === "booking") {
  return (
    <>
      <nav className="navbar">
        <a
          href="#"
          className="logo"
          onClick={(event) => {
            event.preventDefault();
            setActivePage("home");
          }}
        >
          ✈ TripMate<span className="logo-dot">.</span>
        </a>

        <div className="nav-links">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setActivePage("home");
            }}
          >
            Home
          </a>
        </div>
      </nav>

      <BookingPage />
    </>
  );
}

return (
  <main>
    <nav className="navbar">
  <a href="#" className="logo">
    ✈ TripMate<span className="logo-dot">.</span>
  </a>

  <div className="nav-links">
    <a href="#">Home</a>
    <a href="#destinations">Destinations</a>
    <a href="#about">About</a>

    <a
  href="#book-travel"
  className="login-button"
  onClick={(event) => {
    event.preventDefault();
    setActivePage("booking");
    window.scrollTo(0, 0);
  }}
>
  Book Travel
</a>

    <a
      href="#destinations"
      className="login-button"
      onClick={() => setPlannerTrip(destinations[0])}
    >
      Plan a Trip
    </a>
  </div>
</nav>







      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            ✦ YOUR NEXT ADVENTURE STARTS HERE
          </span>

          <h1>
            The world is
            <br />
            <span>waiting for you.</span>
          </h1>

          <p className="hero-description">
            Discover incredible places, create your perfect itinerary,
            and turn your travel dreams into unforgettable memories.
          </p>

          <div className="hero-actions">
            <a href="#destinations" className="hero-button">
              Explore destinations <span>→</span>
            </a>
            <a href="#about" className="hero-secondary">
              Discover TripMate ↓
            </a>
          </div>

          <div className="hero-note">
            <span>✦</span> Your next great story starts with a trip.
          </div>
        </div>
      </section>

      <section className="destinations" id="destinations">
        <div className="section-heading">
          <span className="section-label">YOUR NEXT ESCAPE</span>
          <h2>Find your happy place.</h2>
          <p>From peaceful beaches to buzzing cities, find your kind of adventure.</p>
        </div>

        <div className="search-panel">
          <div className="search-field">
            <label htmlFor="destination-search">Where to?</label>
            <div className="search-input-wrap">
              <span>⌕</span>
              <input
                id="destination-search"
                type="text"
                placeholder="Search destinations..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          <div className="search-field">
            <label htmlFor="budget-select">Estimated budget</label>
            <select
              id="budget-select"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            >
              <option>Any budget</option>
              <option>Under ₹30,000</option>
              <option>₹30,000–₹45,000</option>
              <option>Above ₹45,000</option>
            </select>
          </div>

          <button
            className="search-button"
            onClick={() =>
              document
                .getElementById("destination-results")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Find trips →
          </button>
        </div>

        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={`category-chip ${
                category === item ? "active" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              {item === "All" && "✦ "}
              {item}
            </button>
          ))}
        </div>

        <div className="results-heading" id="destination-results">
          <h3>Explore destinations</h3>
          <span>{filteredDestinations.length} places to discover</span>
        </div>

        <div className="destination-grid">
          {filteredDestinations.map((place) => (
            <article className="destination-card" key={place.id}>
              <div className="destination-image">
                <img src={place.image} alt={`${place.name}, ${place.country}`} />
                <span className="destination-tag">{place.tag}</span>

                <button
                  className={`favorite-button ${
                    favorites.includes(place.id) ? "favorited" : ""
                  }`}
                  onClick={() => toggleFavorite(place.id)}
                  aria-label={
                    favorites.includes(place.id)
                      ? `Remove ${place.name} from favorites`
                      : `Add ${place.name} to favorites`
                  }
                >
                  {favorites.includes(place.id) ? "♥" : "♡"}
                </button>
              </div>

              <div className="card-content">
                <span className="country-label">{place.country}</span>
                <h3>{place.name}</h3>
                <p>{place.description}</p>

                <div className="card-bottom">
                  <div className="price">
                    <span>Estimated from</span>
                    <strong>₹{place.price.toLocaleString("en-IN")}</strong>
                  </div>

                  <button
                    className="explore-button"
                    onClick={() => setSelectedTrip(place)}
                  >
                    Explore →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        


        {filteredDestinations.length === 0 && (
          <div className="empty-results">
            <span>🌍</span>
            <h3>No destinations found</h3>
            <p>Try another destination or change your filters.</p>
            <button
              className="search-button"
              onClick={() => {
                setSearch("");
                setCategory("All");
                setBudget("Any budget");
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {favorites.length > 0 && (
          <p className="favorites-note">
            ♥ You have saved {favorites.length}{" "}
            {favorites.length === 1 ? "destination" : "destinations"}.
          </p>
        )}
      </section>

      <section className="about" id="about">
        <span className="section-label">TRAVEL WITHOUT THE STRESS</span>
        <h2>Less planning stress. More living.</h2>
        <p>
          TripMate brings your travel inspiration together in one place,
          so you can spend less time searching and more time exploring.
        </p>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-icon">⌕</span>
            <h3>Discover places</h3>
            <p>Find destinations that match your travel style and budget.</p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">♡</span>
            <h3>Save favorites</h3>
            <p>Keep the places you love close while you plan your journey.</p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">✈</span>
            <h3>Plan your escape</h3>
            <p>Start turning your travel ideas into your next adventure.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <a href="#" className="footer-logo">✈ TripMate.</a>
        <p>Made for the places you'll never forget.</p>
        <span>© 2026 TripMate</span>
      </footer>

      {selectedTrip && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedTrip(null)}
        >
          <section
            className="trip-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trip-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedTrip(null)}
              aria-label="Close destination details"
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedTrip.image}
              alt={selectedTrip.name}
            />

            <div className="modal-content">
              <span className="section-label">{selectedTrip.country}</span>
              <h2 id="trip-modal-title">{selectedTrip.name}</h2>
              <p>{selectedTrip.description}</p>

              <div className="modal-price">
                Estimated starting budget
                <strong>
                  ₹{selectedTrip.price.toLocaleString("en-IN")}
                </strong>
              </div>

              <p className="modal-disclaimer">
                This is a sample estimate, not a live travel quote.
              </p>

              <button
                className="search-button modal-action"
                onClick={() => {
                  setSearch(selectedTrip.name);
                  setCategory("All");
                  setBudget("Any budget");
                  setPlannerTrip(selectedTrip);
                  setSelectedTrip(null);
                  document
                    .getElementById("destination-search")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                Select this destination →
              </button>
            </div>
          </section>
        </div>
      )}
      {plannerTrip && (
  <TripPlanner
    destination={plannerTrip}
    onClose={() => setPlannerTrip(null)}
  />
)}
    </main>
  );
}

function BookingPage() {
  const [travelType, setTravelType] = useState("flights");
  
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [searchMessage, setSearchMessage] = useState("");

  const bookingTypes = [
    { id: "flights", label: "Flights", icon: "✈" },
    { id: "trains", label: "Trains", icon: "🚆" },
    { id: "buses", label: "Buses", icon: "🚌" },
  ];

  return (
    <main className="booking-page" id="book-travel">
      <section className="booking-hero">
        <span className="section-label">YOUR JOURNEY STARTS HERE</span>
        <h1>Where will you go next?</h1>
        <p>
          Compare travel options and plan your next adventure with TripMate.
        </p>

        <div className="booking-card">
          <div className="booking-tabs">
            {bookingTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                className={`booking-tab ${
                  travelType === type.id ? "active" : ""
                }`}
                onClick={() => {
  setTravelType(type.id);
  setSearchMessage("");
}}
              >
                <span>{type.icon}</span>
                {type.label}
              </button>
            ))}
          </div>

          
<div className="booking-search">
  <div className="booking-fields">
    
<label className="booking-field">
  From
  <input
    type="text"
    placeholder={
  travelType === "flights"
    ? "Departure city or airport"
    : travelType === "trains"
      ? "Departure railway station"
      : "Departure bus stop"
}
    value={fromCity}
    onChange={(event) => {
      setFromCity(event.target.value);
      setSearchMessage("");
    }}
  />
</label>


    <button
      type="button"
      className="swap-cities"
      title="Swap departure and arrival"
      onClick={() => {
  setFromCity(toCity);
  setToCity(fromCity);
  setSearchMessage("");
}}
    >
      ⇄
    </button>

    <label className="booking-field">
  To
  <input
    type="text"
    placeholder={
  travelType === "flights"
    ? "Arrival city or airport"
    : travelType === "trains"
      ? "Arrival railway station"
      : "Arrival bus stop"
}
    value={toCity}
    onChange={(event) => {
      setToCity(event.target.value);
      setSearchMessage("");
    }}
  />
</label>
<label className="booking-field">
  Departure date
  <input
    type="date"
    value={departureDate}
    min={new Date().toISOString().split("T")[0]}
    onChange={(event) => {
      setDepartureDate(event.target.value);
      setSearchMessage("");
    }}
  />
</label>
    <label className="booking-field">
  Passengers
  <select
    value={passengers}
    onChange={(event) => {
      setPassengers(event.target.value);
      setSearchMessage("");
    }}
  >
    <option value="1">1 passenger</option>
    <option value="2">2 passengers</option>
    <option value="3">3 passengers</option>
    <option value="4">4 passengers</option>
    <option value="5">5 passengers</option>
    <option value="6">6 passengers</option>
  </select>
</label>
  </div>

  <button
  type="button"
  className="booking-search-button"
  onClick={() => {
    if (!fromCity.trim() || !toCity.trim() || !departureDate) {
      setSearchMessage("Please enter your departure city, destination, and travel date.");
      return;
    }

    if (fromCity.trim().toLowerCase() === toCity.trim().toLowerCase()) {
      setSearchMessage("Departure city and destination must be different.");
      return;
    }

    setSearchMessage(
      `Searching ${travelType} from ${fromCity.trim()} to ${toCity.trim()} on ${departureDate} for ${passengers} passenger(s).`
    );
  }}
>
  ✈ Search {travelType}
</button>

  {searchMessage && (
  <p className="booking-message" role="status">
    {searchMessage}
  </p>
)}

<p className="booking-note">
  Compare your options and continue to a booking provider.
</p>
</div>

        </div>
      </section>
    </main>
  );
}


export default App;
