import { expose } from "comlink";
import ExampleAdapter from "./exampleAdapter";

const Api = {
  exampleAdapter: new ExampleAdapter()
};

console.log("hello from worker");

expose(Api);

// typescript-specific stuff
export type ApiInterface = typeof Api;
