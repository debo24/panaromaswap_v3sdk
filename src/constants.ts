export const FACTORY_ADDRESS = '0xcBd5a2b15d20BdF4c7d6e2B692ABc1D71ccb3bdd'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xecd681bb74a2488c612a04ee2aef3162d6305089892ba2639b666665dad5cd3d'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
