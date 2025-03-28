"use client"
import { CircularProgress } from "@heroui/react";

export default function Loading() {
    return <div className="text-center h-screen flex justify-center items-center">
            <CircularProgress aria-label="Loading..." />
        </div>;
}