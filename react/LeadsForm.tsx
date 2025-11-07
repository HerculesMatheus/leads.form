import React, { useState } from 'react'
import LeadForm from './components/LeadsForm/LeadsForm'

export default function LeadsForm() {
  const [formKey, setFormKey] = useState(0)

  const resetForm = () => setFormKey((prev) => prev + 1)
  return <LeadForm key={formKey} onReset={resetForm} />
}
