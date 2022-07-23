// rollup.config.js
import replace from 'rollup-plugin-replace'

export default {
  // ...
  plugins: [
    replace({
      ENVIRONMENT: JSON.stringify('production')
    })
  ]
}
