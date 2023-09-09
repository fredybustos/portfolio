import bycript from 'bcryptjs'
import { format, parseISO } from 'date-fns'

export const hashPassword = (password: string) => {
  return bycript.hash(password, 12)
}

export const compareHash = (hash: string, str: string) => {
  return bycript.compareSync(hash, str)
}

export const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

export const formatDate = (value: Date | string, dateFormat?: string) => {
  if (!value) {
    return 'Sin fecha'
  }
  const cleanValue = typeof value === 'object' ? value : parseISO(value)
  const currentFormat = dateFormat || 'dd MMMM yyyy'
  return format(cleanValue, currentFormat)
}
