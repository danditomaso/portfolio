"use client";

import { useEffect } from "react";

interface ViewCountProps {
  slug: string;
}

export function ViewCounter({ slug }: ViewCountProps) {
  useEffect(() => {
    fetch("/api/viewcount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};