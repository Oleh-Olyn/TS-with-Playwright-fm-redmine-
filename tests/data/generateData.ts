import { faker } from "@faker-js/faker";

export const generateUser = () => ({
  login: faker.internet.username(),
  password: faker.internet.password(),
  fistName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
});
