import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Buy Fitness`;
  }, [title]);
};
export default UseTitle;
