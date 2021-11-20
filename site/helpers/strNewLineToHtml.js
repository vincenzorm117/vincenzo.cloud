const strNewLineToHtml = (text) => {
  return text.replace(/(\n|\r\n|\n\r)+/g, '<br>')
}

export default strNewLineToHtml
