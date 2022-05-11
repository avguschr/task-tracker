import { collection, getDocs } from "firebase/firestore";
import db from "./init";

export const getBoards = async function () {
  const queryBoards = await getDocs(collection(db, "boards"));
  return queryBoards.forEach((doc) => doc.data());
};
