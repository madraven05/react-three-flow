import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type MoveNodeOperation = {
  active: boolean;
  nodeId?: string;
  initialPos?: [number, number, number];
};

interface CanvasOperationsContextType {
  moveNodeOperation: MoveNodeOperation;
  setMoveNodeOperation: Dispatch<SetStateAction<MoveNodeOperation>>;
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
  const [moveNodeOperation, setMoveNodeOperation] = useState<MoveNodeOperation>(
    {
      active: false,
    }
  );
  const [freezeOrbitControls, setFreezeOrbitControls] = useState(false);

  return (
    <CanvasOperationsContext.Provider
      value={{
        moveNodeOperation,
        setMoveNodeOperation,
        freezeOrbitControls,
        setFreezeOrbitControls,
      }}
    >
      {children}
    </CanvasOperationsContext.Provider>
  );
};
