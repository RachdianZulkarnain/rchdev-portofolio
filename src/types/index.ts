export type Song = {
  url: string;
  cover: string;
  title: string;
  channel: string;
};

  export type ApiResponse<T = any> = {
    success: boolean;
    data?: T;
    message?: string;
};