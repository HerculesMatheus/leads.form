import React from 'react'
import { StateList } from '../../../../constants/constants'
import styles from '../../styles/style.module.css'
import Props from '../../../../typings/stringProps'

export default function StateInput({ value, onChange }: Props) {
  return (
    <>
      <div id="state" className={styles.inputContainer}>
        <label htmlFor="state" className={styles.label}>
          Estado
        </label>
        <select
          id="state"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
          required
        >
          {StateList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
