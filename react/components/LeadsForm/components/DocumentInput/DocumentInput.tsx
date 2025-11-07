import React from 'react'
import styles from '../../styles/style.module.css'
import Props from '../../../../typings/stringProps'
import { formatCPF } from '../../../../utils/utils'

export default function DocumentInput({ value, onChange }: Props) {
  return (
    <>
      <div id="document" className={styles.inputContainer}>
        <label htmlFor="document" className={styles.label}>
          CPF
        </label>
        <input
          id="document"
          type="text"
          value={formatCPF(value)}
          placeholder="Digite seu CPF(Somente dígitos)"
          className={styles.input}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, '')
            onChange(raw)
          }}
          maxLength={14}
          required
        />
      </div>
    </>
  )
}
