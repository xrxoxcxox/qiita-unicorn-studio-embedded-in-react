import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio: {
      init(): Promise<void>;
      destroy(): void;
    };
  }
}

let isInitialized = false;

export const useUnicornStudio = () => {
  useEffect(() => {
    if (isInitialized) return;

    if (!window.UnicornStudio) {
      window.UnicornStudio = {
        init: () => Promise.resolve(),
        destroy: () => {},
      };

      const script = document.createElement("script");
      script.src = "https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js";
      script.onload = () => {
        window.UnicornStudio.init();
        isInitialized = true;
      };
      document.head.appendChild(script);
    }

    return () => {
      if (isInitialized) {
        window.UnicornStudio.destroy();
        isInitialized = false;
      }
    };
  }, []);
};
