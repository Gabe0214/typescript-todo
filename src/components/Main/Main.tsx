import React from 'react';
import { allTask } from '../List/allTasks';
import { List } from '../List/List';
import styles from './Main.module.css';

export type TodoType = {
	id: number;
	task: string;
	completed: boolean;
};

const Main: React.FC = () => {
	return (
		<div className={styles['main-view']}>
			<div className='inner-content'>
				<ul className={styles['inner-content']}>{allTask.map((item) => <List todo={item} key={item.id} />)}</ul>
			</div>
		</div>
	);
};

export default Main;
