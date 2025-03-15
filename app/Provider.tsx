"use client"

import { PropsWithChildren, useEffect, useState } from 'react';
import {HeroUIProvider} from "@heroui/react";
import { useRouter } from 'next/navigation';
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function Provider({children}:PropsWithChildren) {
    const router=useRouter();
    const [isClient, setIsClient]=useState(false);

    useEffect(()=>{
        setIsClient(true);
    },[])

    if(!isClient) return null;

  

  return (
    <HeroUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" defaultTheme="light" forcedTheme='light'>
            {children}
        </NextThemesProvider>
    </HeroUIProvider>
  );
}