import React from 'react'
import styles from '../../styles/style.module.css'
import NumProps from '../../../../typings/numberProps'

export default function AgeInput({ value, onChange }: NumProps) {
  return (
    <>
      <div id="age" className={styles.inputContainer}>
        {' '}
        <label htmlFor="age" className={styles.label}>
          Idade
        </label>
        <input
          id="city"
          type="number"
          value={value}
          placeholder="Digite sua idade"
          className={styles.input}
          onChange={(e) => {
            onChange(e.target.valueAsNumber)
          }}
          required
        ></input>
      </div>
    </>
  )
}
