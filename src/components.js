import {
  componentId
} from './const.js'

export default (editor, opts = {}) => {
  const domc = editor.DomComponents
  const {
    componentTagName,
    componentTagClass,
    componentTagStyle,
    traits,
    traitsOpts,
    countUpOpts
  } = opts
  const traitsArr = []

  traits.forEach(key => {
    typeof traitsOpts[key] != 'undefined' && traitsArr.push(traitsOpts[key])
  })

  domc.addType(componentId, {
    model: {
      defaults: {
        isComponent: (el) => {
          if (el.tagName == componentTagName && el.classList.contains(componentTagClass))
            return { type: componentId }
        },
        tagName: componentTagName,
        droppable: false,
        attributes: {
          class: componentTagClass,
          'data-startVal': countUpOpts.startVal
        },
        style: componentTagStyle,
        content: countUpOpts.startVal,
        traits: traitsArr
      },
    }
  })
}
