import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin // Mods"
};

export default function logPages({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
