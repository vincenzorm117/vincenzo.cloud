import strNewLineToHtml from 'helpers/strNewLineToHtml'

const NotionText = ({ field }) =>
  field
    ?.filter((s) => ['text', 'mention'].includes(s.type))
    .map((s, index) => {
      // Get list of CSS classes
      const classes = []
      if (s.annotations.bold) classes.push('font-bold')
      if (s.annotations.underline) classes.push('underline')
      if (s.annotations.italic) classes.push('italic')
      if (s.annotations.strikethrough) classes.push('line-through')
      if (s.annotations.code)
        classes.push(
          'bg-gold-dark text-white-default px-[4px] py-[0px] rounded'
        )
      if (s.annotations.color && s.annotations.color !== 'default')
        classes.push(`notion-${s.annotations.color}`)

      switch (s.type) {
        case 'mention':
          return (
            <a
              key={index}
              className={classes.join(' ')}
              href={s.href}
              dangerouslySetInnerHTML={{
                __html: strNewLineToHtml(s.plain_text),
              }}
            />
          )
        case 'text':
        default:
          if (s.href !== null) {
            return (
              <a
                href={s.href}
                key={index}
                className={classes.concat('underline').join(' ')}
                dangerouslySetInnerHTML={{
                  __html: strNewLineToHtml(s.text.content),
                }}
              />
            )
          }
          return (
            <span
              key={index}
              className={classes.join(' ')}
              dangerouslySetInnerHTML={{
                __html: strNewLineToHtml(s.text.content),
              }}
            />
          )
      }
    })

export default NotionText
