import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);
  
  return (
    <div className="menu absolute">
      <button className="btn btn-primary"onClick={() => saveWorld()}>Save</button>
      <button className="btn btn-secondary"onClick={() => resetWorld()}>Reset</button>
    </div>
  );
};
