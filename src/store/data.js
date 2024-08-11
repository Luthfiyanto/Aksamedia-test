// generate data User, Product with detail, and Order
import faker from "faker";
import { v4 as uuidv4 } from "uuid";

const generateUser = () => {
  return {
    id: uuidv4(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
};

const generateProduct = () => {
  return {
    id: uuidv4(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    description: faker.commerce.productDescription(),
  };
};

const generateOrder = (user, products) => {
  const total = products.reduce((acc, product) => acc + product.price, 0);
  return {
    id: uuidv4(),
    user,
    products,
    total,
  };
};

const generateData = () => {
  const users = Array.from({ length: 10 }, generateUser);
  const products = Array.from({ length: 20 }, generateProduct);
  const orders = Array.from({ length: 5 }, () => {
    const user = faker.random.arrayElement(users);
    const products = Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }, () => faker.random.arrayElement(products));
    return generateOrder(user, products);
  });
  return { users, products, orders };
};

export default generateData;
