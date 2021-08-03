export interface HttpController<T = object> {
  perform (httpRequest: HttpRequest): Promise<T>
}

export type HttpRequest<T = any> = {
  routeParams: object,
  query: object,
  body: T
}