"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Button, HeroUIProvider } from "@heroui/react";

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <HeroUIProvider>
      <NextThemesProvider {...props}>
        {children}

        <Button color="primary">ssss</Button>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
