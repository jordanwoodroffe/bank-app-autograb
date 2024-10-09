import {
  addUser,
  getCustomerBalance,
  getTotalBankBalance,
  deposit,
  withdraw,
  transfer,
  deleteAllUsers,
} from "./bank";

describe("Bank", () => {
  beforeEach(() => {
    // Reset users array before each test
    deleteAllUsers();
  });

  test("should add customer", () => {
    addUser("1", "Alice", "customer", 1000);
    expect(getCustomerBalance("1")).toBe(1000);
  });

  test("should add a manager", () => {
    addUser("2", "Bob", "manager");
  });

  test("should not allow customer to withdraw more than balance", () => {
    addUser("1", "Alice", "customer", 1000);
    expect(withdraw("1", 2000)).toBe(false);
    expect(getCustomerBalance("1")).toBe(1000);
  });

  test("should allow customer to deposit", () => {
    addUser("1", "Alice", "customer", 1000);
    expect(deposit("1", 500)).toBe(true);
    expect(getCustomerBalance("1")).toBe(1500);
  });

  test("should allow customer to transfer", () => {
    addUser("1", "Alice", "customer", 1000);
    addUser("2", "Bob", "customer", 500);
    expect(transfer("1", "2", 300)).toBe(true);
    expect(getCustomerBalance("1")).toBe(700);
    expect(getCustomerBalance("2")).toBe(800);
  });

  test("should get total bank balance for manager", () => {
    addUser("1", "Alice", "customer", 1000);
    addUser("2", "Bob", "customer", 500);
    addUser("3", "Charlie", "manager");

    expect(getTotalBankBalance("3")).toBe(1500);
  });

  test("should not allow customer to get total bank balance", () => {
    expect(getTotalBankBalance("1")).toBe(null);
  });
});
