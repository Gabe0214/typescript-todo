import React, { useState } from 'react';
import { TodoType } from '../Main/Main';
import styles from './List.module.css';
type Props = {
	todo: TodoType;
};

export const List: React.FC<Props> = ({ todo }) => {
	const [ checked, setChecked ] = useState(false);

	return (
		<div className={styles['task-container']} onClick={() => setChecked(!checked)}>
			{/* <input
				className={styles['check-custom']}
				type='radio'
				id={`${todo.id}`}
				checked={checked}
				onClick={() => setChecked(!checked)}
			/> */}
			<span className={!checked ? styles['check-custom'] : `${styles['check-custom']} ${styles['checked']}`} />
			<label>{todo.task}</label>
		</div>
	);
};
