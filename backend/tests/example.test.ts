import assert from "node:assert";
import { test } from "node:test";
// import supertest from "supertest";

import { reverse } from "../src/utils/for_testing";

// const api = supertest(app);

test("reverse test", () => {
  const result = reverse("react");

  assert.strictEqual(result, "tcaer");
});

test("example", () => {
  const a = 1 + 2;
  assert.strictEqual(a, 3);
});
