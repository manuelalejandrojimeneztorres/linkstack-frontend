import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

// interface ErrorMessageProps {
//   children: ReactNode;
// }

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="bg-red-50 text-red-600 p-3 text-sm font-bold">{children}</p>
  );
}
