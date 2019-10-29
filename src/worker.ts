import { expose } from "comlink";
import ExampleAdapter from "./exampleAdapter";

const Api = {
  exampleAdapter: new ExampleAdapter()
};

expose(Api);

// typescript-specific stuff
export type ApiInterface = typeof Api;
