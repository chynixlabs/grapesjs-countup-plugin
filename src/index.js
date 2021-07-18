import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  opts.traitsOpts = {
    startVal: {
      name: 'data-startVal',
      type: 'number',
      placeholder: 'Enter start value...',
      label: 'Start Value'
    },
    endVal: {
      name: 'data-endVal',
      type: 'number',
      placeholder: 'Enter end value...',
      label: 'End Value'
    },
    decimalPlaces: {
      name: 'data-decimalPlaces',
      type: 'number',
      placeholder: 'Enter decimal places...',
      label: 'Decimal Places'
    },
    duration: {
      name: 'data-duration',
      type: 'number',
      placeholder: 'Enter duration...',
      label: 'Duration'
    },
    useGrouping: {
      name: 'data-useGrouping',
      type: 'checkbox',
      placeholder: 'Enter use grouping...',
      label: 'Use Grouping'
    },
    useEasing: {
      name: 'data-useEasing',
      type: 'checkbox',
      placeholder: 'Enter use easing...',
      label: 'Use Easing'
    },
    smartEasingThreshold: {
      name: 'data-smartEasingThreshold',
      type: 'number',
      placeholder: 'Enter smart easing threshold...',
      label: 'Smart Easing Threshold'
    },
    smartEasingAmount: {
      name: 'data-smartEasingAmount',
      type: 'number',
      placeholder: 'Enter smart easing amount...',
      label: 'Smart Easing Amount'
    },
    separator: {
      name: 'data-separator',
      type: 'text',
      placeholder: 'Enter separator...',
      label: 'Separator'
    },
    decimal: {
      name: 'data-decimal',
      type: 'text',
      placeholder: 'Enter decimal...',
      label: 'Decimal'
    },
    prefix: {
      name: 'data-prefix',
      type: 'text',
      placeholder: 'Enter prefix...',
      label: 'Prefix'
    },
    suffix: {
      name: 'data-suffix',
      type: 'text',
      placeholder: 'Enter suffix...',
      label: 'Suffix'
    },
    ...opts.traitsOpts
  }

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
    countUpOpts: {
      startVal: '0'
    },
    traits: ['startVal', 'decimalPlaces', 'duration', 'useGrouping', 'useEasing', 'smartEasingThreshold', 'smartEasingAmount', 'separator', 'decimal', 'prefix', 'suffix'],
    ...opts
  }

  // Add components
  loadComponents(editor, options)
  // Add blocks
  loadBlocks(editor, options)
}
