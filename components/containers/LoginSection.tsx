"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import circle from "@/public/images/authentication/circle.png";
import thumb from "@/public/images/authentication/thumb.png";
import numbers from "@/public/images/authentication/numbers.png";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import translations from "@/public/locals/translations";

const LoginForm = dynamic(() => import("../widgets/LoginForm"));

const LoginSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].auth;

  return (
    <section className="authentication pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="authentication__inner"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="authentication__intro">
                <Link
                  href="/"
                  aria-label={t.backToHome}
                  title={t.backToHome}
                  className="btn--primary"
                >
                  <i className="ti ti-arrow-narrow-left"></i>
                  {t.backToHome}
                </Link>
              </div>
              <div className="authentication__content mt-80">
                <h4 className="title-animation neutral-top fw-6 mb-10">
                  {t.letsGetStarted}
                </h4>
                <p>{t.signIn} to your account and join us</p>
              </div>
              <div className="authentication__form mt-55">
                <LoginForm />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div
              className="authentication__thumb text-center d-none d-lg-block"
              style={{
                backgroundImage: "url(images/authentication/thumb-sm.png)",
              }}
            >
              <div className="circle-img">
                <Image src={circle} alt="Image" />
              </div>
              <div className="thumb">
                <Image
                  src={thumb}
                  alt="Image"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                />
              </div>
              <div className="number-img">
                <Image src={numbers} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
