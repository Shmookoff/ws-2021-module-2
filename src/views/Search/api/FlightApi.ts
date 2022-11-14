import { BaseApi } from "@/api/BaseApi";
import type { IFlightSearchResponse } from "../dto/Flight.dto";

export class FlightApi extends BaseApi {
  static async searchFlights(
    from: string,
    to: string,
    date1: string,
    date2: string | undefined,
    passengers: number
  ): Promise<IFlightSearchResponse> {
    const params = {
      from: `from=${from}`,
      to: `to=${to}`,
      date1: `date1=${date1}`,
      date2: date2 ? `date2=${date2}` : "",
      passengers: `passengers=${passengers}`,
    };
    const response = await fetch(
      `${this.host}/api/flight/?${Object.values(params).join("&")}`
    );
    return (await response.json()) as IFlightSearchResponse;
  }
}
