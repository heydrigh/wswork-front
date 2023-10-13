import { ButtonProps } from 'antd';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}
