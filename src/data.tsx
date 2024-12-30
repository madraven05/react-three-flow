import { BiRectangle } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { GrRedo, GrUndo } from "react-icons/gr";
import { LuDiamond, LuTriangle } from "react-icons/lu";
import { PiParallelogramBold } from "react-icons/pi";

export const sidebarNodes = [
  {
    name: "Rectangle",
    icon: <BiRectangle />,
  },
  {
    name: "Circle",
    icon: <FaRegCircle />,
  },
  {
    name: "Diamond",
    icon: <LuDiamond />,
  },
  {
    name: "Triangle",
    icon: <LuTriangle />,
  },
  {
    name: "Parallelogram",
    icon: <PiParallelogramBold />,
  },
];

export const sidebarCanvasOperations = [
  {
    name: "Undo",
    icon: <GrUndo />,
  },
  {
    name: "Redo",
    icon: <GrRedo />,
  },
  {
    name: "Delete",
    icon: <FaRegTrashCan />,
  },
]