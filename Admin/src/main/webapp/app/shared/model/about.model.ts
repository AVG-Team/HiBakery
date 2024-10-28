import dayjs from 'dayjs';

export interface IAbout {
  id?: number;
  name?: string;
  content?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IAbout> = {};
