import dayjs from 'dayjs';

export interface IUsers {
  id?: number;
  name?: string;
  phone?: string | null;
  account?: string | null;
  birthDay?: dayjs.Dayjs | null;
  address?: string | null;
  district?: string | null;
  province?: string | null;
  email?: string;
  emailVerify?: dayjs.Dayjs | null;
  password?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  deletedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IUsers> = {};
