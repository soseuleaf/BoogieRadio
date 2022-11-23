/**
 * ex08-04-2 from ch08-06-2
 * ./src/data/bigList.js
 */

import { faker } from "@faker-js/faker";

const bigList = [...Array(50)].map(() => ({
  name: faker.name.fullName(),
  avatar: faker.internet.avatar()
}));

export default bigList;