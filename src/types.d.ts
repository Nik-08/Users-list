declare module "*.scss";

type Nullable<T> = T | null;

interface Address {
  city: string;
  street: string;
  zipcode: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

declare interface User {
  id: number;
  name: string;
  address: Address;
  company: Company;
  username: string;
  email: string;
  phone: string;
  website: string;
  street: string;
  zipcode: string;
}

type Filter = "city" | "company";

interface UiState {
  filter: Filter;
}
