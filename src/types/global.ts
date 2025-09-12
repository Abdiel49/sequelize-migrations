// declare global {
//   namespace Express {
//     interface Request {
//       user?: any;
//     }
//   }
// }


export interface IResponseData<T> {
  message: string;
  status: number;
  ok: boolean;
  data?: T;
  page?: number;
  offet?: number;
}
