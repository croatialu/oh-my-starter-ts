// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['.sandcastle/**'],
    type: 'lib',
    pnpm: true,
  },
)
