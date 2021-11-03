import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children = null }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById("p-mask"))
    : null;
};

export default Portal;
