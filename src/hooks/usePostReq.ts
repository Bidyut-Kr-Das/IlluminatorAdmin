import adminApi from "@/api/adminApi";
import { useCallback, useState } from "react";

const usePostReq = () => {
  const [response, setResponse] = useState({ data: null });
  const [loading, setLoading] = useState<boolean>(false);

  const postData = useCallback(
    async <dataType>(url: string, data: dataType) => {
      try {
        setLoading(true);
        const response = await adminApi.post(url, data);
        setResponse({ data: response.data });
      } catch (error: any) {
        console.log(error);
        throw new Error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { response, loading, postData };
};
export default usePostReq;
