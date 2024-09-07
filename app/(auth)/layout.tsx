import React from "react";
import AuthProvider from "../../components/shared/providers/AuthProvider";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
