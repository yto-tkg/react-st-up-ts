import React, { FC, memo, useCallback } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  return (
    <>
      <p>Headerページ</p>
      <p onClick={onClickHome}>ホーム</p>
      <MenuIconButton onOpen={onOpen} />
    </>
  );
});
