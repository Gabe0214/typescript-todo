import React from 'react';
import { TodoType } from '../Main/Main';

type Props = {
	todo: TodoType;
};

export const List: React.FC<Props> = ({ todo }) => {
	return <li key={todo.id}>{todo.task}</li>;
};
