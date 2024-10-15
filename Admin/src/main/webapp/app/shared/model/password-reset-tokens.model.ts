import dayjs from 'dayjs';

export interface IPasswordResetTokens {
  id?: number;
  email?: string;
  token?: string;
  createdAt?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IPasswordResetTokens> = {};
