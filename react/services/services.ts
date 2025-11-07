import { FormState } from '../typings/formState'

async function checkIfDocumentExists(data: FormState) {
  const document = data.document
  const fieldDocument = '&_fields=document'
  const response = await fetch(
    `/api/dataentities/LF/search?document=${document}${fieldDocument}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.vtex.ds.v10+json',
      },
    }
  )
  const result = await response.json()

  if (!document) return

  if (!result[0]) return

  if (document == result[0].document) {
    console.log('on response if')
    throw new Error('Voce já realizou uma inscrição.')
  }
}

async function createDocument(data: FormState) {
  await checkIfDocumentExists(data)
  const response = await fetch('/api/dataentities/LF/documents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.vtex.ds.v10+json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Erro ao realizar inscrição, tente novamente por favor!')
  }

  return response.json()
}

export { createDocument }
