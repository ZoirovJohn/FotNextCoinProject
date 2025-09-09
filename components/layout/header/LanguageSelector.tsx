"use client";
import { useEffect, useRef, useState } from "react";
import LanguageData from "@/public/data/langauge-data";
import { useLanguage } from "@/lib/contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLang } = useLanguage();
  const languageBoxRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: (typeof LanguageData)[0]) => {
    setLang(item.code as any);
    setIsOpen(false);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (!storedLang) {
      localStorage.setItem("language", "en");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        languageBoxRef.current &&
        !languageBoxRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="language-box" ref={languageBoxRef}>
      <button
        className={`language-select ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
        aria-label="select language"
        title="select language"
        type="button"
      >
        <i className="ti ti-world"></i>
      </button>

      <ul className={isOpen ? "language-select-active" : ""}>
        {LanguageData.map((item) => (
          <li key={item.id} onClick={() => handleSelect(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
