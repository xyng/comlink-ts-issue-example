export default class ExampleAdapter {
  async get(id: number) {
    return {
      id,
      prop: "test"
    };
  }
}
