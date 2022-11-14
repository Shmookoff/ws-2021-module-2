import { BaseApi } from "@/api/BaseApi";
import type { IChangeSeatRequest, IChangeSeatResponse } from "../dto/Seat.dto";

export class SeatApi extends BaseApi {
  static async saveSeat(
    bookingCode: string,
    data: IChangeSeatRequest
  ): Promise<IChangeSeatResponse> {
    const response = await fetch(
      `${this.host}/api/booking/${bookingCode}/seat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return (await response.json()) as IChangeSeatResponse;
  }
}
