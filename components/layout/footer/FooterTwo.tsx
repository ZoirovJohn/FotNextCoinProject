"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import leftThumb from "@/public/images/footer/footer-two-left.png";
import rightThumb from "@/public/images/footer/footer-two-right.png";
import NewsletterTwo from "./NewsletterTwo";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useRouter } from "next/navigation";
import translations from "@/public/locals/translations";
import { useLanguage } from "@/lib/contexts/LanguageContext";

interface FooterTwoProps {
  layout?: "one" | "two";
  showNewsletter?: boolean;
}

const FooterTwo = ({
  layout = "one",
  showNewsletter = true,
}: FooterTwoProps) => {
  const currentYear = new Date().getFullYear();
  const { user, ready, logout } = useAuth();
  const router = useRouter();
  const lang = useLanguage().lang;

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <footer
      className={`footer-two${layout === "two" ? " mt-0" : ""}`}
      style={{ backgroundImage: "url(images/footer/footer-bg.png)" }}
    >
      <div className="container">
        {showNewsletter && <NewsletterTwo />}

        <div className="row gutter-60 pt-120 pb-120">
          {/* Logo & About */}
          <div className="col-12 col-lg-6 col-xl-3">
            <div
              className="footer__widget"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="footer__widget-intro">
                <Link href="/" className="logo">
                  <Image src={logo} alt="Fafai Logo" />
                </Link>
              </div>
              <div className="footer__widget-content mt-25">
                <p>
                  Fafai is an innovative Online Crypto Gaming platform designed
                  for players to play, earn, and explore blockchain gaming.
                </p>
              </div>
              <div className="social mt-35">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  href="https://x.com/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-6 col-lg-3 col-xl-2">
            <div
              className="footer__widget"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <h6 className="fw-6 neutral-top">Company</h6>
              <ul className="mt-25">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
                <li>
                  <Link href="/about-us#team">Team</Link>
                </li>
                <li>
                  <Link href="/about-us#careers">Careers</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services / Auth Links Only Changed Here */}
          <div className="col-6 col-lg-3 col-xl-2">
            <div
              className="footer__widget"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <h6 className="fw-6 neutral-top">Services</h6>
              <ul className="mt-25">
                <li>
                  <Link href="/crypto">Wallet</Link>
                </li>
                <li>
                  <Link href="/crypto#markets">Markets</Link>
                </li>
                <li>
                  <Link href="/crypto#guide">Getting Started</Link>
                </li>
                {ready && user ? (
                  <li>
                    <button className="btn--link p-0" onClick={handleLogout}>
                      {translations[lang].Logout}
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/sign-up">{translations[lang].Signup}</Link>
                    </li>
                    <li>
                      <Link href="/sign-in">{translations[lang].Signin}</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="col-6 col-lg-6 col-xl-2">
            <div
              className="footer__widget"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h6 className="fw-6 neutral-top">Resources</h6>
              <ul className="mt-25">
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/games">Games</Link>
                </li>
                <li>
                  <Link href="/lottery">Lottery</Link>
                </li>
                <li>
                  <Link href="/crypto#partners">Partners</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="col-6 col-lg-6 col-xl-3">
            <div
              className="footer__widget"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="800"
            >
              <h6 className="fw-6 neutral-top">Get In Touch</h6>
              <div className="footer__widget-content mt-25">
                <div className="footer__widget-group">
                  <div className="icon">
                    <i className="ti ti-phone-call"></i>
                  </div>
                  <div className="content">
                    <p>
                      <Link href="tel:505-555-0125">(505) 555-0125</Link>
                    </p>
                    <p className="mt-4">
                      <Link href="tel:225-555-0118">(225) 555-0118</Link>
                    </p>
                  </div>
                </div>
                <div className="footer__widget-group mt-16">
                  <div className="icon">
                    <i className="ti ti-mail-opened"></i>
                  </div>
                  <div className="content">
                    <p>
                      <Link href="mailto:example@fafai.com">
                        example@fafai.com
                      </Link>
                    </p>
                    <p className="mt-4">
                      <Link href="mailto:contact@fafai.com">
                        contact@fafai.com
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="footer__widget-group mt-16">
                  <div className="icon">
                    <i className="ti ti-map-pin"></i>
                  </div>
                  <div className="content">
                    <p>
                      <Link href="https://www.google.com/maps" target="_blank">
                        1901 Thornridge Cir. Shiloh, Hawaii 81063
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gutter-20">
                <div className="col-12 col-lg-5">
                  <div className="footer__copyright-content">
                    <p className="text-center text-lg-start">
                      Copyright &copy; <span>{currentYear}</span>{" "}
                      <Link href="/">Fafai</Link>. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="footer__copyright-list">
                    <ul className="justify-content-center justify-content-lg-end">
                      <li>
                        <Link href="contact-us">Help & Support</Link>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <Link href="terms-conditions">Terms & Conditions</Link>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <Link href="privacy-policy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-thumb" data-aos="fade-right" data-aos-duration="600">
        <Image src={leftThumb} alt="Decoration" />
      </div>
      <div
        className="right-thumb"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <Image src={rightThumb} alt="Decoration" />
      </div>
    </footer>
  );
};

export default FooterTwo;
