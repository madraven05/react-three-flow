import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface CanvasOperationsContextType {
  isNodeGrabbed: boolean;
  setIsNodeGrabbed: Dispatch<SetStateAction<boolean>>;
  freezeOrbitControls: boolean;
  setFreezeOrbitControls: Dispatch<SetStateAction<boolean>>;
}

export const CanvasOperationsContext = createContext<
  CanvasOperationsContextType | undefined
>(undefined);

interface CanvasOperationsProviderProps {
  children: ReactNode;
}

export const CanvasOperationsProvider: React.FC<
  CanvasOperationsProviderProps
> = ({ children }) => {
  const [isNodeGrabbed, setIsNodeGrabbed] = useState(false);
  const [freezeOrbitControls, setFreezeOrbitControls] = useState(false);

  return (
    <CanvasOperationsContext.Provider
      value={{ isNodeGrabbed, setIsNodeGrabbed, freezeOrbitControls, setFreezeOrbitControls }}
    >
      {children}
    </CanvasOperationsContext.Provider>
  );
};
