import NotionComponent from '..'

const NotionSyncedBlock = (block) => {
  const child_blocks = Array.isArray(block?.child_blocks ?? [])
    ? block.child_blocks
    : []

  return (
    <>
      {child_blocks.map((c) => (
        <NotionComponent key={c.id} block={c} />
      ))}
    </>
  )
}

export default NotionSyncedBlock
