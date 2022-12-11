import type { ReactNode } from 'react';

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ children }: FormWrapperProps) {
  return (
    <div className="">
      <div className="grid h-full w-full grid-cols-1">{children}</div>
    </div>
  );
}
