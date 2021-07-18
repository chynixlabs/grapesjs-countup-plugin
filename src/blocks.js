import {
  blockId,
  componentId
} from './const.js'

export default (editor, opts = {}) => {
  const bm = editor.BlockManager
  const {
    blockLabel,
    blockCategory,
    blockIcon,
    blockTitle,
    blockClass
  } = opts

  bm.add(blockId, {
    label: blockLabel,
    category: blockCategory,
    media: blockIcon,
    content: {
      type: componentId,
      name: blockLabel
    },
    attributes: {
      title: blockTitle,
      class: blockClass
    }
  })
}
