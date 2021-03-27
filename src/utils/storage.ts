import { Storage } from '@ionic/storage';

const storage = new Storage();

export async function getFromStorage(key: string): Promise<any> {
  await storage.create();

  return await storage.get(key);
}

export async function saveToStorage(key: string, value: any): Promise<void> {
  await storage.create();

  return await storage.set(key, value);
}
