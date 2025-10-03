import Link from "next/link";
import { submitContactForm } from "@/actions/contact-form";

const ContactSection = () => {
  return (
    <section className="contact pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="fw-6 secondary-text text-xl">
                <strong>Contact</strong> Support
              </span>
              <h2
                className="title-animation fw-6 mt-25"
                style={{ textTransform: "none" }}
              >
                Let Us Help You
              </h2>
              <p className="mt-25">
                Get in touch for questions, feedback, or account support. The
                FAFAI team is here to help.
              </p>
            </div>
          </div>
        </div>

        <div className="row gutter-24">
          {/* Info column */}
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="contact__content">
              <div
                className="contact__content-single"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="icon">
                  <i className="ti ti-map-pin" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h6 className="fw-6 mb-5">Main Office</h6>
                  <div className="content-group">
                    <p>
                      <a
                        href="https://www.google.com/maps/place/Kentucky,+USA/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="contact__content-single mt-20"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="ti ti-mail-opened" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h6 className="fw-6 mb-5">Email Address</h6>
                  <div className="content-group">
                    <p>
                      <a href="mailto:support@fafai.app">support@fafai.app</a>
                    </p>
                    <p className="mt-4">
                      <a href="mailto:contact@fafai.app">contact@fafai.app</a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="contact__content-single mt-20"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="ti ti-phone-call" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h6 className="fw-6 mb-5">Phone Number</h6>
                  <div className="content-group">
                    <p>
                      <a href="tel:+13685678954">+1 (368) 567 89 54</a>
                    </p>
                    <p className="mt-4">
                      <a href="tel:+14685687934">+1 (468) 568 79 34</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-xl-8">
            <div
              className="contact__form"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="contact__form-intro">
                <h5 className="title-animation neutral-top fw-6">
                  Get In Touch
                </h5>
              </div>
              <hr className="divider mt-30 mb-40" />

              <form action={submitContactForm} noValidate>
                <div
                  className="sr-only"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px" }}
                >
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="fullName">Your Name</label>
                  <div className="input-single">
                    <input
                      type="text"
                      name="full-name"
                      id="fullName"
                      placeholder="Enter name"
                      required
                      autoComplete="name"
                      autoCapitalize="words"
                    />
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="input-wrapper mt-30">
                  <label htmlFor="cEmail">Your Email</label>
                  <div className="input-single">
                    <input
                      type="email"
                      name="c-email"
                      id="cEmail"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      inputMode="email"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      enterKeyHint="send"
                    />
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="input-wrapper mt-30">
                  <label htmlFor="phoneNumber">Your Number</label>
                  <div className="input-single">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phoneNumber"
                      placeholder="+1 (415) 555-0135"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="^(?:\+?\d[\d\s().-]{6,19})$"
                      title="7–20 chars, digits with optional +, spaces, ( ), . or -"
                    />
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="input-wrapper mt-30">
                  <label htmlFor="contactMessage">Your Message</label>
                  <div className="input-single alter-input">
                    <textarea
                      name="contact-message"
                      id="contactMessage"
                      placeholder="Your message..."
                      required
                      minLength={10}
                      rows={5}
                    ></textarea>
                    <i className="fa-solid fa-comments" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="form-cta mt-40">
                  <button
                    type="submit"
                    aria-label="Submit message"
                    title="Submit message"
                    className="btn--primary"
                  >
                    Submit Message{" "}
                    <i
                      className="ti ti-arrow-narrow-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>

                <p className="text-xs mt-12 opacity-75">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
