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

export default new MainStore();
