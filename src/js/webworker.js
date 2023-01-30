// import { faker } from "@faker-js/faker";

let count = 0;

// const genereteData = ({ type, count = 1 }) => {
//   const result = Array.from({ length: count }).map(() => {
//     if (type === "username") {
//       return faker.internet.userName();
//     }
//     if (type === "phone") {
//       return faker.phone.phoneNumber();
//     }
//     return "Unknown type";
//   });

//   return {
//     result,
//     type
//   }
// };

self.onmessage = ({ data }) => {
  self.postMessage({ count: count++ });
};
