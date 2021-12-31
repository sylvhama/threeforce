import { Triangle } from "./components";

export function Triforce() {
  return (
    <group position={[0, -5, 0]}>
      <Triangle originX={0} originY={104} destinationX={0} destinationY={24} />
      <Triangle originX={89} originY={-72} destinationX={9} destinationY={6} />
      <Triangle
        originX={-89}
        originY={-72}
        destinationX={-9}
        destinationY={6}
      />
    </group>
  );
}
