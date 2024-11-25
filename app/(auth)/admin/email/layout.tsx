import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin // Emails"
};

export default function logPages({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
