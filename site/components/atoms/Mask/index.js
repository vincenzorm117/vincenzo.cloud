import { useGlobalContext } from "providers/GlobalProvider";
import cn from "classnames";

const Mask = () => {
  const { maskHook } = useGlobalContext();
  const [isOpen] = maskHook;

  const styles = isOpen
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <div
      className={cn(
        "fixed z-10 top-0 right-0 bottom-0 left-0 bg-black-default bg-opacity-60 transition-opacity duration-200",
        styles
      )}
    ></div>
  );
};

export default Mask;
