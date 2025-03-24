import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    console.log("NavLink clicked"); // Debugging

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    if (onClick) {
      onClick(); // Close mobile menu if open
    }
  };

  return (
    <Link
      href={href}
      className="relative block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 
      hover:text-purple-400 transition-colors duration-300 
      after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] 
      after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
