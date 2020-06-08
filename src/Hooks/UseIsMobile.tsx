import { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const UseIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const isMobileQuery = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    setIsMobile(!isMobileQuery);
  }, [isMobileQuery]);

  return { isMobile };
};
