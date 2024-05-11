import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">{children}</div>
  );
}

export default AdminLayout;
