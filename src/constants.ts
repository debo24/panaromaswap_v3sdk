export const FACTORY_ADDRESS = '0x89538C05630E6a6128f36A902b8a6217C17181EA'

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
