import React from "react";
import { TodoType } from "./types/Todo";

// props: Omit<TodoType, "id">
export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "完" : "未";
  return <p>{`${completeMark}: ${title}: ${userId}`}</p>;
};
