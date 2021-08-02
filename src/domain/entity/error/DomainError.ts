export abstract class DomainError extends Error {
  constructor(message: string, errorName: string) {
    super(`Domain Error - ${message}`)
    this.name = errorName
  }
}