import dayjs from 'dayjs';

export interface IBills {
  id?: number;
  category?: number | null;
  amount?: number | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IBills> = {};
