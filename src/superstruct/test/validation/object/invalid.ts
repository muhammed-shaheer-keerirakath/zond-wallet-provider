import { number, object, string } from "../../../";

export const Struct = object({
  name: string(),
  age: number(),
});

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "object",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];
