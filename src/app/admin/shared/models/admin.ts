export interface Users {
  id?: string | number;
  userName?: string;
  password?: string;
  email?: string;
  fullName?: string;
  phoneNumber?: string;
  address?: string;
}

export interface Admin {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  phone?: string;
  address?: {
    geolocation?: {
      lat?: string;
      long?: string;
    };
    city?: string;
    street?: string;
    number?: number;
    zipcode?: string;
  };
  __v?: number;
}

export interface AddUserReq {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  phone?: string;
  address?: {
    geolocation?: {
      lat?: string;
      long?: string;
    };
    city?: string;
    street?: string;
    number?: number;
    zipcode?: string;
  };
  __v?: number;
}

