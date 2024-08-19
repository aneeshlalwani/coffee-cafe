import logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
const navigationLinks = [
  {
    id: 1,
    name: "home",
    href: "/#",
  },
  {
    id: 2,
    name: "services",
    href: "/#services",
  },
  {
    id: 3,
    name: "about",
    href: "/#about",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex">
              <img src={logo} alt="Cafe Logo" className="w-14" />
              <a
                href="#"
                className="text-2xl sm:text-3xl font-bold flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                Java Junction
              </a>
            </div>
            {/* Navigation Links */}
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200 capitalize"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-primary/70 px-4 py-2 rounded-full capitalize hover:scale-105 duration-200 flex items-center gap-3">
                order
                <FaCoffee className="text-xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
