export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `Veuillez tapper au moins ${min} caractère(s)`;
    }
  }

  static max(value, max) {
    if (value.length > max) {
      return `Veuillez tapper au plus ${max} caractère(s)`;
    }
  }
}
