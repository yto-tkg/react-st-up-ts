import React, { FC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;

  return (
    <div>
      <dl>
        <dt>{user.name}</dt>
        <dt>{user.email}</dt>
        <dt>{user.address}</dt>
      </dl>
    </div>
  );
};
