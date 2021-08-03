export abstract class ControllerBase {
  abstract perform (httpRequest: any): Promise<any>

  async handle (httpRequest: any): Promise<any> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      console.log(error)
    }
  }
}