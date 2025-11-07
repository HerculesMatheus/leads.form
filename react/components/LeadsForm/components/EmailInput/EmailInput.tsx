import React from 'react'
import styles from '../../styles/style.module.css'
import Props from '../../../../typings/stringProps'

export default function emailInput({ value, onChange }: Props) {
  return (
    <>
      <div id="email" className={styles.inputContainer}>
        {' '}
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={value}
          placeholder="Digite seu email"
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
