declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_FRONTEND_URL: string;
      readonly NEXT_MONGO_URL: string;
    }
  }
}

export {};
