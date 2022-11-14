import type { IApiResponse } from "@/api/dto/ApiResponse";
import type { IReadBookingPassenger } from "@/views/Booking/dto/Booking.dto";

export interface IChangeSeatRequest {
  passenger: number;
  seat: string;
  type: "from" | "back";
}

export interface IChangeSeatResponse
  extends IApiResponse<IReadBookingPassenger> {}
