export class HttpError extends Error {
  private readonly details: any[]
  private readonly statusCode: number

  constructor ({ message, errorName, statusCode, details = [] }: HttpError.Params) {
    super(message)
    this.name = errorName
    this.statusCode = statusCode
    this.details = details
  }

  static unauthorized () {
    return new HttpError({
      message: 'Unauthorized',
      errorName: 'UnauthorizedError',
      statusCode: 401
    })
  }

  static forbidden () {
    return new HttpError({
      message: 'Forbidden',
      errorName: 'ForbiddenError',
      statusCode: 403
    })
  }

  static badRequest () {
    return new HttpError({
      message: 'Bad Request',
      errorName: 'BadRequestError',
      statusCode: 400
    })
  }
}

export namespace HttpError {
  export type Params = {
    message: string,
    errorName: string,
    statusCode: number,
    details?: any[]
  }
}