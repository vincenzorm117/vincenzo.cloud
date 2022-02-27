import { useGlobalContext } from 'providers/GlobalProvider'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  solarizedLight,
  solarizedDark
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const NotionCode = (block) => {
  const { darkModeHook } = useGlobalContext()
  const [{ isDark }] = darkModeHook

  const codeText = block?.code?.text.map((x) => x.text.content).join('')

  return (
    <div className='my-6'>
      <SyntaxHighlighter
        language={block.code.language}
        style={isDark ? solarizedDark : solarizedLight}
        showLineNumbers={true}
        wrapLines={true}
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  )
}

export default NotionCode
