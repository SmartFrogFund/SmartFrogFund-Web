import { useEffect, useState } from "react";

type Props = {
    url: string;
    query: string;
};
export const usePostRequest = (url: string | URL | Request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data, loading, error, postData,
  };
};

export const useTheGraph = ({ url, query }:Props) => {
  const {
    data, loading, error, postData,
  } = usePostRequest(
    url,
  );
  useEffect(() => {
    const getData = async () => {
      try {
        postData({
          query,
        });
      } catch (err: any) {
        console.error(err);
      } finally {
        console.log("finally");
      }
    };
    getData();
  }, []);
  return { data, loading, error };
};

//  用法
//  const { data, loading, error} = useTheGraph({
//     url: "http://xxx",
//     query: `
//     {
//       lists {
//         id
//         name
//         age
//       }
//     }
//     `,
//   });
