import React, { ReactNode } from "react";

export interface CarModel {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLDivElement>;
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLDivElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext);
