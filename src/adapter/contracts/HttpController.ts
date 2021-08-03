export interface HttpController<T = object> {
  handle (httpRequest: HttpRequest): Promise<any>
}

export type HttpRequest<T = any> = {
  routeParams: object,
  query: object,
  body: T
}