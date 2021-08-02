export abstract class DomainError extends Error {
  constructor(message: string, errorName: string) {
    super(message)
    this.name = errorName
  }
}