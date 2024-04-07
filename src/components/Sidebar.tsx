import { VscChromeClose } from "react-icons/vsc";
import DropdownMenu, { Options } from "./DropdownMenu";
import { twMerge } from "tailwind-merge";

const Sidebar = ({
  firstName,
  email,
  onClick,
  className
}: {
  firstName: string;
  email: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <aside
      className={twMerge(
        `w-72 flex flex-col justify-between border-r border-white/50 h-screen sm:h-[calc(100vh-3rem)] pt-4 sm:pt-12 overflow-hidden px-8  sm:sticky z-50 top-0 sm:mt-12 bg-customPrimary fixed `,
        className
      )}
    >
      <section className="flex flex-col gap-12 overflow-auto">
        <h2 className="font-bold text-xl sm:hidden flex items-center justify-between">
          Admin Dashboard{" "}
          <VscChromeClose
            onClick={onClick}
            className="rounded-full p-1 focus:ring-2 hover:ring-2 ring-white/50 cursor-pointer"
          />
        </h2>
        <ul className="flex flex-col justify-center items-start  gap-8 py-8">
          <li className="font-bold text-lg">
            <DropdownMenu heading="Dashboard">
              <Options link="/">Orders</Options>
            </DropdownMenu>
          </li>
          <li className="font-bold text-lg">
            <DropdownMenu open={true} heading="Products">
              <Options link="/dashboard/addProduct" onClick={onClick}>
                Add Product
              </Options>
              <Options link="/" onClick={onClick}>
                Edit Product
              </Options>
              <Options link="/" onClick={onClick}>
                Delete Product
              </Options>
            </DropdownMenu>
          </li>
        </ul>
      </section>
      <section className=" w-72 -ml-8 px-8 border-t border-white/50 py-4">
        <h3 className="text-lg tracking-wider font-bold flex gap-4">
          Welcome {firstName}
        </h3>
        <h4 className="text-sm text-white/50">{email}</h4>
      </section>
    </aside>
  );
};

export default Sidebar;
