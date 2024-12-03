import { ChangeEvent, ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  action?: string;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
};

export default function Form(props: FormProps) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}
