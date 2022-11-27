class StoragesService {
  instance;

  constructor(instance) {
    this.instance = instance;
  }

  getItem(key) {
    return this.instance.getItem(key);
  }

  setItem(key, value) {
    this.instance.setItem(key, value);
  }

  removeItem(key) {
    this.instance.removeItem(key);
  }

  clear() {
    this.instance.clear();
  }
}

const storagesService = new StoragesService(sessionStorage);

export default storagesService;
