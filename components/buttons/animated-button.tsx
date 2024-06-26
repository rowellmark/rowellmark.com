"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";

interface AnimatedButtonProps {
    label: string;
    link?: string;
    className?: string;
}

export function AnimatedButton({ label, link, className }: AnimatedButtonProps) {

    // Check if link is provided
    if (!link) {
        return;
    }
    return (
        <div>
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold"
            >
                <Link href={link} className="flex items-center justify-center w-full h-full">
                    {label}
                </Link>
            </Button>
        </div>
    );
}
