import React, { useState } from "react";
import { BsArrowDownLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const DropdownMenu = ({
  children,
  heading,
  open
}: {
  children: React.ReactNode;
  heading: string;
  open?: boolean;
}) => {
  const [menu, setMenu] = useState<boolean>(open || false);
  return (
    <>
      <h6
        className="flex gap-2 hover:underline justify-start items-center select-none cursor-pointer "
        onClick={() => setMenu(!menu)}
      >
        <BsArrowDownLeft
          className={`duration-150  ${menu ? `-rotate-180` : `rotate-0`}`}
        />
        {` ${heading}`}
      </h6>
      <ul className={`${!menu ? `hidden` : `block`} flex flex-col gap-4 mt-4`}>
        {children}
      </ul>
    </>
  );
};

export const Options = ({
  link,
  children,
  onClick
}: {
  link: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <li
      className="font-normal text-base pl-12 hover:underline underline-offset-2"
      onClick={onClick}
    >
      <Link to={link}>{children}</Link>
    </li>
  );
};

export default DropdownMenu;
