export class CardLevelLimitExcedeedError extends Error {
  constructor(name: string, level: number) {
    super(`Card level named by "${name}" must be between 1 and 13, ${level} was provided`)
    this.name = 'CardLevelLimitExcedeedError'
  }
}