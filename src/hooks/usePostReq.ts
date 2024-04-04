import axios from 'axios';
import { useCallback, useState } from 'react';

const usePostReq = (baseUrl: string) => {
  const [response, setResponse] = useState({ data: null });
  const [loading, setLoading] = useState<boolean>(false);

  const postData = useCallback(
    async <dataType>(url: string, data: dataType) => {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}${url}`, data);
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
