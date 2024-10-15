import dayjs from 'dayjs';

export interface IProductDetail {
  id?: number;
  price?: number | null;
  size?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IProductDetail> = {};
