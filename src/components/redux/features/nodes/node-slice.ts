// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactThreeFlowNode } from "../../../../models/react-three-flow-node";
import { generateUUID } from "three/src/math/MathUtils.js";

const initialState: ReactThreeFlowNode[] = [
  {
    id: generateUUID(),
    data: {
      label: "Hey this is node from state",
      color: "black",
      type: "",
    },
    height: 242,
    width: 242,
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
    type: "rectangle",
  },

  {
    id: generateUUID(),
    data: {
      label: "Hey this is node 2 from state",
      color: "black",
      type: "",
    },
    height: 242,
    width: 242,
    position: [3, 0, 8],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
    type: "rectangle",
  },
];

const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNewNodeToSceneRequest() {
      console.debug("Request received to add new node");
    },
    addNewNodeToSceneSuccess(state, action: PayloadAction<ReactThreeFlowNode>) {
      state.push(action.payload);
    },
    addNewNodeToSceneFailure() {
      console.debug("Adding node to scene failed!");
    },
    updateNodePropertiesRequest() {
      console.debug("Updating node properties request received");
    },
    updateNodePropertiesSuccess(
      state,
      action: PayloadAction<{ id: string; update: Partial<ReactThreeFlowNode> }>
    ) {
      const node = state.find((node) => node.id === action.payload.id);
      if (node) {
        Object.assign(node, action.payload.update);
      }
    },
    updateNodePropertiesFailure() {
      console.error("Updating node properties failed!");
    },
    deleteNodeRequest() {},
    deleteNodeSuccess(state, action: PayloadAction<{ id: string }>) {
      const idx = state.findIndex((node) => node.id === action.payload.id);
      if (idx !== -1) {
        state.splice(idx, 1);
      }
    },
    deleteNodeFailure() {},
  },
});

export const {
  addNewNodeToSceneRequest,
  addNewNodeToSceneSuccess,
  addNewNodeToSceneFailure,
  updateNodePropertiesRequest,
  updateNodePropertiesSuccess,
  updateNodePropertiesFailure,
  deleteNodeRequest,
  deleteNodeSuccess,
  deleteNodeFailure,
} = nodesSlice.actions;
export default nodesSlice.reducer;
