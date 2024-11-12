import { EngineType } from "./EngineType";

export interface SearchType {
  id: number;
  label: string;
  isSelected: boolean;
  engines: EngineType[];
}
