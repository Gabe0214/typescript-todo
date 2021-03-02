import React, { useState } from 'react';
import { allTask } from '../List/allTasks';
import { List } from '../List/List';
import styles from './Main.module.css';

export type TodoType = {
	id: number;
	task: string;
	completed: boolean;
};

const Main: React.FC = () => {
	const [ todos, setTodos ] = useState<TodoType[]>(allTask);
	const markCompleted = (todo: TodoType) => {
		const newTodos = todos.filter((item) => {
			if (item.id == todo.id) {
				item.completed = !item.completed;
			}
			return item;
		});

		console.log(newTodos);
	};

	console.log(todos);
	return (
		<div className={styles['main-view']}>
			<div className='inner-content'>
				<ul className={styles['inner-content']}>
					{todos.map((item) => <List todo={item} completed={() => markCompleted(item)} key={item.id} />)}
				</ul>
			</div>
		</div>
	);
};

export default Main;
