import dayjs from 'dayjs';

export interface IProductCategory {
  id?: number;
  name?: string;
  slug?: string | null;
  percent?: number | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IProductCategory> = {};
