export interface StatConfig {
  key: string;
  template: string;
  xOffset: number;
  yOffset: number;
  value: number;
}

export interface InteractionsPanelProps {
  title?: string;
  stats: StatConfig[];
}
