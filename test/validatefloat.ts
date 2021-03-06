import * as assert from "assert";
import validator from '../lib';

// Why does it not allow numbers insertion. Will need to check on this
var validFloat = validator.isFloat("12.9");
var invalidFloat = validator.isFloat("w");

describe("Validate Float", () => {
    it("should return true", () => {
        assert.strictEqual(validFloat, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidFloat, false);
    });
});
