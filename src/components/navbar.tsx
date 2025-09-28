const navLinks = [
  { href: "#hero", label: "Home", mobile: true },
  { href: "#about", label: "About", mobile: false },
  { href: "#features", label: "Categories", mobile: false },
  { href: "#timeline", label: "Timeline", mobile: true },
  { href: "#footer", label: "Contact", mobile: true },
];

type Link = {
  label: string;
  href: string;
  mobile: boolean;
};

const Navbar = ({ isMobile }: { isMobile: boolean }) => {
  const linksToShow: Link = [];
  navLinks.forEach((link) => {
    if (isMobile && link.mobile) {
      linksToShow.push(link);
    } else if (!isMobile) {
      linksToShow.push(link);
    }
  })
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] flex justify-center bg-black/40 backdrop-blur-lg rounded-full px-8 py-3 shadow-[0_0_15px_#fead51]">
      <ul className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-300">
        {linksToShow.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-[#fead51] transition-colors duration-300">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
