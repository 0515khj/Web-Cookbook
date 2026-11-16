import type { ComponentType } from "react";

export interface Feature {
  id: string;
  fileName: string; 
  title: string;
  description: string;
  component: ComponentType;
  code: {
    html?: string;
    css?: string;
    js?: string;
  };
}

export interface FeatureGroup {
  id: string;        
  name: string;      
  features: Feature[];
}