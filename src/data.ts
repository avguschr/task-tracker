import { Board } from "./types";
const boards: Board[] = JSON.parse(localStorage.getItem("boards") as string);
export default boards;
