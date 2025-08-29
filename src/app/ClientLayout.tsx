"use client";
import Footer from "@/components/shered/footer/Footer";
import Navbar from "@/components/shered/navbar/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isDashboard = pathName.startsWith("/dashboard");

  return (
    <div>
      {!isDashboard && <Navbar />}
      <main> {children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
}
