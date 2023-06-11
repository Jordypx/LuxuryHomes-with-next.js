import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <h1>LUXURY HOMES</h1>
      </div>
      <div className="menu_list">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
            <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
