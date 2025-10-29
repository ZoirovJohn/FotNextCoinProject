"use client";

import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import logo from "@/public/images/logo.png";
import leftThumb from "@/public/images/footer/footer-left.png";
import rightThumb from "@/public/images/footer/footer-right.png";
import arrow from "@/public/images/footer/arrow.png";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useRouter } from "next/navigation";
import translations from "@/public/locals/translations";
import { useLanguage } from "@/lib/contexts/LanguageContext";

const Footer = () => {
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
      className="footer"
      style={{ backgroundImage: "url(images/footer/footer-bg-two.png)" }}
    >
      <div className="container">
        {/* <Newsletter /> */}

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
                  <Image src={logo} alt="FAFAI Logo" />
                </Link>
              </div>
              <div className="footer__widget-content mt-25">
                <p>
                  FaFai’s Impact FaFai collaborates with global partners to
                  create a more equitable, sustainable, and inclusive economy.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
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
                  <Link href="/white-paper">White Paper</Link>
                </li>
                <li>
                  <Link href="/game">Game</Link>
                </li>
                <li>
                  <Link href="/you-tube">You Tube</Link>
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
              <ul className="mt-25">
                <li>
                  <Link href="mailto:support@fafai.io">
                    Email: support@fafai.io
                  </Link>
                </li>
                <li>
                  <Link href="https://fafai.io" target="_blank">
                    Official Site: https://fafai.io
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/fafai_Community" target="_blank">
                    Telegram: https://t.me/fafai_Community
                  </Link>
                </li>
                <li>
                  <Link href="https://fafai.io" target="_blank">
                    FAFAI Coin Website: https://fafai.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@오늘의농장"
                    target="_blank"
                  >
                    YouTube: www.youtube.com/@오늘의농장
                  </Link>
                </li>
                <li>
                  <Link href="https://eggmoney.io/" target="_blank">
                    Game Website: https://eggmoney.io
                  </Link>
                </li>
              </ul>
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
      <div className="arrow">
        <Image src={arrow} alt="Decoration" />
      </div>
    </footer>
  );
};

export default Footer;
