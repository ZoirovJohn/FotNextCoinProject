"use client";
import { useState, useRef } from "react";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const languageBoxRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

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

      {isOpen && (
        <ul className="language-select-active">
          <li>Eng</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
