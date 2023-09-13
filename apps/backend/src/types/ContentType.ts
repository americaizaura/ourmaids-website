export interface Booking {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  dateTime: Date | string;
  servicesName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  message?: string;
  squareUpId?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: any;
  email: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: any;
}
