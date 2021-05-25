export const markedRules = [
  { condition: value => value < 0, suffix: 'negative' },
  { condition: value => value === 0, suffix: 'zero' },
  { condition: value => value === 1, suffix: 'one' },
  { condition: value => value >= 1, suffix: 'many' },
]
