import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  opts.traitsOpts = {
    startVal: {
      type: 'number',
      placeholder: 'Enter start value...',
      label: 'Start Value',
      changeProp: true
    },
    endVal: {
      type: 'number',
      placeholder: 'Enter end value...',
      label: 'End Value',
      changeProp: true
    },
    decimalPlaces: {
      type: 'number',
      placeholder: 'Enter decimal places...',
      label: 'Decimal Places',
      changeProp: true
    },
    duration: {
      type: 'number',
      placeholder: 'Enter duration...',
      label: 'Duration',
      changeProp: true
    },
    useGrouping: {
      type: 'checkbox',
      placeholder: 'Enter use grouping...',
      label: 'Use Grouping',
      changeProp: true
    },
    useEasing: {
      type: 'checkbox',
      placeholder: 'Enter use easing...',
      label: 'Use Easing',
      changeProp: true
    },
    smartEasingThreshold: {
      type: 'number',
      placeholder: 'Enter smart easing threshold...',
      label: 'Smart Easing Threshold',
      changeProp: true
    },
    smartEasingAmount: {
      type: 'number',
      placeholder: 'Enter smart easing amount...',
      label: 'Smart Easing Amount',
      changeProp: true
    },
    separator: {
      type: 'text',
      placeholder: 'Enter separator...',
      label: 'Separator',
      changeProp: true
    },
    decimal: {
      type: 'text',
      placeholder: 'Enter decimal...',
      label: 'Decimal',
      changeProp: true
    },
    prefix: {
      type: 'text',
      placeholder: 'Enter prefix...',
      label: 'Prefix',
      changeProp: true
    },
    suffix: {
      type: 'text',
      placeholder: 'Enter suffix...',
      label: 'Suffix',
      changeProp: true
    },
    ...opts.traitsOpts
  }

  opts.traitsOpts.startVal.name = 'data-startVal'
  opts.traitsOpts.endVal.name = 'data-endVal'
  opts.traitsOpts.decimalPlaces.name = 'data-decimalPlaces'
  opts.traitsOpts.duration.name = 'data-duration'
  opts.traitsOpts.useGrouping.name = 'data-useGrouping'
  opts.traitsOpts.useEasing.name = 'data-useEasing'
  opts.traitsOpts.smartEasingThreshold.name = 'data-smartEasingThreshold'
  opts.traitsOpts.smartEasingAmount.name = 'data-smartEasingAmount'
  opts.traitsOpts.separator.name = 'data-separator'
  opts.traitsOpts.decimal.name = 'data-decimal'
  opts.traitsOpts.prefix.name = 'data-prefix'
  opts.traitsOpts.suffix.name = 'data-suffix'

  const options = {
    blockLabel: 'Count Up',
    blockCategory: 'Basic',
    blockTitle: 'Insert count up',
    blockClass: 'fa fa-level-up',
    blockIcon: '',
    componentTagName: 'span',
    componentTagClass: 'countup',
    componentTagStyle: {
      padding: '5px'
    },
    countUpJs: 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.umd.min.js',
    countUpEndVal: 100,
    countUpOpts: {
      startVal: 0
    },
    traits: ['startVal', 'endVal', 'decimalPlaces', 'duration', 'useGrouping', 'useEasing', 'smartEasingThreshold', 'smartEasingAmount', 'separator', 'decimal', 'prefix', 'suffix'],
    ...opts
  }

  loadComponents(editor, options)
  loadBlocks(editor, options)
}
