import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import leftThumb from "@/public/images/footer/footer-left.png";
import rightThumb from "@/public/images/footer/footer-right.png";
import arrow from "@/public/images/footer/arrow.png";
import { handleNewsletterSubscribe } from "@/actions/subscribe-email";

const FooterThree = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer
			className="footer footer-three footer-three-alternate pt-120"
			style={{ backgroundImage: "url(images/footer/footer-bg.png)" }}
		>
			<div className="container">
				<div className="row align-items-center gutter-24">
					<div className="col-12 col-lg-7 col-xxl-6">
						<div className="footer__newsletter-content">
							<h4 className="title-animation neutral-top fw-6 mb-5">
								Subscribe to Our Newsletter
							</h4>
							<p>Regular inspections and feedback mechanisms</p>
						</div>
					</div>
					<div className="col-12 col-lg-5 col-xxl-5 offset-xxl-1">
						<div className="footer__newsletter-form">
							<form action={handleNewsletterSubscribe}>
								<input
									type="email"
									required
									name="subscribe-email"
									id="subscribeEmail"
									placeholder="Enter Email"
								/>
								<button
									type="submit"
									aria-label="subscribe to our newsletter"
									title="subscribe to our newsletter"
									className="btn--tertiary"
								>
									<i className="fa-solid fa-paper-plane"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<hr className="divider" />
					</div>
				</div>
				<div className="row gutter-60">
					<div className="col-12 col-lg-6 col-xl-3">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
						>
							<div className="footer__widget-intro">
								<Link href="/" className="logo">
									<Image src={logo} alt="Image" />
								</Link>
							</div>
							<div className="footer__widget-content mt-25">
								<p>
									Betwins is an innovative Online Crypto Gaming platform
									designed for players.
								</p>
							</div>
							<div className="social mt-35">
								<Link
									href="https://www.facebook.com/"
									target="_blank"
									aria-label="share us on facebook"
									title="facebook"
								>
									<i className="fa-brands fa-facebook-f"></i>
								</Link>
								<Link
									href="https://instagram.com/"
									target="_blank"
									aria-label="share us on instagram"
									title="instagram"
								>
									<i className="fa-brands fa-instagram"></i>
								</Link>
								<Link
									href="https://x.com/"
									target="_blank"
									aria-label="share us on twitter"
									title="twitter"
								>
									<i className="fa-brands fa-twitter"></i>
								</Link>
								<Link
									href="https://www.linkedin.com/"
									target="_blank"
									aria-label="share us on linkedin"
									title="linkedin"
								>
									<i className="fa-brands fa-linkedin-in"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-xl-2">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="200"
						>
							<div className="footer__widget-intro">
								<h6 className="fw-6 neutral-top">Quick Links</h6>
							</div>
							<div className="footer__widget-content mt-25">
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="about-us">About Us</Link>
									</li>
									<li>
										<Link href="games">Games</Link>
									</li>
									<li>
										<Link href="lottery">Lottery</Link>
									</li>
									<li>
										<Link href="blog">Blog</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-xl-2">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="400"
						>
							<div className="footer__widget-intro">
								<h6 className="fw-6 neutral-top">Categories</h6>
							</div>
							<div className="footer__widget-content mt-25">
								<ul>
									<li>
										<Link href="lottery-contest">Jackpot</Link>
									</li>
									<li>
										<Link href="lottery-contest">Slots</Link>
									</li>
									<li>
										<Link href="lottery-contest">Casino</Link>
									</li>
									<li>
										<Link href="lottery-contest">Gambling</Link>
									</li>
									<li>
										<Link href="lottery">Lottery</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xl-2">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="600"
						>
							<div className="footer__widget-intro">
								<h6 className="fw-6 neutral-top">Quick Links</h6>
							</div>
							<div className="footer__widget-content mt-25">
								<ul>
									<li>
										<Link href="faq">FAQ&apos;s</Link>
									</li>
									<li>
										<Link href="contact-us">Contact Us</Link>
									</li>
									<li>
										<Link href="sign-up">Create Account</Link>
									</li>
									<li>
										<Link href="sign-in">Sign In</Link>
									</li>
									<li>
										<Link href="error">Error</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xl-3">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="800"
						>
							<div className="footer__widget-intro">
								<h6 className="fw-6 neutral-top">Get In Touch</h6>
							</div>
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
											<Link href="mailto:example@betwins.com">
												example@betwins.com
											</Link>
										</p>
										<p className="mt-4">
											<Link href="mailto:contact@betwins.com">
												contact@betwins.com
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
											<Link
												href="https://www.google.com/maps/place/Kentucky,+USA/@37.8172108,-87.087054,8z/data=!3m1!4b1!4m6!3m5!1s0x8842734c8b1953c9:0x771f6f4ec5ccdffc!8m2!3d37.8393332!4d-84.2700179!16zL20vMDQ5OHk?entry=ttu"
												target="_blank"
											>
												1901 Thornridge Cir. Shiloh, Hawaii 81063
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="footer__copyright mt-80">
							<div className="row align-items-center gutter-20">
								<div className="col-12 col-lg-5">
									<div className="footer__copyright-content">
										<p className="text-center text-lg-start">
											Copyright &copy; <span>{currentYear}</span>{" "}
											<Link href="/">Betwins</Link>. All rights reserved.
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
				<Image src={leftThumb} alt="Image" />
			</div>
			<div
				className="right-thumb"
				data-aos="fade-left"
				data-aos-duration="600"
				data-aos-delay="300"
			>
				<Image src={rightThumb} alt="Image" />
			</div>
			<div className="arrow">
				<Image src={arrow} alt="Image" />
			</div>
		</footer>
	);
};

export default FooterThree;
