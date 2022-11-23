import { faker } from "@faker-js/faker";

const bigList = [...Array(50)].map(() => ({
  name: faker.name.fullName(),
  avatar: faker.internet.avatar()
}));

export default bigList;