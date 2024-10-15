import dayjs from 'dayjs';

export interface IDiscounts {
  id?: number;
  name?: string;
  code?: string | null;
  percent?: number | null;
  start?: dayjs.Dayjs | null;
  end?: dayjs.Dayjs | null;
  active?: boolean | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IDiscounts> = {
  active: false,
};
