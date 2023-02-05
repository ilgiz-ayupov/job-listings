import React from "react";
import cn from "classnames";

// Assets
import { ReactComponent as ClearIcon } from "assets/images/icon-remove.svg";

interface ChipProps {
  text: string;
  variant: "base" | "clearable";
  onClick: (event: React.MouseEvent) => void;
}

const Chip: React.FC<ChipProps> = ({ text, variant, onClick }) => {
  const chipBtnClasses =
    "rounded-md bg-cyan-200 px-3 py-2 font-bold text-cyan-600";

  switch (variant) {
    case "base": {
      return (
        <li>
          <button
            className={cn(
              chipBtnClasses,
              "transition-colors hover:bg-cyan-600 hover:text-white"
            )}
            onClick={onClick}
          >
            {text}
          </button>
        </li>
      );
    }
    case "clearable": {
      return (
        <li className={cn(chipBtnClasses, "relative overflow-hidden pr-12")}>
          <span>{text}</span>
          <button
            className="absolute bottom-0 top-0 right-0 bg-cyan-600 p-2.5 transition-colors hover:bg-cyan-900"
            onClick={onClick}
          >
            <ClearIcon />
          </button>
        </li>
      );
    }
  }

  return <li>{text}</li>;
};

export default Chip;
