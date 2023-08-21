export const limitText = (text?: string, limit?: number = 100) => {
  if (!text) return ''
  const finalText = text.split('').splice(0, limit).join('')
  if (finalText.length === text.length) return finalText
  return finalText + ' ...'
}