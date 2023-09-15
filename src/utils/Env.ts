export class Env {
  static get(key: string): string {
    return process.env[key] || "";
  }
}
