import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    console.log("NavLink clicked"); // Checks if handleClick is called

    const target = document.querySelector(href); // Select the target element by its ID
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target element
    }

    if (onClick) {
      onClick(); // Call the onClick function passed from parent (Navbar.jsx)
    }
  };

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={handleClick} // Call handleClick when the link is clicked
    >
      {title}
    </Link>
  );
};

export default NavLink;


