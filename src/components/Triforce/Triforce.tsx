import { Triangle } from "./components";
import { useSpring } from "@react-spring/three";

interface Props {
  onFinish(): void;
}

export function Triforce({ onFinish }: Props) {
  useSpring<Animation>({
    to: {
      value: 1,
    },
    from: { value: 0 },
    config: {
      duration: 5200,
    },
    onRest: onFinish,
  });

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
