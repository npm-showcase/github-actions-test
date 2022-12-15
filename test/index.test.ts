import { sayHello, echo } from "../src";
import assert from "node:assert/strict";

describe('index.test.ts', () => {
  it('should work', () => {
    assert.strictEqual(sayHello('artus'), 'hi, artus');
  });

  it('should echo', () => {
    assert.strictEqual(echo('artus'), 'artus');
  });
});
