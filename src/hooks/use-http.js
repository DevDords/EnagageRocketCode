import { useCallback } from 'react';
//A standard http request modified to have callback on applyData which parses
//the received data into an array.
const useHttp = () => {
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      // setError(err.message || 'Something went wrong!');
    }
  }, []);

  return {
    sendRequest,
  };
};

export default useHttp;
