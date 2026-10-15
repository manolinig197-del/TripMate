
import { MapPin, Star, ArrowUpRight } from "lucide-react";

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <div className="destination-image-wrap">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
          loading="lazy"
        />

        <span className="category-badge">
          {destination.category}
        </span>

        <span className="rating-badge">
          <Star size={14} fill="currentColor" />
          {destination.rating}
        </span>
      </div>

      <div className="destination-content">
        <div className="destination-heading">
          <div>
            <h3>{destination.name}</h3>
            <p className="location">
              <MapPin size={14} />
              {destination.country}
            </p>
          </div>

          <span className="card-arrow">
            <ArrowUpRight size={19} />
          </span>
        </div>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="destination-footer">
          <div>
            <span className="price-label">Estimated budget</span>
            <p className="price">
              ₹{destination.price.toLocaleString("en-IN")}
              <span> / person</span>
            </p>
          </div>

          <button
            className="btn btn-outline"
            onClick={() =>
              alert(`Explore ${destination.name} — details coming soon!`)
            }
          >
            Explore
          </button>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
