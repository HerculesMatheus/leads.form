import React, { useState } from 'react'
import FirstNameInput from './components/FirstNameInput/FirstNameInput'
import LastNameInput from './components/LastNameInput/LastNameInput'
import DocumentInput from './components/DocumentInput/DocumentInput'
import ContactInput from './components/ContactInput/ContactInput'
import EmailInput from './components/EmailInput/EmailInput'
import CityInput from './components/CityInput/CityInput'
import StateInput from './components/StateInput/StateInput'
import AgeInput from './components/AgeInput/AgeInput'
import styles from './styles/style.module.css'
import { createDocument } from '../../services/services'
import { LeadFormProps } from '../../typings/formProps'

export default function LeadForm({ onReset }: LeadFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState<number>()
  const [document, setDocument] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    if (!document || document.length !== 11) {
      alert('CPF inválido ou incompleto.')
      setIsSubmitting(false)
      return
    }

    const payload = {
      firstName,
      lastName,
      age,
      document,
      contact,
      email,
      city,
      state,
    }

    try {
      await createDocument(payload)
      alert('Lead cadastrado com sucesso!')
    } catch (error) {
      console.error('Erro ao cadastrar lead:', error)
      alert(error)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        onReset()
      }, 500)
    }
  }

  return (
    <div id="form-container" className={styles.form}>
      <div className={styles.formTitle}>Agende um test-drive</div>
      <div className={styles.container}>
        <div className={styles.rowName}>
          <FirstNameInput value={firstName} onChange={setFirstName} />
          <LastNameInput value={lastName} onChange={setLastName} />
        </div>
        <AgeInput value={age} onChange={setAge} />
        <DocumentInput value={document} onChange={setDocument} />
        <ContactInput value={contact} onChange={setContact} />
        <EmailInput value={email} onChange={setEmail} />
        <div className={styles.rowLocation}>
          <CityInput value={city} onChange={setCity} />
          <StateInput value={state} onChange={setState} />
        </div>
      </div>
      <button
        id="submit-button"
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </div>
  )
}
