import { atom } from "recoil";

const category = atom({
  key: "category",
  default: "",
});

const scores = atom({
  key:"scores",
  default:0,
})

const user = atom({
  key:"user",
  default : "",
})


export {user, category, scores};
