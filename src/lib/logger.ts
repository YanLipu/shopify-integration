export const logger = {
  apiError(error: Error): void {
    this.log('API Error:', error);
    this.log(error);
  },
  log(...data: any[]): void {
    console.log(...data);
  }
};
