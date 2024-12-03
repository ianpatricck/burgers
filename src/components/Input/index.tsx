import { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  style?: CSSProperties;
};

export default function Input(props: InputProps) {
  return <input data-testid="input" className="input" {...props} />;
}
