export const detectSystemTheme = () => {
  if (typeof window !== "undefined") {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    return prefersDarkScheme.matches ? "dark" : "light";
  }
  return "light"; // Default to light if detection is not possible
};

// Function to set the theme
export const setTheme = (theme) => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);

    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
};

// Initialize the theme based on user preference or system preference
export const initTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemTheme = detectSystemTheme();
      setTheme(systemTheme);
    }
  }
};
