export interface ReactThreeFlowNode {
    id: string,
    data: {
        label: string,
        color?: string,
        type?: string,
    },
    position: [number, number, number],
    rotation: [number, number, number],
    height?: number,
    width?: number,
    type: string
}

export const createReactThreeFlowNode = ({
    id,
    data,
    position,
    rotation,
    height,
    width,
    type = "rectangle"
}: ReactThreeFlowNode): ReactThreeFlowNode => ({
    id,
    data,
    position,
    rotation,
    height,
    width,
    type
})