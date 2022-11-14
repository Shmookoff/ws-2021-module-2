import { BaseApi } from "@/api/BaseApi";
import type {
  ICreateBookingRequest,
  ICreateBookingResponse,
  IReadBookingResponse,
} from "../dto/Booking.dto";

export class BookingApi extends BaseApi {
  static async createBooking(
    data: ICreateBookingRequest
  ): Promise<ICreateBookingResponse> {
    const response = await fetch(`${this.host}/api/booking/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return (await response.json()) as ICreateBookingResponse;
  }

  static async getBooking(code: string): Promise<IReadBookingResponse> {
    const response = await fetch(`${this.host}/api/booking/${code}`);
    return (await response.json()) as IReadBookingResponse;
  }
}
