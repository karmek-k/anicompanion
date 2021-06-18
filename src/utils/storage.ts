import { Storage } from '@ionic/storage';

class NativeStorage {
  private storage!: Storage;

  constructor() {
    new Storage().create().then(s => {
      this.storage = s;
    });
  }

  async get(key: string): Promise<any> {
    return await this.storage.get(key);
  }

  async save(key: string, value: any): Promise<void> {
    return await this.storage.set(key, value);
  }

  async remove(key: string): Promise<void> {
    return await this.storage.remove(key);
  }
}

export default new NativeStorage();
