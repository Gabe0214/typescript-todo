import React, { useState } from 'react';
import { TodoType } from '../Main/Main';
import styles from './List.module.css';

type Props = {
	todo: TodoType;
	completed: () => void;
};

export const List: React.FC<Props> = ({ todo, completed }) => {
	const [ checked, setChecked ] = useState(false);

	return (
		<div
			className={styles['task-container']}
			onClick={() => {
				setChecked(!checked);
				completed();
			}}
		>
			<span className={!checked ? styles['check-custom'] : `${styles['check-custom']} ${styles['checked']}`} />
			<label className={todo.completed ? `${styles['crossed']}` : ''}>{todo.task}</label>
		</div>
	);
};
