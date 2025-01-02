import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewNodeToSceneRequest,
  addNewNodeToSceneSuccess,
  deleteNodeSuccess,
  updateNodePropertiesRequest,
  updateNodePropertiesSuccess,
} from "./node-slice";
import { ReactThreeFlowNode } from "../../../../models/react-three-flow-node";

export const addNodeToScene = createAsyncThunk(
  "node/addNewNode",
  async (node: ReactThreeFlowNode, { dispatch }) => {
    dispatch(addNewNodeToSceneRequest());
    dispatch(addNewNodeToSceneSuccess(node));
  }
);

export const updateNodeProperties = createAsyncThunk(
  "nodes/updateNodeProperties",
  async (
    payload: { id: string; update: Partial<ReactThreeFlowNode> },
    { dispatch }
  ) => {
    dispatch(updateNodePropertiesRequest());
    dispatch(updateNodePropertiesSuccess(payload));
  }
);

export const deleteNodeFromScene = createAsyncThunk(
  "nodes/deleteNode",
  async (payload: { id: string }, { dispatch }) => {
    dispatch(deleteNodeSuccess(payload));
  }
);