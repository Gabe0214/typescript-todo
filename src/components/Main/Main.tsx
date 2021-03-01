import React from 'react';
import { allTask } from '../List/allTasks';
import { List } from '../List/List';

export type TodoType = {
	id: number;
	task: string;
	completed: boolean;
};

const Main: React.FC = () => {
	return <div>{allTask.map((item) => <List todo={item} key={item.id} />)}</div>;
};

export default Main;
