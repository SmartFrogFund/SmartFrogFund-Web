// services/api.ts
import { useFetch } from "../hooks/useFetch";

const useApi = () => {
  const { fetchData, LoadingSpinner, loading } = useFetch();

  const login = async (values: any) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}admin/login`;
    return fetchData(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const signUp = async (values: any) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}users`;
    return fetchData(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // 其他 API 调用可以在这里添加

  return {
    login,
    signUp,
    LoadingSpinner,
    loading,
    // 导出其他 API 方法
  };
};

export default useApi;
