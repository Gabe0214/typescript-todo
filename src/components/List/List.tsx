import React, { useState } from 'react';
import { TodoType } from '../Main/Main';
import styles from './List.module.css';
import { BsTrash } from 'react-icons/bs';

type Props = {
	todo: TodoType;
	completed: () => void;
	remove: () => void;
};

export const List: React.FC<Props> = ({ todo, completed, remove }) => {
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
			<span className={styles['trash-icon']} onClick={remove}>
				{todo.completed ? <BsTrash color={'#9ea4c3'} /> : ''}
			</span>
		</div>
	);
};
