import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Query = {
  __typename?: 'Query';
  me: UserResponse;
  listUsers: PaginatedUsersResponse;
  hello: Scalars['String'];
  listStores: ListStoresResponse;
  listRoles: ListRolesResponse;
  listStates: ListStatesResponse;
  getClient: ClientResponse;
  listClients: PaginatedClientsResponse;
  listDiscounts: ListDiscountResponse;
  getAllProvinces: ApiResponse;
  getAllLocations: ApiResponse;
  getProvince: ApiResponse;
  getLocation: ApiResponse;
  getLocations: ApiResponse;
};


export type QueryListUsersArgs = {
  vars?: Maybe<PaginationFields>;
};


export type QueryGetClientArgs = {
  vars: GetUserFields;
};


export type QueryListClientsArgs = {
  vars?: Maybe<PaginationFields>;
};


export type QueryGetProvinceArgs = {
  vars: IdField;
};


export type QueryGetLocationArgs = {
  vars: IdField;
};


export type QueryGetLocationsArgs = {
  vars: ProvinceId;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  store_id: Scalars['Float'];
  role_id: Scalars['Float'];
  state_id: Scalars['Float'];
  store: Store;
  role: Role;
  state: State;
  clients: Array<Client>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at: Scalars['DateTime'];
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['Float'];
  name: Scalars['String'];
  users: Array<User>;
  clients: Array<Client>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['Float'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  memo: Scalars['String'];
  store_id: Scalars['Float'];
  state_id: Scalars['Float'];
  discount_id: Scalars['Float'];
  user_id: Scalars['Float'];
  store: Store;
  state: State;
  discount: Discount;
  user: User;
  phones: Array<Phone>;
  shippings: Array<Shipping>;
  billings: Array<Billing>;
  addresses: Array<Address>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at: Scalars['DateTime'];
};

export type State = {
  __typename?: 'State';
  id: Scalars['Float'];
  name: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};


export type Discount = {
  __typename?: 'Discount';
  id: Scalars['Float'];
  percentage: Scalars['Float'];
  clients: Array<Client>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Phone = {
  __typename?: 'Phone';
  id: Scalars['Float'];
  name: Scalars['String'];
  area_code: Scalars['String'];
  phone: Scalars['String'];
  client_id: Scalars['Float'];
  client: Client;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at: Scalars['DateTime'];
};

export type Shipping = {
  __typename?: 'Shipping';
  id: Scalars['Float'];
  name: Scalars['String'];
  street: Scalars['String'];
  street_number: Scalars['Float'];
  memo: Scalars['String'];
  cuit: Scalars['String'];
  province?: Maybe<Scalars['JSONObject']>;
  location?: Maybe<Scalars['JSONObject']>;
  postal_code: Scalars['String'];
  client_id: Scalars['Float'];
  transport_id: Scalars['Float'];
  client: Client;
  transport: Transport;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at: Scalars['DateTime'];
};


export type Transport = {
  __typename?: 'Transport';
  id: Scalars['Float'];
  name: Scalars['String'];
  shippings: Array<Shipping>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Billing = {
  __typename?: 'Billing';
  id: Scalars['Float'];
  name: Scalars['String'];
  street: Scalars['String'];
  street_number: Scalars['Float'];
  memo: Scalars['String'];
  cuit: Scalars['String'];
  province: Scalars['String'];
  location: Scalars['String'];
  postal_code: Scalars['String'];
  client_id: Scalars['Float'];
  iva_id: Scalars['Float'];
  client: Client;
  iva: Iva;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at: Scalars['DateTime'];
};

export type Iva = {
  __typename?: 'Iva';
  id: Scalars['Float'];
  name: Scalars['String'];
  billings: Array<Billing>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['Float'];
  name: Scalars['String'];
  street: Scalars['String'];
  street_number: Scalars['Float'];
  memo: Scalars['String'];
  province: Scalars['String'];
  location: Scalars['String'];
  postal_code: Scalars['String'];
  client_id: Scalars['Float'];
  client: Client;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at: Scalars['DateTime'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Float'];
  name: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type PaginatedUsersResponse = {
  __typename?: 'PaginatedUsersResponse';
  data?: Maybe<Array<User>>;
  message?: Maybe<Scalars['String']>;
  filters?: Maybe<PaginationFilters>;
};

export type PaginationFilters = {
  __typename?: 'PaginationFilters';
  search?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  per_page?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  order_type?: Maybe<Scalars['String']>;
  order_by?: Maybe<Scalars['String']>;
};

export type PaginationFields = {
  per_page?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  order_by?: Maybe<Scalars['String']>;
  order_type?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};

export type ListStoresResponse = {
  __typename?: 'ListStoresResponse';
  data?: Maybe<Array<Store>>;
  message?: Maybe<Scalars['String']>;
};

export type ListRolesResponse = {
  __typename?: 'ListRolesResponse';
  data?: Maybe<Array<Role>>;
  message?: Maybe<Scalars['String']>;
};

export type ListStatesResponse = {
  __typename?: 'ListStatesResponse';
  data?: Maybe<Array<State>>;
  message?: Maybe<Scalars['String']>;
};

export type ClientResponse = {
  __typename?: 'ClientResponse';
  data?: Maybe<Client>;
  message?: Maybe<Scalars['String']>;
};

export type GetUserFields = {
  id: Scalars['Float'];
};

export type PaginatedClientsResponse = {
  __typename?: 'PaginatedClientsResponse';
  data?: Maybe<Array<Client>>;
  message?: Maybe<Scalars['String']>;
  filters?: Maybe<PaginationFilters>;
};

export type ListDiscountResponse = {
  __typename?: 'ListDiscountResponse';
  data?: Maybe<Array<Discount>>;
  message?: Maybe<Scalars['String']>;
};

export type ApiResponse = {
  __typename?: 'ApiResponse';
  data?: Maybe<Scalars['JSONObject']>;
  message?: Maybe<Scalars['String']>;
};

export type IdField = {
  id: Scalars['String'];
};

export type ProvinceId = {
  province_id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserResponse;
  login: UserResponse;
  changeUserState: UserResponse;
  updateUser: UserResponse;
  deleteUser: ApiResponse;
  logout: UserResponse;
  deleteAllUsers: Scalars['String'];
  createStore: StoreResponse;
  createRole: RoleResponse;
  createState: StateResponse;
  createClient: ClientResponse;
  updateClient: ClientResponse;
  changeClientState: ClientResponse;
  deleteClient: ApiResponse;
  restoreClient: ClientResponse;
  destroyClient: ApiResponse;
  createDiscount: DiscountResponse;
  createPhone: PhoneResponse;
  updatePhone: PhoneResponse;
  deletePhone: ApiResponse;
  createShipping: ShippingResponse;
  updateShipping: ShippingResponse;
  deleteShipping: ApiResponse;
};


export type MutationCreateUserArgs = {
  data: CreateUserFields;
};


export type MutationLoginArgs = {
  data: UsernamePasswordInput;
};


export type MutationChangeUserStateArgs = {
  data: ChangeStateFields;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserFields;
};


export type MutationDeleteUserArgs = {
  data: DeleteUserFields;
};


export type MutationCreateStoreArgs = {
  data: CreateStoreFields;
};


export type MutationCreateRoleArgs = {
  data: CreateRoleField;
};


export type MutationCreateStateArgs = {
  data: CreateStateFields;
};


export type MutationCreateClientArgs = {
  data: CreateFields;
};


export type MutationUpdateClientArgs = {
  data: UpdateFields;
};


export type MutationChangeClientStateArgs = {
  data: ChangeStateFields;
};


export type MutationDeleteClientArgs = {
  data: DeleteClientFields;
};


export type MutationRestoreClientArgs = {
  data: DeleteClientFields;
};


export type MutationDestroyClientArgs = {
  data: DeleteClientFields;
};


export type MutationCreateDiscountArgs = {
  data: CreateDiscountField;
};


export type MutationCreatePhoneArgs = {
  data: CreatePhoneFields;
};


export type MutationUpdatePhoneArgs = {
  data: UpdatePhoneFields;
};


export type MutationDeletePhoneArgs = {
  data: DeletePhoneFields;
};


export type MutationCreateShippingArgs = {
  data: CreateShippingFields;
};


export type MutationUpdateShippingArgs = {
  data: UpdateShippingFields;
};


export type MutationDeleteShippingArgs = {
  data: DeleteShippingFields;
};

export type CreateUserFields = {
  name: Scalars['String'];
  last_name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  store_id: Scalars['Float'];
  role_id: Scalars['Float'];
  state_id: Scalars['Float'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type ChangeStateFields = {
  id: Scalars['Float'];
};

export type UpdateUserFields = {
  id?: Maybe<Scalars['Float']>;
  user: CreateUserFields;
};

export type DeleteUserFields = {
  id: Scalars['Float'];
};

export type StoreResponse = {
  __typename?: 'StoreResponse';
  data?: Maybe<Store>;
  message?: Maybe<Scalars['String']>;
};

export type CreateStoreFields = {
  name: Scalars['String'];
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  data?: Maybe<Role>;
  message?: Maybe<Scalars['String']>;
};

export type CreateRoleField = {
  name: Scalars['String'];
};

export type StateResponse = {
  __typename?: 'StateResponse';
  data?: Maybe<State>;
  message?: Maybe<Scalars['String']>;
};

export type CreateStateFields = {
  name: Scalars['String'];
};

export type CreateFields = {
  name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  memo: Scalars['String'];
  store_id?: Maybe<Scalars['Float']>;
  state_id: Scalars['Float'];
  discount_id: Scalars['Float'];
  user_id?: Maybe<Scalars['Float']>;
};

export type UpdateFields = {
  id: Scalars['Float'];
  client: CreateFields;
};

export type DeleteClientFields = {
  id: Scalars['Float'];
};

export type DiscountResponse = {
  __typename?: 'DiscountResponse';
  data?: Maybe<Discount>;
  message?: Maybe<Scalars['String']>;
};

export type CreateDiscountField = {
  percentage: Scalars['Float'];
};

export type PhoneResponse = {
  __typename?: 'PhoneResponse';
  data?: Maybe<Phone>;
  message?: Maybe<Scalars['String']>;
};

export type CreatePhoneFields = {
  name: Scalars['String'];
  area_code: Scalars['String'];
  phone: Scalars['String'];
  client_id: Scalars['Float'];
};

export type UpdatePhoneFields = {
  id: Scalars['Float'];
  phone: CreatePhoneFields;
};

export type DeletePhoneFields = {
  id: Scalars['Float'];
};

export type ShippingResponse = {
  __typename?: 'ShippingResponse';
  data?: Maybe<Shipping>;
  message?: Maybe<Scalars['String']>;
};

export type CreateShippingFields = {
  name: Scalars['String'];
  street: Scalars['String'];
  street_number: Scalars['Float'];
  memo: Scalars['String'];
  cuit: Scalars['String'];
  province_id: Scalars['String'];
  location_id: Scalars['String'];
  postal_code: Scalars['String'];
  client_id: Scalars['Float'];
  transport_id: Scalars['Float'];
};

export type UpdateShippingFields = {
  id: Scalars['Float'];
  shipping: CreateShippingFields;
};

export type DeleteShippingFields = {
  id: Scalars['Float'];
};

export type ClientFragment = (
  { __typename?: 'Client' }
  & Pick<Client, 'id' | 'name' | 'last_name' | 'email' | 'memo'>
  & { store: (
    { __typename?: 'Store' }
    & Pick<Store, 'id' | 'name'>
  ), state: (
    { __typename?: 'State' }
    & Pick<State, 'id' | 'name'>
  ), discount: (
    { __typename?: 'Discount' }
    & Pick<Discount, 'id' | 'percentage'>
  ), phones: Array<(
    { __typename?: 'Phone' }
    & ClientPhoneFragment
  )>, billings: Array<(
    { __typename?: 'Billing' }
    & ClientBillingFragment
  )>, shippings: Array<(
    { __typename?: 'Shipping' }
    & ClientShippingFragment
  )>, addresses: Array<(
    { __typename?: 'Address' }
    & ClientAddressFragment
  )> }
);

export type ClientAddressFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'name' | 'street' | 'street_number' | 'memo' | 'province' | 'location' | 'postal_code'>
);

export type ClientBillingFragment = (
  { __typename?: 'Billing' }
  & Pick<Billing, 'id' | 'name' | 'street' | 'street_number' | 'memo' | 'cuit' | 'province' | 'location' | 'postal_code'>
  & { iva: (
    { __typename?: 'Iva' }
    & Pick<Iva, 'id' | 'name'>
  ) }
);

export type ClientPhoneFragment = (
  { __typename?: 'Phone' }
  & Pick<Phone, 'id' | 'name' | 'area_code' | 'phone'>
);

export type ClientShippingFragment = (
  { __typename?: 'Shipping' }
  & Pick<Shipping, 'id' | 'name' | 'street' | 'street_number' | 'memo' | 'cuit' | 'province' | 'location' | 'postal_code'>
  & { transport: (
    { __typename?: 'Transport' }
    & Pick<Transport, 'id' | 'name'>
  ) }
);

export type ChangeClientStateMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type ChangeClientStateMutation = (
  { __typename?: 'Mutation' }
  & { changeClientState: (
    { __typename?: 'ClientResponse' }
    & Pick<ClientResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Client' }
      & Pick<Client, 'created_at'>
      & ClientFragment
    )> }
  ) }
);

export type CreateClientMutationVariables = Exact<{
  name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  memo: Scalars['String'];
  state_id: Scalars['Float'];
  discount_id: Scalars['Float'];
  store_id?: Maybe<Scalars['Float']>;
}>;


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { createClient: (
    { __typename?: 'ClientResponse' }
    & Pick<ClientResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Client' }
      & ClientFragment
    )> }
  ) }
);

export type CreatePhoneMutationVariables = Exact<{
  name: Scalars['String'];
  client_id: Scalars['Float'];
  area_code: Scalars['String'];
  phone: Scalars['String'];
}>;


export type CreatePhoneMutation = (
  { __typename?: 'Mutation' }
  & { createPhone: (
    { __typename?: 'PhoneResponse' }
    & Pick<PhoneResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Phone' }
      & ClientPhoneFragment
    )> }
  ) }
);

export type CreateShippingMutationVariables = Exact<{
  name: Scalars['String'];
  street: Scalars['String'];
  street_number: Scalars['Float'];
  postal_code: Scalars['String'];
  cuit: Scalars['String'];
  memo: Scalars['String'];
  province_id: Scalars['String'];
  location_id: Scalars['String'];
  client_id: Scalars['Float'];
  transport_id: Scalars['Float'];
}>;


export type CreateShippingMutation = (
  { __typename?: 'Mutation' }
  & { createShipping: (
    { __typename?: 'ShippingResponse' }
    & Pick<ShippingResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Shipping' }
      & ClientShippingFragment
    )> }
  ) }
);

export type DeleteClientMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteClientMutation = (
  { __typename?: 'Mutation' }
  & { deleteClient: (
    { __typename?: 'ApiResponse' }
    & Pick<ApiResponse, 'data' | 'message'>
  ) }
);

export type DeletePhoneMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeletePhoneMutation = (
  { __typename?: 'Mutation' }
  & { deletePhone: (
    { __typename?: 'ApiResponse' }
    & Pick<ApiResponse, 'data' | 'message'>
  ) }
);

export type UpdateClientMutationVariables = Exact<{
  id: Scalars['Float'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  memo: Scalars['String'];
  state_id: Scalars['Float'];
  discount_id: Scalars['Float'];
  store_id?: Maybe<Scalars['Float']>;
}>;


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { updateClient: (
    { __typename?: 'ClientResponse' }
    & Pick<ClientResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Client' }
      & ClientFragment
    )> }
  ) }
);

export type UpdatePhoneMutationVariables = Exact<{
  id: Scalars['Float'];
  name: Scalars['String'];
  area_code: Scalars['String'];
  phone: Scalars['String'];
  client_id: Scalars['Float'];
}>;


export type UpdatePhoneMutation = (
  { __typename?: 'Mutation' }
  & { updatePhone: (
    { __typename?: 'PhoneResponse' }
    & Pick<PhoneResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Phone' }
      & ClientPhoneFragment
    )> }
  ) }
);

export type GetClientQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetClientQuery = (
  { __typename?: 'Query' }
  & { getClient: (
    { __typename?: 'ClientResponse' }
    & { data?: Maybe<(
      { __typename?: 'Client' }
      & ClientFragment
    )> }
  ) }
);

export type ListClientsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  order_by?: Maybe<Scalars['String']>;
  order_type?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  per_page?: Maybe<Scalars['Float']>;
}>;


export type ListClientsQuery = (
  { __typename?: 'Query' }
  & { listClients: (
    { __typename?: 'PaginatedClientsResponse' }
    & Pick<PaginatedClientsResponse, 'message'>
    & { data?: Maybe<Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'id' | 'name' | 'last_name' | 'email' | 'memo' | 'created_at'>
      & { store: (
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'name'>
      ), state: (
        { __typename?: 'State' }
        & Pick<State, 'id' | 'name'>
      ), discount: (
        { __typename?: 'Discount' }
        & Pick<Discount, 'id' | 'percentage'>
      ), phones: Array<(
        { __typename?: 'Phone' }
        & Pick<Phone, 'id' | 'name' | 'area_code' | 'phone'>
      )>, shippings: Array<(
        { __typename?: 'Shipping' }
        & Pick<Shipping, 'id' | 'name' | 'street' | 'street_number' | 'cuit' | 'province' | 'location' | 'postal_code' | 'memo'>
        & { transport: (
          { __typename?: 'Transport' }
          & Pick<Transport, 'id' | 'name'>
        ) }
      )> }
    )>>, filters?: Maybe<(
      { __typename?: 'PaginationFilters' }
      & Pick<PaginationFilters, 'search' | 'page' | 'per_page' | 'order_by' | 'order_type' | 'count'>
    )> }
  ) }
);

export type ListDiscountsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDiscountsQuery = (
  { __typename?: 'Query' }
  & { listDiscounts: (
    { __typename?: 'ListDiscountResponse' }
    & Pick<ListDiscountResponse, 'message'>
    & { data?: Maybe<Array<(
      { __typename?: 'Discount' }
      & Pick<Discount, 'id' | 'percentage'>
    )>> }
  ) }
);

export type GetProvincesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProvincesQuery = (
  { __typename?: 'Query' }
  & { getAllProvinces: (
    { __typename?: 'ApiResponse' }
    & Pick<ApiResponse, 'data' | 'message'>
  ) }
);

export type GetLocationsQueryVariables = Exact<{
  province_id: Scalars['String'];
}>;


export type GetLocationsQuery = (
  { __typename?: 'Query' }
  & { getLocations: (
    { __typename?: 'ApiResponse' }
    & Pick<ApiResponse, 'data' | 'message'>
  ) }
);

export type ListRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListRolesQuery = (
  { __typename?: 'Query' }
  & { listRoles: (
    { __typename?: 'ListRolesResponse' }
    & Pick<ListRolesResponse, 'message'>
    & { data?: Maybe<Array<(
      { __typename?: 'Role' }
      & Pick<Role, 'id' | 'name'>
    )>> }
  ) }
);

export type ListStatesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListStatesQuery = (
  { __typename?: 'Query' }
  & { listStates: (
    { __typename?: 'ListStatesResponse' }
    & Pick<ListStatesResponse, 'message'>
    & { data?: Maybe<Array<(
      { __typename?: 'State' }
      & Pick<State, 'id' | 'name'>
    )>> }
  ) }
);

export type ListStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type ListStoresQuery = (
  { __typename?: 'Query' }
  & { listStores: (
    { __typename?: 'ListStoresResponse' }
    & Pick<ListStoresResponse, 'message'>
    & { data?: Maybe<Array<(
      { __typename?: 'Store' }
      & Pick<Store, 'id' | 'name'>
    )>> }
  ) }
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'name' | 'last_name' | 'password'>
  & { store: (
    { __typename?: 'Store' }
    & Pick<Store, 'id' | 'name'>
  ), role: (
    { __typename?: 'Role' }
    & Pick<Role, 'id' | 'name'>
  ), state: (
    { __typename?: 'State' }
    & Pick<State, 'id' | 'name'>
  ) }
);

export type ChangeUserStateMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type ChangeUserStateMutation = (
  { __typename?: 'Mutation' }
  & { changeUserState: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  store_id: Scalars['Float'];
  role_id: Scalars['Float'];
  state_id: Scalars['Float'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'name' | 'last_name'>
    )> }
  ) }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'ApiResponse' }
    & Pick<ApiResponse, 'data' | 'message'>
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Float'];
  username: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  store_id: Scalars['Float'];
  role_id: Scalars['Float'];
  state_id: Scalars['Float'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export type ListUsersQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  order_by?: Maybe<Scalars['String']>;
  order_type?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  per_page?: Maybe<Scalars['Float']>;
}>;


export type ListUsersQuery = (
  { __typename?: 'Query' }
  & { listUsers: (
    { __typename?: 'PaginatedUsersResponse' }
    & Pick<PaginatedUsersResponse, 'message'>
    & { data?: Maybe<Array<(
      { __typename?: 'User' }
      & UserFragment
    )>>, filters?: Maybe<(
      { __typename?: 'PaginationFilters' }
      & Pick<PaginationFilters, 'search' | 'page' | 'per_page' | 'order_by' | 'order_type' | 'count'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export const ClientPhoneFragmentDoc = gql`
    fragment ClientPhone on Phone {
  id
  name
  area_code
  phone
}
    `;
export const ClientBillingFragmentDoc = gql`
    fragment ClientBilling on Billing {
  id
  name
  street
  street_number
  memo
  cuit
  iva {
    id
    name
  }
  province
  location
  postal_code
}
    `;
export const ClientShippingFragmentDoc = gql`
    fragment ClientShipping on Shipping {
  id
  name
  street
  street_number
  memo
  cuit
  transport {
    id
    name
  }
  province
  location
  postal_code
}
    `;
export const ClientAddressFragmentDoc = gql`
    fragment ClientAddress on Address {
  id
  name
  street
  street_number
  memo
  province
  location
  postal_code
}
    `;
export const ClientFragmentDoc = gql`
    fragment Client on Client {
  id
  name
  last_name
  email
  memo
  store {
    id
    name
  }
  state {
    id
    name
  }
  discount {
    id
    percentage
  }
  phones {
    ...ClientPhone
  }
  billings {
    ...ClientBilling
  }
  shippings {
    ...ClientShipping
  }
  addresses {
    ...ClientAddress
  }
}
    ${ClientPhoneFragmentDoc}
${ClientBillingFragmentDoc}
${ClientShippingFragmentDoc}
${ClientAddressFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  username
  name
  last_name
  password
  store {
    id
    name
  }
  role {
    id
    name
  }
  state {
    id
    name
  }
}
    `;
export const ChangeClientStateDocument = gql`
    mutation ChangeClientState($id: Float!) {
  changeClientState(data: {id: $id}) {
    data {
      ...Client
      created_at
    }
    message
  }
}
    ${ClientFragmentDoc}`;
export type ChangeClientStateMutationFn = Apollo.MutationFunction<ChangeClientStateMutation, ChangeClientStateMutationVariables>;

/**
 * __useChangeClientStateMutation__
 *
 * To run a mutation, you first call `useChangeClientStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeClientStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeClientStateMutation, { data, loading, error }] = useChangeClientStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChangeClientStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeClientStateMutation, ChangeClientStateMutationVariables>) {
        return Apollo.useMutation<ChangeClientStateMutation, ChangeClientStateMutationVariables>(ChangeClientStateDocument, baseOptions);
      }
export type ChangeClientStateMutationHookResult = ReturnType<typeof useChangeClientStateMutation>;
export type ChangeClientStateMutationResult = Apollo.MutationResult<ChangeClientStateMutation>;
export type ChangeClientStateMutationOptions = Apollo.BaseMutationOptions<ChangeClientStateMutation, ChangeClientStateMutationVariables>;
export const CreateClientDocument = gql`
    mutation CreateClient($name: String!, $last_name: String!, $email: String!, $memo: String!, $state_id: Float!, $discount_id: Float!, $store_id: Float) {
  createClient(
    data: {name: $name, last_name: $last_name, email: $email, memo: $memo, state_id: $state_id, discount_id: $discount_id, store_id: $store_id}
  ) {
    data {
      ...Client
    }
    message
  }
}
    ${ClientFragmentDoc}`;
export type CreateClientMutationFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      name: // value for 'name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *      memo: // value for 'memo'
 *      state_id: // value for 'state_id'
 *      discount_id: // value for 'discount_id'
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: Apollo.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        return Apollo.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, baseOptions);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const CreatePhoneDocument = gql`
    mutation CreatePhone($name: String!, $client_id: Float!, $area_code: String!, $phone: String!) {
  createPhone(
    data: {name: $name, client_id: $client_id, area_code: $area_code, phone: $phone}
  ) {
    data {
      ...ClientPhone
    }
    message
  }
}
    ${ClientPhoneFragmentDoc}`;
export type CreatePhoneMutationFn = Apollo.MutationFunction<CreatePhoneMutation, CreatePhoneMutationVariables>;

/**
 * __useCreatePhoneMutation__
 *
 * To run a mutation, you first call `useCreatePhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhoneMutation, { data, loading, error }] = useCreatePhoneMutation({
 *   variables: {
 *      name: // value for 'name'
 *      client_id: // value for 'client_id'
 *      area_code: // value for 'area_code'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCreatePhoneMutation(baseOptions?: Apollo.MutationHookOptions<CreatePhoneMutation, CreatePhoneMutationVariables>) {
        return Apollo.useMutation<CreatePhoneMutation, CreatePhoneMutationVariables>(CreatePhoneDocument, baseOptions);
      }
export type CreatePhoneMutationHookResult = ReturnType<typeof useCreatePhoneMutation>;
export type CreatePhoneMutationResult = Apollo.MutationResult<CreatePhoneMutation>;
export type CreatePhoneMutationOptions = Apollo.BaseMutationOptions<CreatePhoneMutation, CreatePhoneMutationVariables>;
export const CreateShippingDocument = gql`
    mutation CreateShipping($name: String!, $street: String!, $street_number: Float!, $postal_code: String!, $cuit: String!, $memo: String!, $province_id: String!, $location_id: String!, $client_id: Float!, $transport_id: Float!) {
  createShipping(
    data: {name: $name, street: $street, street_number: $street_number, postal_code: $postal_code, memo: $memo, cuit: $cuit, province_id: $province_id, location_id: $location_id, transport_id: $transport_id, client_id: $client_id}
  ) {
    data {
      ...ClientShipping
    }
    message
  }
}
    ${ClientShippingFragmentDoc}`;
export type CreateShippingMutationFn = Apollo.MutationFunction<CreateShippingMutation, CreateShippingMutationVariables>;

/**
 * __useCreateShippingMutation__
 *
 * To run a mutation, you first call `useCreateShippingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShippingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShippingMutation, { data, loading, error }] = useCreateShippingMutation({
 *   variables: {
 *      name: // value for 'name'
 *      street: // value for 'street'
 *      street_number: // value for 'street_number'
 *      postal_code: // value for 'postal_code'
 *      cuit: // value for 'cuit'
 *      memo: // value for 'memo'
 *      province_id: // value for 'province_id'
 *      location_id: // value for 'location_id'
 *      client_id: // value for 'client_id'
 *      transport_id: // value for 'transport_id'
 *   },
 * });
 */
export function useCreateShippingMutation(baseOptions?: Apollo.MutationHookOptions<CreateShippingMutation, CreateShippingMutationVariables>) {
        return Apollo.useMutation<CreateShippingMutation, CreateShippingMutationVariables>(CreateShippingDocument, baseOptions);
      }
export type CreateShippingMutationHookResult = ReturnType<typeof useCreateShippingMutation>;
export type CreateShippingMutationResult = Apollo.MutationResult<CreateShippingMutation>;
export type CreateShippingMutationOptions = Apollo.BaseMutationOptions<CreateShippingMutation, CreateShippingMutationVariables>;
export const DeleteClientDocument = gql`
    mutation DeleteClient($id: Float!) {
  deleteClient(data: {id: $id}) {
    data
    message
  }
}
    `;
export type DeleteClientMutationFn = Apollo.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClientMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClientMutation, DeleteClientMutationVariables>) {
        return Apollo.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument, baseOptions);
      }
export type DeleteClientMutationHookResult = ReturnType<typeof useDeleteClientMutation>;
export type DeleteClientMutationResult = Apollo.MutationResult<DeleteClientMutation>;
export type DeleteClientMutationOptions = Apollo.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;
export const DeletePhoneDocument = gql`
    mutation DeletePhone($id: Float!) {
  deletePhone(data: {id: $id}) {
    data
    message
  }
}
    `;
export type DeletePhoneMutationFn = Apollo.MutationFunction<DeletePhoneMutation, DeletePhoneMutationVariables>;

/**
 * __useDeletePhoneMutation__
 *
 * To run a mutation, you first call `useDeletePhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhoneMutation, { data, loading, error }] = useDeletePhoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePhoneMutation(baseOptions?: Apollo.MutationHookOptions<DeletePhoneMutation, DeletePhoneMutationVariables>) {
        return Apollo.useMutation<DeletePhoneMutation, DeletePhoneMutationVariables>(DeletePhoneDocument, baseOptions);
      }
export type DeletePhoneMutationHookResult = ReturnType<typeof useDeletePhoneMutation>;
export type DeletePhoneMutationResult = Apollo.MutationResult<DeletePhoneMutation>;
export type DeletePhoneMutationOptions = Apollo.BaseMutationOptions<DeletePhoneMutation, DeletePhoneMutationVariables>;
export const UpdateClientDocument = gql`
    mutation UpdateClient($id: Float!, $name: String!, $last_name: String!, $email: String!, $memo: String!, $state_id: Float!, $discount_id: Float!, $store_id: Float) {
  updateClient(
    data: {id: $id, client: {name: $name, last_name: $last_name, email: $email, memo: $memo, state_id: $state_id, discount_id: $discount_id, store_id: $store_id}}
  ) {
    data {
      ...Client
    }
    message
  }
}
    ${ClientFragmentDoc}`;
export type UpdateClientMutationFn = Apollo.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *      memo: // value for 'memo'
 *      state_id: // value for 'state_id'
 *      discount_id: // value for 'discount_id'
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        return Apollo.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, baseOptions);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = Apollo.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = Apollo.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
export const UpdatePhoneDocument = gql`
    mutation UpdatePhone($id: Float!, $name: String!, $area_code: String!, $phone: String!, $client_id: Float!) {
  updatePhone(
    data: {id: $id, phone: {name: $name, area_code: $area_code, phone: $phone, client_id: $client_id}}
  ) {
    data {
      ...ClientPhone
    }
    message
  }
}
    ${ClientPhoneFragmentDoc}`;
export type UpdatePhoneMutationFn = Apollo.MutationFunction<UpdatePhoneMutation, UpdatePhoneMutationVariables>;

/**
 * __useUpdatePhoneMutation__
 *
 * To run a mutation, you first call `useUpdatePhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhoneMutation, { data, loading, error }] = useUpdatePhoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      area_code: // value for 'area_code'
 *      phone: // value for 'phone'
 *      client_id: // value for 'client_id'
 *   },
 * });
 */
export function useUpdatePhoneMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhoneMutation, UpdatePhoneMutationVariables>) {
        return Apollo.useMutation<UpdatePhoneMutation, UpdatePhoneMutationVariables>(UpdatePhoneDocument, baseOptions);
      }
export type UpdatePhoneMutationHookResult = ReturnType<typeof useUpdatePhoneMutation>;
export type UpdatePhoneMutationResult = Apollo.MutationResult<UpdatePhoneMutation>;
export type UpdatePhoneMutationOptions = Apollo.BaseMutationOptions<UpdatePhoneMutation, UpdatePhoneMutationVariables>;
export const GetClientDocument = gql`
    query GetClient($id: Float!) {
  getClient(vars: {id: $id}) {
    data {
      ...Client
    }
  }
}
    ${ClientFragmentDoc}`;

/**
 * __useGetClientQuery__
 *
 * To run a query within a React component, call `useGetClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClientQuery(baseOptions: Apollo.QueryHookOptions<GetClientQuery, GetClientQueryVariables>) {
        return Apollo.useQuery<GetClientQuery, GetClientQueryVariables>(GetClientDocument, baseOptions);
      }
export function useGetClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientQuery, GetClientQueryVariables>) {
          return Apollo.useLazyQuery<GetClientQuery, GetClientQueryVariables>(GetClientDocument, baseOptions);
        }
export type GetClientQueryHookResult = ReturnType<typeof useGetClientQuery>;
export type GetClientLazyQueryHookResult = ReturnType<typeof useGetClientLazyQuery>;
export type GetClientQueryResult = Apollo.QueryResult<GetClientQuery, GetClientQueryVariables>;
export const ListClientsDocument = gql`
    query ListClients($search: String, $order_by: String, $order_type: String, $page: Float, $per_page: Float) {
  listClients(
    vars: {search: $search, order_by: $order_by, order_type: $order_type, page: $page, per_page: $per_page}
  ) {
    data {
      id
      name
      last_name
      email
      memo
      store {
        id
        name
      }
      state {
        id
        name
      }
      discount {
        id
        percentage
      }
      phones {
        id
        name
        area_code
        phone
      }
      shippings {
        id
        name
        street
        street_number
        cuit
        province
        location
        postal_code
        transport {
          id
          name
        }
        memo
      }
      created_at
    }
    filters {
      search
      page
      per_page
      order_by
      order_type
      count
    }
    message
  }
}
    `;

/**
 * __useListClientsQuery__
 *
 * To run a query within a React component, call `useListClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListClientsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      order_by: // value for 'order_by'
 *      order_type: // value for 'order_type'
 *      page: // value for 'page'
 *      per_page: // value for 'per_page'
 *   },
 * });
 */
export function useListClientsQuery(baseOptions?: Apollo.QueryHookOptions<ListClientsQuery, ListClientsQueryVariables>) {
        return Apollo.useQuery<ListClientsQuery, ListClientsQueryVariables>(ListClientsDocument, baseOptions);
      }
export function useListClientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListClientsQuery, ListClientsQueryVariables>) {
          return Apollo.useLazyQuery<ListClientsQuery, ListClientsQueryVariables>(ListClientsDocument, baseOptions);
        }
export type ListClientsQueryHookResult = ReturnType<typeof useListClientsQuery>;
export type ListClientsLazyQueryHookResult = ReturnType<typeof useListClientsLazyQuery>;
export type ListClientsQueryResult = Apollo.QueryResult<ListClientsQuery, ListClientsQueryVariables>;
export const ListDiscountsDocument = gql`
    query ListDiscounts {
  listDiscounts {
    data {
      id
      percentage
    }
    message
  }
}
    `;

/**
 * __useListDiscountsQuery__
 *
 * To run a query within a React component, call `useListDiscountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDiscountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDiscountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDiscountsQuery(baseOptions?: Apollo.QueryHookOptions<ListDiscountsQuery, ListDiscountsQueryVariables>) {
        return Apollo.useQuery<ListDiscountsQuery, ListDiscountsQueryVariables>(ListDiscountsDocument, baseOptions);
      }
export function useListDiscountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDiscountsQuery, ListDiscountsQueryVariables>) {
          return Apollo.useLazyQuery<ListDiscountsQuery, ListDiscountsQueryVariables>(ListDiscountsDocument, baseOptions);
        }
export type ListDiscountsQueryHookResult = ReturnType<typeof useListDiscountsQuery>;
export type ListDiscountsLazyQueryHookResult = ReturnType<typeof useListDiscountsLazyQuery>;
export type ListDiscountsQueryResult = Apollo.QueryResult<ListDiscountsQuery, ListDiscountsQueryVariables>;
export const GetProvincesDocument = gql`
    query GetProvinces {
  getAllProvinces {
    data
    message
  }
}
    `;

/**
 * __useGetProvincesQuery__
 *
 * To run a query within a React component, call `useGetProvincesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProvincesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProvincesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProvincesQuery(baseOptions?: Apollo.QueryHookOptions<GetProvincesQuery, GetProvincesQueryVariables>) {
        return Apollo.useQuery<GetProvincesQuery, GetProvincesQueryVariables>(GetProvincesDocument, baseOptions);
      }
export function useGetProvincesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProvincesQuery, GetProvincesQueryVariables>) {
          return Apollo.useLazyQuery<GetProvincesQuery, GetProvincesQueryVariables>(GetProvincesDocument, baseOptions);
        }
export type GetProvincesQueryHookResult = ReturnType<typeof useGetProvincesQuery>;
export type GetProvincesLazyQueryHookResult = ReturnType<typeof useGetProvincesLazyQuery>;
export type GetProvincesQueryResult = Apollo.QueryResult<GetProvincesQuery, GetProvincesQueryVariables>;
export const GetLocationsDocument = gql`
    query GetLocations($province_id: String!) {
  getLocations(vars: {province_id: $province_id}) {
    data
    message
  }
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      province_id: // value for 'province_id'
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, baseOptions);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, baseOptions);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;
export const ListRolesDocument = gql`
    query ListRoles {
  listRoles {
    data {
      id
      name
    }
    message
  }
}
    `;

/**
 * __useListRolesQuery__
 *
 * To run a query within a React component, call `useListRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListRolesQuery(baseOptions?: Apollo.QueryHookOptions<ListRolesQuery, ListRolesQueryVariables>) {
        return Apollo.useQuery<ListRolesQuery, ListRolesQueryVariables>(ListRolesDocument, baseOptions);
      }
export function useListRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRolesQuery, ListRolesQueryVariables>) {
          return Apollo.useLazyQuery<ListRolesQuery, ListRolesQueryVariables>(ListRolesDocument, baseOptions);
        }
export type ListRolesQueryHookResult = ReturnType<typeof useListRolesQuery>;
export type ListRolesLazyQueryHookResult = ReturnType<typeof useListRolesLazyQuery>;
export type ListRolesQueryResult = Apollo.QueryResult<ListRolesQuery, ListRolesQueryVariables>;
export const ListStatesDocument = gql`
    query ListStates {
  listStates {
    data {
      id
      name
    }
    message
  }
}
    `;

/**
 * __useListStatesQuery__
 *
 * To run a query within a React component, call `useListStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListStatesQuery(baseOptions?: Apollo.QueryHookOptions<ListStatesQuery, ListStatesQueryVariables>) {
        return Apollo.useQuery<ListStatesQuery, ListStatesQueryVariables>(ListStatesDocument, baseOptions);
      }
export function useListStatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStatesQuery, ListStatesQueryVariables>) {
          return Apollo.useLazyQuery<ListStatesQuery, ListStatesQueryVariables>(ListStatesDocument, baseOptions);
        }
export type ListStatesQueryHookResult = ReturnType<typeof useListStatesQuery>;
export type ListStatesLazyQueryHookResult = ReturnType<typeof useListStatesLazyQuery>;
export type ListStatesQueryResult = Apollo.QueryResult<ListStatesQuery, ListStatesQueryVariables>;
export const ListStoresDocument = gql`
    query ListStores {
  listStores {
    data {
      id
      name
    }
    message
  }
}
    `;

/**
 * __useListStoresQuery__
 *
 * To run a query within a React component, call `useListStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useListStoresQuery(baseOptions?: Apollo.QueryHookOptions<ListStoresQuery, ListStoresQueryVariables>) {
        return Apollo.useQuery<ListStoresQuery, ListStoresQueryVariables>(ListStoresDocument, baseOptions);
      }
export function useListStoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStoresQuery, ListStoresQueryVariables>) {
          return Apollo.useLazyQuery<ListStoresQuery, ListStoresQueryVariables>(ListStoresDocument, baseOptions);
        }
export type ListStoresQueryHookResult = ReturnType<typeof useListStoresQuery>;
export type ListStoresLazyQueryHookResult = ReturnType<typeof useListStoresLazyQuery>;
export type ListStoresQueryResult = Apollo.QueryResult<ListStoresQuery, ListStoresQueryVariables>;
export const ChangeUserStateDocument = gql`
    mutation ChangeUserState($id: Float!) {
  changeUserState(data: {id: $id}) {
    data {
      ...User
    }
    message
  }
}
    ${UserFragmentDoc}`;
export type ChangeUserStateMutationFn = Apollo.MutationFunction<ChangeUserStateMutation, ChangeUserStateMutationVariables>;

/**
 * __useChangeUserStateMutation__
 *
 * To run a mutation, you first call `useChangeUserStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserStateMutation, { data, loading, error }] = useChangeUserStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChangeUserStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserStateMutation, ChangeUserStateMutationVariables>) {
        return Apollo.useMutation<ChangeUserStateMutation, ChangeUserStateMutationVariables>(ChangeUserStateDocument, baseOptions);
      }
export type ChangeUserStateMutationHookResult = ReturnType<typeof useChangeUserStateMutation>;
export type ChangeUserStateMutationResult = Apollo.MutationResult<ChangeUserStateMutation>;
export type ChangeUserStateMutationOptions = Apollo.BaseMutationOptions<ChangeUserStateMutation, ChangeUserStateMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $password: String!, $name: String!, $last_name: String!, $store_id: Float!, $role_id: Float!, $state_id: Float!) {
  createUser(
    data: {username: $username, password: $password, name: $name, last_name: $last_name, store_id: $store_id, role_id: $role_id, state_id: $state_id}
  ) {
    data {
      username
      name
      last_name
    }
    message
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *      last_name: // value for 'last_name'
 *      store_id: // value for 'store_id'
 *      role_id: // value for 'role_id'
 *      state_id: // value for 'state_id'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Float!) {
  deleteUser(data: {id: $id}) {
    data
    message
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(data: {username: $username, password: $password}) {
    data {
      ...User
    }
    message
  }
}
    ${UserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Float!, $username: String!, $password: String!, $name: String!, $last_name: String!, $store_id: Float!, $role_id: Float!, $state_id: Float!) {
  updateUser(
    data: {id: $id, user: {username: $username, password: $password, name: $name, last_name: $last_name, store_id: $store_id, role_id: $role_id, state_id: $state_id}}
  ) {
    data {
      ...User
    }
    message
  }
}
    ${UserFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *      last_name: // value for 'last_name'
 *      store_id: // value for 'store_id'
 *      role_id: // value for 'role_id'
 *      state_id: // value for 'state_id'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const ListUsersDocument = gql`
    query ListUsers($search: String, $order_by: String, $order_type: String, $page: Float, $per_page: Float) {
  listUsers(
    vars: {search: $search, order_by: $order_by, order_type: $order_type, page: $page, per_page: $per_page}
  ) {
    data {
      ...User
    }
    filters {
      search
      page
      per_page
      order_by
      order_type
      count
    }
    message
  }
}
    ${UserFragmentDoc}`;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *      search: // value for 'search'
 *      order_by: // value for 'order_by'
 *      order_type: // value for 'order_type'
 *      page: // value for 'page'
 *      per_page: // value for 'per_page'
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    data {
      ...User
    }
    message
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;