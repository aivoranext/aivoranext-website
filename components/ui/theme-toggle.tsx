"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                <span className="w-4 h-4" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ scale: theme === "dark" ? 0 : 1, opacity: theme === "dark" ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Sun className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ scale: theme === "dark" ? 1 : 0, opacity: theme === "dark" ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Moon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
            </motion.div>
        </button>
    );
}
