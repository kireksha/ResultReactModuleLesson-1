import styles from './app.module.css'
import { useState } from 'react';
export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueVaild] = useState(false);
	const date = new Date()
	let dateMonth = date.getMonth() + 1
	dateMonth < 10 && (dateMonth = `0${dateMonth}`)

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение')
		if (promptValue.length > 3) {
			setError('')
			setValue(promptValue)
			setIsValueVaild(true)
		} else {
			setError('Введенное значение должно содержать минимум 3 символа')
			setIsValueVaild(false)
		}
	}

	const onAddButtonClick = () => {
		if (value.length > 3) {
			const updatedList = [...list, { id: Date.now(), value: value }]
			setList(updatedList)
			setValue('')
			setError('')
		}
	}




	return (
		<div className={styles.app}>
			<h1 className={styles["page-heading"]}>Ввод значения</h1>
			<p className={styles["no-margin-text"]}>
				Текущее значение <code>value</code>: "<output className={styles["current-value"]}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles["buttons-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
				<button className={styles.button} disabled={!isValueVaild} onClick={onAddButtonClick}>Добавить в список</button>
			</div>
			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>
				{list.length === 0 && <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>}
				<ul className={styles.list}>
					{list.length > 0 &&
						list.map((listItem) => {
							return <li className={styles["list-item"]} key={listItem.id}>{listItem.value} {date.getDate()}.{dateMonth}.{date.getFullYear()} {String(date).slice(16, 24)}</li>
						})

					}

				</ul>
			</div>
		</div>
	)
}
