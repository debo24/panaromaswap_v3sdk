import { POOL_INIT_CODE_HASH } from './constants'

import IPanaromaswapV3Pool from 'panaromaswap_v3core/artifacts/contracts/PanaromaswapV3Pool.sol/PanaromaswapV3Pool.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [IPanaromaswapV3Pool.bytecode])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(POOL_INIT_CODE_HASH)
    })
  })
})
