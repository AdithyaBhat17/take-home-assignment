const users = [
  {
    email: "user@gmail.com",
    role: "user",
    password: "StrongPassword123",
  },
  {
    email: "admin@gmail.com",
    role: "admin",
    password: "StrongPassword123",
  },
];

const instances = [
  {
    id: 1,
    name: "t2.micro",
    provider: "aws",
    status: "stopped",
    costPerHour: 0.0116,
  },
  {
    id: 2,
    name: "t2.large",
    provider: "aws",
    status: "running",
    costPerHour: 0.1856,
  },
  {
    id: 1,
    name: "m5.large",
    provider: "aws",
    status: "stopped",
    costPerHour: 0.096,
  },
  {
    id: 1,
    name: "t2.micro",
    provider: "aws",
    status: "stopped",
    costPerHour: 0.0116,
  },
  {
    id: 1,
    name: "t2.nano",
    provider: "aws",
    status: "running",
    costPerHour: 0.0058,
  },
  {
    id: 1,
    name: "t2.micro",
    provider: "aws",
    status: "stopped",
    costPerHour: 3,
  },
  {
    id: 1,
    name: "t2.micro",
    provider: "aws",
    status: "stopped",
    costPerHour: 3,
  },
  {
    id: 1,
    name: "t2.xlarge",
    provider: "aws",
    status: "stopped",
    costPerHour: 0.1856,
  },
];

module.exports = {
  users,
  instances,
};
