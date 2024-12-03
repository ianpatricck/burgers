import { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  children: string | ReactNode;
  type: "button" | "submit";
  variant?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
};

export default function Button(props: ButtonProps) {
  return (
    <button data-testid="button" className="button" {...props}>
      {props.children}
    </button>
  );
}
