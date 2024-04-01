import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: Props) => {
  return (
    <AnchorLink
      href={href}
      className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </AnchorLink>
  );
};

export default NavLink;
