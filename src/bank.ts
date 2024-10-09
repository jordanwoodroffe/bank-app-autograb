type User = {
  id: string;
  name: string;
  role: "customer" | "manager";
  balance?: number;
};

let users: User[] = [];

const addUser = (
  id: string,
  name: string,
  role: "customer" | "manager",
  initialDeposit?: number
) => {
  const user: User = {
    id,
    name,
    role,
    balance: role === "customer" ? initialDeposit : undefined,
  };
  users = [...users, user];
};

const findUser = (
  id: string,
  role?: "customer" | "manager"
): User | undefined => {
  return users.find((u) => u.id === id && (!role || u.role === role));
};

const getCustomerBalance = (id: string): number | null => {
  const user = findUser(id, "customer");
  return user?.balance ?? null;
};

const getTotalBankBalance = (id: string): number | null => {
  const user = findUser(id, "manager");
  if (user) {
    return users
      .filter((u) => u.role === "customer")
      .reduce((total, user) => total + (user.balance ?? 0), 0);
  }
  return null;
};

const deposit = (id: string, amount: number): boolean => {
  const user = findUser(id, "customer");
  if (user) {
    user.balance = (user.balance ?? 0) + amount;
    return true;
  }
  return false;
};

const withdraw = (id: string, amount: number): boolean => {
  const user = findUser(id, "customer");
  if (user && (user.balance ?? 0) >= amount) {
    user.balance! -= amount;
    return true;
  }
  return false;
};

const transfer = (fromId: string, toId: string, amount: number): boolean => {
  const fromUser = findUser(fromId, "customer");
  const toUser = findUser(toId, "customer");
  if (fromUser && toUser && (fromUser.balance ?? 0) >= amount) {
    fromUser.balance! -= amount;
    toUser.balance! += amount;
    return true;
  }
  return false;
};

const deleteAllUsers = () => {
  users = [];
};

export {
  addUser,
  getCustomerBalance,
  getTotalBankBalance,
  deposit,
  withdraw,
  transfer,
  deleteAllUsers,
  users,
};
