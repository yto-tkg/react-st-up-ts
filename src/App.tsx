import axios from "axios";
import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/Todo";
import { Text } from "./Text";
// import { UserProfile } from "./UserProfile";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  //   const user = {
  //     name: "テスト",
  //     hobbies: ["テスト1", "テスト2"],
  //   };

  //   const user = {
  //     id: 1,
  //     name: "テスト",
  //     email: "test",
  //     address: "test",
  //   };

  return (
    <div className="App">
      <Text color="red" fontSize="19px" />
      {error ? (
        <p>データの取得に失敗</p>
      ) : loading ? (
        <p>Loading..</p>
      ) : (
        <>
          {userProfiles.map((user) => {
            <UserCard key={user.id} user={user} />;
          })}
        </>
      )}
      {/* <UserProfile user={user} /> */}
      <button onClick={onClickFetchUser}>データ取得</button>
      {/* {todos.map((todo) => (
        <p>
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        </p>
      ))} */}
    </div>
  );
}
