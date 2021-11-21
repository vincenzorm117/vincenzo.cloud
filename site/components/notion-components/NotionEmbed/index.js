import Gist from 'react-gist'

const NotionEmbed = (block) => {
  const url = block?.embed?.url

  if (/gist\.github\.com/gi.test(url)) {
    const gistId = url.match(/\/([^/]+)$/)?.[1] ?? null
    return <Gist id={gistId} />
  }

  return null
}

export default NotionEmbed
