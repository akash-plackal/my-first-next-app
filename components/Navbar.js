import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <p>Navbar</p>
      <Link href="/about">about</Link>
      <Link href="/photos">photos</Link>
    </div>
  );
};

export default Navbar;
