import LogoutButton from "@/components/LogoutButton";
import { useEffect, useState } from "react";
import { isTokenExpired } from "@/functions/tokenExpiryValidation";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import adminApi from "@/api/adminApi";

type AdminInfo = {
  name: string;
  email: string;
  role: string;
  _id: string;
};

const Dashboard = () => {
  // const [menu, setMenu] = useState(false);
  const [adminInfo, setAdminInfo] = useState({} as AdminInfo);

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
      console.log(data.data.user);
      setAdminInfo(data.data.user);
      console.log(adminInfo.name.split(" "));
    });
  }, []);
  return (
    <main className="text-white bg-customPrimary min-h-screen">
      <header className="py-1 h-12 border-b border-white/50 flex justify-between px-8 items-center">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
        <LogoutButton />
      </header>
      <aside className="w-72 border-r border-white/50 h-[calc(100vh-3rem)] py-12">
        <ul className="flex flex-col justify-center items-start px-8 ">
          <h2>Welcome {adminInfo.name.split(" ")[0]}</h2>
          <li>Dashboard</li>

          <li>Add product</li>
          <li>Edit product</li>
          <li>Delete product</li>
          <li>Orders</li>
        </ul>
      </aside>
    </main>
  );
};

export default Dashboard;
