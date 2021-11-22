import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const NotionCode = (block) => {
  const codeText = block?.code?.text.map((x) => x.text.content).join('')

  return (
    <div className='my-6'>
      <SyntaxHighlighter
        language={block.code.language}
        style={solarizedLight}
        showLineNumbers={true}
        wrapLines={true}
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  )
}

export default NotionCode
