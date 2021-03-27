import { Storage } from '@ionic/storage';

const storage = new Storage();

export async function getFromStorage(key: string): Promise<string> {
  await storage.create();

  return await storage.get(key);
}

export async function saveToStorage(key: string, value: string): Promise<void> {
  await storage.create();

  return await storage.set(key, value);
}
