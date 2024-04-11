import { AxiosInstance } from "axios";
import { useCallback, useState } from "react";

const usePostReq = () => {
  const [response, setResponse] = useState({ data: null });
  const [loading, setLoading] = useState<boolean>(false);

  const postData = useCallback(
    async <dataType>(url: string, data: dataType, api: AxiosInstance) => {
      try {
        setLoading(true);
        const response = await api.post(url, data);
        setResponse({ data: response.data });
      } catch (error: any) {
        // console.log(error);
        if (error.response === undefined)
          throw new Error(`Can not connect to the server!`);
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
