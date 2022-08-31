declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly MONGO_INITDB_ROOT_USERNAME: string;
      readonly MONGO_INITDB_ROOT_PASSWORD: string;
      readonly MONGO_INITDB_DATABASE: string;
      readonly MONGO_URL: string;
      readonly PUBLIC_API_URL: string;
    }
  }
}

export {};
