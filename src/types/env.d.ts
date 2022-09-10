declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_MONGO_URL: string;
    }
  }
}

export {};
