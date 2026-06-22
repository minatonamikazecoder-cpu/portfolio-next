import React from "react";
import { Monitor, Smartphone, Database, Palette } from "lucide-react";

export function getServiceIcon(iconName: string): React.ReactNode {
  switch (iconName) {
    case "monitor":
      return <Monitor className="w-6 h-6" />;
    case "smartphone":
      return <Smartphone className="w-6 h-6" />;
    case "database":
      return <Database className="w-6 h-6" />;
    case "palette":
      return <Palette className="w-6 h-6" />;
    default:
      return <Monitor className="w-6 h-6" />;
  }
}
