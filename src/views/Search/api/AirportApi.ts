import { BaseApi } from "@/api/BaseApi";
import type { IAirportResponse } from "../dto/Airport.dto";

export class AirportApi extends BaseApi {
  static async searchAirports(query: string): Promise<IAirportResponse> {
    const response = await fetch(`${this.host}/api/airport/?query=${query}`);
    return (await response.json()) as IAirportResponse;
  }
}
