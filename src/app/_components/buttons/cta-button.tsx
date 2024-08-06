"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

export function CtaButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <Button
      isLoading={isLoading}
      onPress={handleClick}
      radius="full"
      className="bg-gradient-to-tr from-primary to-secondary text-white shadow-lg"
    >
      CTA
    </Button>
  );
}
