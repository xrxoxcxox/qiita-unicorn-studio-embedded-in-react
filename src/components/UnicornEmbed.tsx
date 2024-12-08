import { useRef } from "react";

interface UnicornEmbedProps {
  projectId: string;
}

export const UnicornEmbed: React.FC<UnicornEmbedProps> = ({ projectId }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
