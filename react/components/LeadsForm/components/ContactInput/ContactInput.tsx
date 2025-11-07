import React from 'react'
import styles from '../../styles/style.module.css'
import Props from '../../../../typings/stringProps'
import { formatPhone } from '../../../../utils/utils'

export default function ContactInput({ value, onChange }: Props) {
  return (
    <>
      <div id="contact" className={styles.inputContainer}>
        {' '}
        <label htmlFor="contact" className={styles.label}>
          Contato
        </label>
        <input
          type="text"
          className={styles.input}
          value={formatPhone(value)}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, '')
            onChange(raw)
          }}
          maxLength={15}
          placeholder="(99) 91234-5678"
          required
        />
      </div>
    </>
  )
}
