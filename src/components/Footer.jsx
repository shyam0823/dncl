import "./Footer.css";
import lionBanner from "../assets/madein.png";
import footerLogo from "../assets/footernew.png";
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

<div className="dncl-footer-contact-item">
  <Mail size={18} />
  <a href="mailto:sales@dncltech.com">
    sales@dncltech.com
  </a>
</div>

          <div className="dncl-footer-contact-item">
            <Phone size={18} />
            <span>+91 7358829622</span>
          </div>

          <div className="dncl-footer-contact-item">
            <MapPin size={18} />
            <span>Hosur</span>
          </div>
        </div>

        {/* ================= SUPPORT ================= */}
     <div className="dncl-footer-col dncl-footer-support">
  <h5>Support</h5>

  <a href="/support#raise-ticket" className="dncl-footer-link">
    Support Center
  </a>

  <a href="/support#raise-ticket" className="dncl-footer-link">
    Order Status
  </a>

  <a href="/book-demo" className="dncl-footer-link">
    Book a Demo
  </a>

  <div className="dncl-footer-contact-item">
    <Mail size={18} />
   <a
  href="mailto:support@dncltech.com"
  className="dncl-footer-link dncl-footer-email"
>
  support@dncltech.com
</a>

  </div>
</div>



{/* ================= ABOUT ================= */}
<div className="dncl-footer-col dncl-footer-about">
  <h5>About</h5>

  <a href="/about" className="dncl-footer-link">
    About DNCL
  </a>

  <a href="/careers" className="dncl-footer-link">
    Careers
  </a>
</div>

        {/* ================= RIGHT ================= */}
        <div className="dncl-footer-col dncl-footer-follow">
          <h5>Follow Us</h5>

          <div className="dncl-footer-social">
            <a href="#"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/company/dncl-tech/" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="https://youtube.com/@dncltech5766" target="_blank" rel="noreferrer">
              <Youtube size={18} />
            </a>
            <a href="https://www.instagram.com/dncl_technologies/" target="_blank" rel="noreferrer">
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
