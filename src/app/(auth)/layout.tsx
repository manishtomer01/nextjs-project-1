import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center w-full min-h-screen items-center">
      {children}
    </main>
  );
}
