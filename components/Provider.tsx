"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider"

type Props = {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;