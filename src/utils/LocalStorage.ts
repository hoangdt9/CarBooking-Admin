const createStorage = (key: string) => {
  const store = JSON.parse(localStorage.getItem(key) ?? "{}");

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key: string) {
      return store[key];
    },
    getAccount() {
      return store["account"];
    },
    getLanguage() {
      return store["language"];
    },
    set(key: string, value: any) {
      store[key] = value;
      save();
    },
    setAccount(value: any) {
      store["account"] = value;
      save();
    },
    remove(key: string) {
      delete store[key];
      save();
    },
    delete() {
      localStorage.removeItem(key);
      localStorage.clear();
    },
  };

  return storage;
};

export { createStorage };
