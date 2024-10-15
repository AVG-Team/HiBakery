import dayjs from 'dayjs';

export interface IImages {
  id?: number;
  name?: string | null;
  path?: string | null;
  alt?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IImages> = {};
