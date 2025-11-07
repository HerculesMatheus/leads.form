import React from 'react'
import styles from '../../styles/style.module.css'
import Props from '../../../../typings/stringProps'

export default function LastNameInput({ value, onChange }: Props) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="lastName" className={styles.label}>
        Sobrenome
      </label>
      <input
        id="lastName"
        type="text"
        value={value}
        placeholder="Digite seu sobrenome"
        className={styles.input}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  )
}
