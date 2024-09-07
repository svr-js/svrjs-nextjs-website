import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin // Changelogs"
};

export default function logPages({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
