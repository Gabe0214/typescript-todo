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
	const [ newTodo, setNewTodo ] = useState({ id: 0, task: '', completed: false });

	const markCompleted = (todo: TodoType) => {
		todos.filter((item) => {
			if (item.id == todo.id) {
				item.completed = !item.completed;
			}
			return item;
		});
	};

	const remove = (id: number) => {
		const removedTodo = todos.filter((item) => item.id != id);
		setTodos(removedTodo);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setNewTodo({ ...newTodo, [name]: value });
	};

	const addTodo = (todo: TodoType) => {
		setTodos([ ...todos, { ...todo, id: Math.random() } ]);
	};
	return (
		<React.Fragment>
			<div className={styles['main-view']}>
				<div className='inner-content'>
					<ul className={styles['inner-content']}>
						{todos.map((item) => (
							<List todo={item} completed={() => markCompleted(item)} key={item.id} remove={() => remove(item.id)} />
						))}
					</ul>
					<div className={styles['btn-container']}>
						<button className={styles['btn']} onClick={() => addTodo(newTodo)}>
							+ New Task
						</button>
					</div>
				</div>
			</div>
			<div className={styles['input-container']}>
				<input type='text' name='task' placeholder={'New Task'} value={newTodo.task} onChange={handleChange} />
			</div>
		</React.Fragment>
	);
};

export default Main;
