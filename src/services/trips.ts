import { Trip } from "../types/trips";
import { trips } from "../mocks/getTrips";

class Trips {
  async get(): Promise<Trip[]> {
    console.log("starting fetch...");
    const value: Trip[] = await new Promise((resolve) => {
      setTimeout(() => resolve(trips), 3000);
    });
    return value;
  }
}

export default new Trips();
