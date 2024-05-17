"use client";

// src/hooks/useFetch.ts
import React, { useEffect, useState } from "react";
import { message, Spin } from "antd";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("Loading status:", loading);
  }, [loading]);
  const fetchData = async (url: string, options: {}) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.message) {
        message.info(data.message);
      }
      setLoading(false);
      return data;
    } catch (error) {
      message.error("An error occurred");
      setLoading(false);
      throw error;
    }
  };

  function LoadingSpinner() {
    return <Spin spinning={loading} tip="Loading" fullscreen />;
  }

  return { fetchData, LoadingSpinner, loading };
};
