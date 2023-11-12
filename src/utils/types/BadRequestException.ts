export class BadRequestException extends Error {
  private readonly code: number;
  constructor(message: string) {
    super(message);
    this.name = BadRequestException.name;
    this.code = 400;
  }
}
