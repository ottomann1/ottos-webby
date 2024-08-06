"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

export function SecondaryButton() {
  // Step 1: Define state to manage loading status
  const [isLoading, setIsLoading] = useState(false);

  // Step 2: Handle button click to set loading state
  const handleClick = () => {
    setIsLoading(true);
  };

  // Step 3: Use useEffect to reset loading state after 1 second
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      // Cleanup function to clear timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    // Step 4: Conditionally apply isLoading prop
    <Button
      isLoading={isLoading}
      onPress={handleClick} // Use onPress for Button events
      radius="full"
      color="secondary"
    >
      Secondary
    </Button>
  );
}
