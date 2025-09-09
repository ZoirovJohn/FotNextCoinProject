"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import NavbarData from "@/public/data/navbar-data";
import logo from "@/public/images/logo.png";
import TopGames from "./TopGames";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useRouter } from "next/navigation";

const HeaderClient = dynamic(() => import("./HeaderClient"));
const SearchTrigger = dynamic(() => import("./SearchTrigger"));
const OffcanvasTrigger = dynamic(() => import("./OffcanvasTrigger"));
const LanguageSelector = dynamic(
  () => import("@/components/layout/header/LanguageSelector")
);

interface HeaderProps {
  showTopGames?: boolean;
}

const Header = ({ showTopGames = true }: HeaderProps) => {
  // add auth here
  const { user, ready, logout } = useAuth();
  console.log("Header user:", user);
  console.log("Header ready:", ready);
  
  
  const router = useRouter();

  return (
    <HeaderClient>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  <div className="navbar__intro">
                    <div className="navbar-logo">
                      <Link href="/">
                        <Image src={logo} alt="Image" />
                      </Link>
                    </div>
                    {showTopGames && <TopGames />}
                  </div>

                  <div className="navbar__menu d-none d-xl-block">
                    <ul className="navbar__list">
                      {NavbarData.map((item, index) => (
                        <li className="navbar__item nav-fade" key={index}>
                          <Link href={item.path}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="navbar__options">
                    <div className="navbar__mobile-options">
                      <div className="navbar__mobile-icons">
                        <LanguageSelector />
                      </div>

                      <div className="navbar__cta d-none d-sm-flex">
                        {/* 🔑 here’s the switch */}
                        {ready && user ? (
                          <button
                            className="btn--primary"
                            onClick={async () => {
                              await logout();
                              router.refresh();
                            }}
                          >
                            Logout <i className="ti ti-arrow-narrow-right"></i>
                          </button>
                        ) : (
                          <>
                            <Link href="sign-in" className="btn--secondary">
                              Sign In{" "}
                              <i className="ti ti-arrow-narrow-right"></i>
                            </Link>
                            <Link href="sign-up" className="btn--primary">
                              Sign Up{" "}
                              <i className="ti ti-arrow-narrow-right"></i>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>

                    <OffcanvasTrigger />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderClient>
  );
};

export default Header;
