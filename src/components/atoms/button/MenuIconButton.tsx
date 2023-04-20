import React, { memo, FC } from "react";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  return <IconButton aria-label="メニューボタン" onClick={props.onOpen} />;
});
