export class DuplicateException extends Error {
  private readonly code: number;
  constructor(message: string) {
    super(message);
    this.name = DuplicateException.name;
    this.code = 409;
  }
}
