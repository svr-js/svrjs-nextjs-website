import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin // Email editor"
};

export default function logPages({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
