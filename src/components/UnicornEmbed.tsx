import { useRef } from "react";
import { useUnicornStudio } from "../hooks/useUnicornStudio";

interface UnicornEmbedProps {
  projectId: string;
}

export const UnicornEmbed: React.FC<UnicornEmbedProps> = ({ projectId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useUnicornStudio();

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
