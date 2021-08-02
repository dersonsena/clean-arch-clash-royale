export interface MongoOrm<T = any, P = object> {
  findById (id: string | number): Promise<T>
  insert(values: P): Promise<T>
  generateId(): string
}