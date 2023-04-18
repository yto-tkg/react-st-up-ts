import React, { FC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>{user.name}</dt>
      <dt>{user.hobbies?.join("/")}</dt>
    </dl>
  );
};
