import { removeAccessToken } from "@/functions/localStorageAccess";
import usePostReq from "@/hooks/usePostReq";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "./ui/button";
import adminApi from "@/api/adminApi";

const LogoutButton = () => {
  const { postData } = usePostReq();
  const navigate = useNavigate();

  const logout = () => {
    const logoutRequest = async () => {
      await postData(`/logout`, {}, adminApi);
    };
    toast.promise(logoutRequest, {
      loading: `Logging out...`,
      success: () => {
        removeAccessToken();
        navigate(`/login`);
        return `Logged out successfully`;
      },
      error: (err: any) => {
        return err.message;
      }
    });
  };
  return (
    <Button
      variant="ghost"
      className="font-semibold sm:mr-0 -mr-6"
      onClick={logout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
