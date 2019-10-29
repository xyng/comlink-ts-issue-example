import { wrap } from "comlink";
import { ApiInterface } from "./worker";

const wrapped = wrap<ApiInterface>(new Worker("../src/worker.ts"));

const run = async () => {
  /*
    wrapped.exampleAdapter is of type Promise<ExampleAdapter>, which would be expected
    if we would be using the key directly but prevents calling the `get` method

    the code actually works - but it does not transpile
  */
  const test = await wrapped.exampleAdapter.get(42);
  console.log("chain (how it should be)", test);

  const exampleAdapter = await wrapped.exampleAdapter;
  console.log("adapterObject", exampleAdapter);
  const test2 = await exampleAdapter.get(42);

  console.log("call on adapterObject", test2);
};

run();
