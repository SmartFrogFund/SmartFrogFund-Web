import { observable, action, computed } from "mobx";

class MainStore {
  @observable name: string = "ethan";

  @action
    changeName = (newName: string): void => {
      this.name = newName;
    };

  @computed get hello() {
    return `hello ${this.name}`;
  }
}
class SubStore {
  @observable name: string = "ggg";

  @action
    changeName = (newName: string): void => {
      this.name = newName;
    };

  @computed get hello() {
    return `hello ${this.name}`;
  }
}
const mainStore = new MainStore();
const subStore = new SubStore();

export { mainStore, subStore };
