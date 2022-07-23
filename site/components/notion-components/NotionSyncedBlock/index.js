import NotionComponent from '..'

const NotionSyncedBlock = (block) => {
  const childBlocks = Array.isArray(block?.child_blocks ?? [])
    ? block.child_blocks
    : []

  return (
    <>
      {childBlocks.map((c) => (
        <NotionComponent key={c.id} block={c} />
      ))}
    </>
  )
}

export default NotionSyncedBlock
