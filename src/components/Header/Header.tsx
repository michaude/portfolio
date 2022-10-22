import React from "react";
import { Link } from "react-router-dom";
import { headerItems } from "./headerItems";

// interface IProps {
//     children?: JSX.Element;
// }

const Header: React.FC = () => (
  <header className="bg-green-lightGreen h-16 flex p-4">
    <ul className="w-full flex justify-end items-center gap-8">
      {headerItems.map((headerItem) => (
        <li>
          <Link to={headerItem.link}>{headerItem.text}</Link>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
