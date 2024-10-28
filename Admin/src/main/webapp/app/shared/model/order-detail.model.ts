import dayjs from 'dayjs';

export interface IOrderDetail {
  id?: number;
  price?: number | null;
  quantity?: number | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IOrderDetail> = {};
