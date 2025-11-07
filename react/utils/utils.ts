function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  return digits
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  return digits
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/^(\(\d{2}\)\s)(\d{5})(\d)/, '$1$2-$3')
}

export { formatCPF, formatPhone }
