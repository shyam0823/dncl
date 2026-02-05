import "./BookDemo.css";

export default function BookDemo() {
  return (
    <section className="bookdemo-section" id="book-demo">
      <div className="bookdemo-wrapper">
        <div className="bookdemo-container">

          {/* LEFT – FORM */}
          <div className="bookdemo-form">

            <h2 className="bookdemo-title">
              Book A <span className="bookdemo-badge">FREE</span> Demo
            </h2>

            <p className="bookdemo-subtitle">
              & Download Company Brochure
            </p>

            <div className="bookdemo-grid">
              <input placeholder="Full Name" />
              <input placeholder="Location" />
              <input placeholder="Phone Number" />
              <input placeholder="Email Address" />

              <select>
                <option>Download a Company Brochure</option>
              </select>

              <select>
                <option>Types of Products for Demo</option>
              </select>

              <input type="date" />
              <input type="time" />
            </div>

            <button className="bookdemo-btn">
              Submit
            </button>

          </div>

          {/* RIGHT – IMAGE */}
          <div className="bookdemo-image">
            <img src="/Booking.png" alt="Book Demo" />
          </div>

        </div>
      </div>
    </section>
  );
}
