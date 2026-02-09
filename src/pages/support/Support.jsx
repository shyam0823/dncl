import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import {
  parsePhoneNumber,
  isValidPhoneNumber
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  FileText,
  Search,
  Settings,
  CheckCircle
} from "lucide-react";
import "./Support.css";

export default function Support() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobile, setMobile] = useState("");
  const [barcode, setBarcode] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [ticketRaised, setTicketRaised] = useState(false);

  const currentStep = 1;

  const steps = [
    { label: "Raised", icon: FileText },
    { label: "In Review", icon: Search },
    { label: "In Progress", icon: Settings },
    { label: "Resolved", icon: CheckCircle }
  ];

  // 🔒 Country-wise HARD limit
  const handlePhoneChange = (value) => {
    if (!value) {
      setMobile(value);
      return;
    }

    try {
      const phone = parsePhoneNumber(value);

      if (phone) {
        const nationalLength = phone.nationalNumber.length;
        const possibleLengths = phone.getPossibleLengths();
        const maxAllowed = Math.max(...possibleLengths);

        if (nationalLength > maxAllowed) return;
      }

      setMobile(value);
      setPhoneError("");
    } catch {
      setMobile(value);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRaiseTicket = () => {
    if (!name.trim()) {
      alert("Please enter your full name");
      return;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!mobile || !isValidPhoneNumber(mobile)) {
      setPhoneError("Please enter a valid mobile number");
      return;
    }

    if (!barcode.trim()) {
      alert("Please enter a valid barcode");
      return;
    }

    // ✅ FRONTEND ONLY — NO BACKEND
    setTicketRaised(true);
  };

  return (
    <>
      {/* ================= TICKET SECTION ================= */}
     <section
  className="ticket-wrapper page-offset"
  id="raise-ticket"
>

        <div className="ticket-container">

          <h3 className="ticket-title">
            Raise <span>A Ticket</span>
          </h3>

          <p className="ticket-desc">
            Enter your details and product barcode to raise a support ticket.
          </p>

          {/* FORM */}
          <div className="ticket-form">
            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className={emailError ? "error" : ""}
            />

            {emailError && (
              <span className="error-text">{emailError}</span>
            )}

            <PhoneInput
              international
              defaultCountry="IN"
              value={mobile}
              onChange={handlePhoneChange}
              placeholder="Enter Mobile Number"
              className={`phone-input ${phoneError ? "error" : ""}`}
              countryCallingCodeEditable={false}
            />

            {phoneError && (
              <span className="error-text">{phoneError}</span>
            )}

            <input
              type="text"
              placeholder="Enter Product Barcode"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
            />

            <button onClick={handleRaiseTicket}>
              Verify & Raise Ticket
            </button>
          </div>

          {/* ================= STATUS ================= */}
          {ticketRaised && (
            <div className="ticket-status-card">

              {/* HEADER */}
              <div className="ticket-status-header">
                <h3>
                  ORDER <span className="order-id">#DNCL-2345</span>
                </h3>
                <p className="order-meta">
                  Expected Resolution: <strong>Within 24–48 hrs</strong>
                </p>
              </div>

              {/* PROGRESS BAR */}
              <div className="progress-track">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = index < currentStep;
                  const isActive = index === currentStep;

                  return (
                    <div className="progress-step" key={step.label}>

                      {index !== 0 && (
                        <div
                          className={`progress-line ${
                            index <= currentStep ? "active" : ""
                          }`}
                        />
                      )}

                      <div
                        className={`progress-circle ${
                          isCompleted
                            ? "completed"
                            : isActive
                            ? "active"
                            : ""
                        }`}
                      >
                        {isCompleted ? "✓" : index + 1}
                      </div>

                      <div className="progress-info">
                        <Icon size={26} />
                        <span>{step.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="ticket-status-note">
                Your ticket has been successfully raised.
                Our support team will contact you shortly.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* ================= CONTACT SUPPORT ================= */}
      <section className="support-wrapper" id="contact-support">
        <div className="support-container">

          <div className="support-left">
            <h3>
              Contact <span>Support</span>
            </h3>

            <p>
              Need to get in touch with DNCL Technologies?
              Reach out to us via email or submit your enquiry using the form.
            </p>

            <div className="support-contacts">
              <h3>Email Us</h3>
              <a href="mailto:sales@dncltech.com">sales@dncltech.com</a>
            </div>

            <div className="support-mobile">
              <h3>Phone</h3>
              <a href="tel:9448850905">+91 94488 50905</a>
            </div>
          </div>

          <div className="support-form-card">
            <h2>Need support?</h2>

            <form
              className="support-form"
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.target;
                const firstName = form.firstName.value;
                const lastName = form.lastName.value;
                const email = form.email.value;
                const message = form.message.value;

                const mailtoLink = `
mailto:sales@dncltech.com
?subject=Support Request from ${firstName} ${lastName}
&body=
Name: ${firstName} ${lastName}%0D%0A
Email: ${email}%0D%0A%0D%0A
Message:%0D%0A${message}
                `.replace(/\s/g, "");

                window.location.href = mailtoLink;
              }}
            >
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />

              <textarea
                name="message"
                placeholder="How can we help you?"
                rows="4"
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
