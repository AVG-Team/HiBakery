import dayjs from 'dayjs';

export interface IProducts {
  id?: number;
  title?: string;
  description?: string | null;
  code?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IProducts> = {};
