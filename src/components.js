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
    countUpJs,
    countUpEndVal,
    countUpOpts
  } = opts
  const keys = Object.keys(traitsOpts)
  const props = keys.map(key => 'data-' + key)
  const traitsArr = []
  const scriptProps = props

  scriptProps.push('countUpJs', 'countUpOpts')
  traits.forEach(key => {
    typeof traitsOpts[key] != 'undefined' && traitsArr.push(traitsOpts[key])
  })

  domc.addType(componentId, {
    isComponent: (el) => {
      if (el.tagName == componentTagName && el.classList.contains(componentTagClass))
        return { type: componentId }
    },
    model: {
      defaults: {
        tagName: componentTagName,
        droppable: false,
        attributes: {
          class: componentTagClass,
          'data-startVal': countUpOpts.startVal,
          'data-endVal': countUpEndVal
        },
        style: componentTagStyle,
        content: countUpOpts.startVal,
        traits: traitsArr,
        'data-endVal': countUpEndVal,
        'data-startVal': countUpOpts.startVal,
        countUpJs,
        countUpOpts,
        'script-props': scriptProps,
        script: function(scriptProps) {
          let element = this

          let loadScript = (src, callback = null) => {
            let script = document.createElement('script')
            script.type = 'text/javascript'
            callback && (function() {
              script.readyState ? (function() {
                script.onreadystatechange = function() {
                  (script.readyState == 'loaded' || script.readyState == 'complete') && (script.onreadystatechange = null, callback)
                }
              })() :
              script.onload = callback
            })()
            script.src = src
            document.body.appendChild(script)
          }

          let obj = {
            startVal: scriptProps['data-startVal'],
            decimalPlaces: scriptProps['data-decimalPlaces'],
            duration: scriptProps['data-duration'],
            useGrouping: scriptProps['data-useGrouping'],
            useEasing: scriptProps['data-useEasing'],
            smartEasingThreshold: scriptProps['data-smartEasingThreshold'],
            smartEasingAmount: scriptProps['data-smartEasingAmount'],
            separator: scriptProps['data-separator'],
            decimal: scriptProps['data-decimal'],
            prefix: scriptProps['data-prefix'],
            suffix: scriptProps['data-suffix']
          }
          Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])
          
          let initCountUpJs = () => {
            let countup = new countUp.CountUp(element.id, scriptProps['data-endVal'], Object.assign(obj, scriptProps.countUpOpt))
            if (!countup.error) {
              countup.start()
            } else {
              console.error(countup.error)
            }
          }

          if(!window.countUp) {
            loadScript(scriptProps.countUpJs, function() {
              initCountUpJs()
            })
          } else {
            initCountUpJs()
          }
        }
      },

    },
    view: {
      init: function() {
        this.listenTo(this.model, props.map(prop => 'change:' + prop).join(' '), this.render)
      }
    }
  })
}
