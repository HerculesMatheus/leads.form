import React from 'react'
import styles from '../../styles/style.module.css'
import Props from '../../../../typings/stringProps'

export default function FirstNameInput({ value, onChange }: Props) {
  return (
    <>
      <div id="first-name" className={styles.inputContainer}>
        {' '}
        <label htmlFor="firstName" className={styles.label}>
          Nome
        </label>
        <input
          id="firstName"
          type="text"
          value={value}
          placeholder="Digite seu nome"
          className={styles.input}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          required
        ></input>
      </div>
    </>
  )
}
