// Tests for history.js. Run them with: node --test
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const vm = require("node:vm");

const page = vm.createContext({});
vm.runInContext(fs.readFileSync("history.js", "utf8"), page);

test("the newest order comes first", () => {
  vm.runInContext('addPastOrder("Beef stew"); addPastOrder("Tomato soup");', page);
  assert.strictEqual(vm.runInContext("pastOrders[0]", page), "Tomato soup");
});

test("orderCount counts the orders", () => {
  assert.strictEqual(vm.runInContext("orderCount()", page), 2);
});