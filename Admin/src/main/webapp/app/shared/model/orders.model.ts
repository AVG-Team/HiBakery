import dayjs from 'dayjs';

export interface IOrders {
  id?: number;
  name?: string;
  phone?: string | null;
  province?: string | null;
  district?: string | null;
  address?: string | null;
  ward?: string | null;
  deliveryTime?: dayjs.Dayjs | null;
  note?: string | null;
  content?: string | null;
  total?: number | null;
  code?: string | null;
  status?: number | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IOrders> = {};
