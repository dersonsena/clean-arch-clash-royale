export interface HttpController<T = object> {
  perform (httpRequest: HttpRequest): Promise<T>
}

export type HttpRequest = {
  routeParams: object,
  query: object,
  body: any
}