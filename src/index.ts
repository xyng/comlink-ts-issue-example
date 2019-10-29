import { wrap } from "comlink";
import { ApiInterface } from "./worker";

const wrapped = wrap<ApiInterface>(new Worker("../src/worker.ts"));

const run = async () => {
  /*
    wrapped.exampleAdapter is of type Promise<ExampleAdapter>, which would be expected
    if we would be using the key directly but prevents calling the `get` method
  */
  // const test = await wrapped.exampleAdapter.get(42);
  // console.log(test);

  const exampleAdapter = await wrapped.exampleAdapter;
  console.log(exampleAdapter);
  const test2 = await exampleAdapter.get(42);

  console.log(test2);
};

run();
