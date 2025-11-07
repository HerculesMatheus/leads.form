import React from 'react'
import styles from '../../styles/style.module.css'
import Props from '../../../../typings/stringProps'

export default function CityInput({ value, onChange }: Props) {
  return (
    <>
      <div id="city" className={styles.inputContainer}>
        {' '}
        <label htmlFor="city" className={styles.label}>
          Cidade
        </label>
        <input
          id="city"
          type="text"
          value={value}
          placeholder="Digite sua cidade"
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
