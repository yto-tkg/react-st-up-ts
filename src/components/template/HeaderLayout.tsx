import React, { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
});
