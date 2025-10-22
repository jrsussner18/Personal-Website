import { useState } from "react";

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((s) => !s)}
          className="flex flex-col justify-between h-6 w-8"
        >
          <span
            className={`block h-[2px] bg-white transition-transform ${
              menuOpen ? "translate-y-[12px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-transform ${
              menuOpen ? "translate-y-[-10px] -rotate-45" : ""
            }`}
          />
        </button>

        <div
          className={`fixed top-[64px] left-0 right-0 bg-black overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col text-lg text-white w-full">
            <li>
              <a
                className="block px-6 py-3"
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block px-6 py-3"
                href="#experience"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="block px-6 py-3"
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block px-6 py-3"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
