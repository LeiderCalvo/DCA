import { Screens } from "../types/navigation";

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};
