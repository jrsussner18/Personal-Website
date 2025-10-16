function Footer() {
    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
      <footer>
        <nav className="flex justify-center">
          <div className="flex gap-8 list-none text-2xl text-white">
            <ul className="flex gap-8 list-none text-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-white hover:text-gray after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0
              after:bg-white after:transition-all after:duration-500
              hover:after:w-full ${
                navLinks.href === link.href
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </ul>
          </div>
        </nav>
        <p className="text-white text-center my-10">
          Copyright &#169; 2025 Jake Sussner. All Rights Reserved.
        </p>
      </footer>
    );
}

export default Footer;