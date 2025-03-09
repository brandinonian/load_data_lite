export interface CustomLoad {
  id: number;
  name: string;
  status: string;
  cartridge: string;
  coal: string;
  case_name: string;
  case_len: string;
  bullet: string;
  powder: string;
  primer: string;
  created_at: string;
  updated_at: string;
}

export interface NewCustomLoadData {
  name: string;
  status: string;
  cartridge: string;
  coal: string;
  case_name: string;
  case_len: string;
  bullet: string;
  powder: string;
  primer: string;
}

export interface FactoryLoad {
  id: number;
  name: string;
  cartridge: string;
  bullet: string;
  brand: string;
  created_at: string;
  updated_at: string;
}
