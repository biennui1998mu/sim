export class APIResponse <T = any> {
  message: string;
  data: T;
  error?: any;
}
