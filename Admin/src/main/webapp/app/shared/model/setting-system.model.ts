import dayjs from 'dayjs';

export interface ISettingSystem {
  id?: number;
  name?: string;
  value?: string | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<ISettingSystem> = {};
