import Link from 'next/link';


const NavLink = ({ href, title, onClick }) => {
  const handleClick = () => {
    console.log("NavLink clicked"); // Add this line to check if handleClick is called
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

