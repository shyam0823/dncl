import "./Footer.css";
import lionBanner from "../assets/madein.png";
import footerLogo from "../assets/footernew.png";
import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="dncl-footer">
      <div className="dncl-footer-container">

        {/* ================= LEFT ================= */}
        <div className="dncl-footer-col">
          
          {/* ✅ IMAGE LOGO INSTEAD OF TEXT */}
          <div className="dncl-footer-brand">
            <img src={footerLogo} alt="DNCL Technologies" />
          </div>

          <p className="dncl-footer-address">
            Indira Nagar,<br />
            Hosur, Tamil Nadu – 635109
          </p>

          <p className="dncl-footer-legal">
            CIN: U72900KA2016PTC093521<br />
            GST: 33AAFCD7180G1ZQ
          </p>
        </div>

       {/* ================= MIDDLE ================= */}
<div className="dncl-footer-col dncl-footer-contact">
  <h5>Contact</h5>

  {/* Navigate to Contact Support section */}
  <Link
    to="/support#contact-support"
    className="dncl-footer-link"
  >
    Contact Support
  </Link>

  <div className="dncl-footer-contact-item">
    <Mail size={18} />
    <a href="mailto:sales@dncltech.com">
      sales@dncltech.com
    </a>
  </div>

  <div className="dncl-footer-contact-item">
    <Phone size={18} />
    <a href="tel:+917358829622">
      +91 73588 29622
    </a>
  </div>

  <div className="dncl-footer-contact-item">
    <MapPin size={18} />
    <span>Hosur</span>
  </div>
</div>

    <div className="dncl-footer-col dncl-footer-support">
  <h5>Support</h5>

  <Link to="/support#raise-ticket" className="dncl-footer-link">
    Support Center
  </Link>

  <Link to="/support#raise-ticket" className="dncl-footer-link">
    Order Status
  </Link>

  <Link to="/book-demo" className="dncl-footer-link">
    Book a Demo
  </Link>

  <div className="dncl-footer-contact-item">
    <Mail size={18} />
    <a href="mailto:support@dncltech.com">
      support@dncltech.com
    </a>
  </div>
</div>


{/* ================= ABOUT ================= */}
<div className="dncl-footer-col dncl-footer-about">
  <h5>About</h5>

  <Link to="/about" className="dncl-footer-link">
    About DNCL
  </Link>

  <Link to="/careers" className="dncl-footer-link">
    Careers
  </Link>
</div>


        {/* ================= RIGHT ================= */}
        <div className="dncl-footer-col dncl-footer-follow">
          <h5>Follow Us</h5>

          <div className="dncl-footer-social">
            <a href="https://www.facebook.com/dncltechnologies"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/company/dncl-tech/" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="https://youtube.com/@dncltech5766" target="_blank" rel="noreferrer">
              <Youtube size={18} />
            </a>
            <a href="https://www.instagram.com/dncltechnologies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
              <Instagram size={18} />
            </a>
          </div>

          {/* MAKE IN INDIA */}
          <div className="dncl-footer-makeinindia">
  <img src={lionBanner} alt="Make in India" />
</div>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="dncl-footer-bottom">
        © {new Date().getFullYear()} DNCL Technologies Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
