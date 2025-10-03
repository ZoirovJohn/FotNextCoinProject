"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
// ⚠️ If possible, move data out of /public to /src/data
import RecentChampionsData from "@/public/data/recent-champions-data";

type TabId = string;

const RecentChampionTab = () => {
  const [activeTab, setActiveTab] = useState<TabId>("allWinners");
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Optional: quick formatter for amounts like "1,234.56"
  const fmt = (v: string | number) => {
    const n =
      typeof v === "number" ? v : Number(String(v).replace(/[^\d.-]/g, ""));
    if (Number.isNaN(n)) return String(v);
    return new Intl.NumberFormat(undefined, {
      maximumFractionDigits: 6,
    }).format(n);
  };

  const activeIndex = useMemo(
    () => RecentChampionsData.findIndex((t) => t.id === activeTab),
    [activeTab]
  );

  const handleTabClick = (id: TabId) => {
    if (id === activeTab) return;
    // Fade out current, swap, then fade in
    setIsAnimatingOut(true);
    setTimeout(() => {
      setActiveTab(id);
      requestAnimationFrame(() => setIsAnimatingOut(false));
    }, 250);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12">
          <div
            className="ch-list__btns mb-40"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            role="tablist"
            aria-label="Recent champions categories"
          >
            <ul>
              {RecentChampionsData.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => handleTabClick(tab.id)}
                    className={`ch-tab-btn ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                  >
                    <i className={`ti ${tab.icon}`} aria-hidden="true"></i>{" "}
                    {tab.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div
            className="ch-list__inner"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            {RecentChampionsData.map((tab, tIdx) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`ch-list__single ${
                    isActive ? "active" : "d-none"
                  } ${isAnimatingOut ? "animating-out" : "animating-in"}`}
                  id={`panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                >
                  <div className="row gutter-40">
                    {tab.sections.map((section, idx) => (
                      <div key={`${tab.id}-${idx}`} className="col-12 col-xl-6">
                        <div className="win-t-wrapper">
                          <div className="lottery-intro mb-30">
                            <h6 className="title-animation fw-6 neutral-top">
                              {section.title}
                            </h6>
                            <Link
                              href="/lottery-result"
                              aria-label="See all payouts"
                            >
                              See All Payouts
                            </Link>
                          </div>

                          <div className="winning-table">
                            <table>
                              <thead>
                                <tr>
                                  <th>
                                    <div className="th-wrap">
                                      User / Bet ID{" "}
                                      <span aria-hidden="true">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                      </span>
                                    </div>
                                  </th>
                                  <th>
                                    <div className="th-wrap">
                                      Game{" "}
                                      <span aria-hidden="true">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                      </span>
                                    </div>
                                  </th>
                                  <th>
                                    <div className="th-wrap">
                                      Amount (FAFAI){" "}
                                      <span aria-hidden="true">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                      </span>
                                    </div>
                                  </th>
                                  <th>
                                    <div className="th-wrap">
                                      Profit (FAFAI){" "}
                                      <span aria-hidden="true">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                      </span>
                                    </div>
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                {section.entries.map((entry, entryIdx) => (
                                  <tr key={`${tIdx}-${idx}-${entryIdx}`}>
                                    <td>
                                      <div className="author__info">
                                        <div className="thumb">
                                          <Image
                                            src={entry.image}
                                            alt={`${entry.user} avatar`}
                                            loading="lazy"
                                            sizes="48px"
                                          />
                                        </div>
                                        <div className="content">
                                          <p className="fw-6">{entry.user}</p>
                                        </div>
                                      </div>
                                    </td>

                                    <td>{entry.game}</td>

                                    <td>
                                      {typeof entry.amount === "number"
                                        ? fmt(entry.amount)
                                        : entry.amount}
                                    </td>

                                    <td>
                                      <div className="author__info">
                                        <div
                                          className="thumb"
                                          aria-hidden="true"
                                        >
                                          <Image
                                            src={entry.profitIcon}
                                            alt=""
                                            loading="lazy"
                                            sizes="24px"
                                          />
                                        </div>
                                        <div className="content">
                                          <p className="fw-6">
                                            {typeof entry.profit === "number"
                                              ? fmt(entry.profit)
                                              : entry.profit}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Optional: small transition helpers—hook up to your existing .animating class if present */
        .ch-list__single.animating-out {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .ch-list__single.animating-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 200ms ease, transform 200ms ease;
        }
      `}</style>
    </>
  );
};

export default RecentChampionTab;
