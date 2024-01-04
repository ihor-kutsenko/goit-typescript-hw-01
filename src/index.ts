let total: number = 100;
let rename: string = "Bob";
let isActive: boolean = false;
let empty: null = null;
let und: undefined = undefined;

let age = 20;
age = 12;
// --------------------------------------------------------------------------------------------------
const numbers: number[] = [1, 2, 3, 4, 5, 6];
numbers.push(8);

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 20,
// };

type User = { name: string; age: number | string };
const user: User = {
  name: "Bob",
  age: 20,
};
user.age = "1";
// --------------------------------------------------------------------------------------------

type size = "small" | "medium" | "large";

enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}

const button: size = "large";

const button2: Sizes = Sizes.large;

// ---------------------------------------------------------------------------------------------------
