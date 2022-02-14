import React, { ForwardedRef, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props, ref: ForwardedRef<HTMLDivElement>) => (
  <div ref={ref}>{children}</div>
);

const ModalWrapper = React.forwardRef(Modal);
export default ModalWrapper;
