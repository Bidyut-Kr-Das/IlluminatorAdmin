import LogoutButton from "@/components/LogoutButton";
import { useEffect, useState } from "react";
import { isTokenExpired } from "@/functions/tokenExpiryValidation";
import { toast } from "sonner";
import { Outlet, useNavigate } from "react-router-dom";
import adminApi from "@/api/adminApi";
import Sidebar from "@/components/Sidebar";

type AdminInfo = {
  firstName: string;
  email: string;
  role: string;
  _id: string;
};

const Dashboard = () => {
  const [menu, setMenu] = useState(false);
  const [adminInfo, setAdminInfo] = useState({
    firstName: ``,
    email: ``,
    _id: ``
  } as AdminInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem(`accessToken`) ||
      isTokenExpired(localStorage.getItem(`accessToken`) as string)
    ) {
      toast.error(`You need to login first`);
      navigate(`/login`);
    }

    adminApi.get(`/info`).then(({ data }) => {
      const { name, email, _id } = data.data.user;
      setAdminInfo({ ...adminInfo, firstName: name.split(" ")[0], email, _id });
      // console.log(adminInfo.name.split(" "));`
    });
  }, []);
  return (
    <main className="text-white bg-customPrimary min-h-screen overflow-hidden">
      <header className="fixed w-full py-1 h-12 border-b border-white/50 flex justify-between px-8 items-center bg-customPrimary z-50">
        <h1 className="hidden sm:block text-lg font-bold">Admin Dashboard</h1>
        <img
          src="/icons/hamBurger.svg"
          className="size-6 sm:hidden block"
          alt=""
          onClick={() => setMenu(true)}
        />
        <LogoutButton />
      </header>
      <section className="flex overflow-hidden h-screen">
        <Sidebar
          firstName={adminInfo.firstName || `Bidyut`}
          email={adminInfo.email || `bkdas2017.bd@gmail.com`}
          onClick={() => setMenu(false)}
          className={`${!menu ? `-left-72` : `left-0`} duration-150`}
        />
        <section
          className={`w-full px-8 md:px-12 py-20 overflow-auto ${menu ? `pointer-events-none` : ``} sm:pointer-events-auto`}
        >
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
