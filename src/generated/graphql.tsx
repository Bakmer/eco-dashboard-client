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
};

export type Query = {
  __typename?: 'Query';
  me: UserResponse;
  listUsers: PaginatedUsersResponse;
  hello: Scalars['String'];
  listStores: ListStoresResponse;
};


export type QueryListUsersArgs = {
  vars?: Maybe<PaginationFields>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  data?: Maybe<Users>;
  message?: Maybe<Scalars['String']>;
};

export type Users = {
  __typename?: 'Users';
  id: Scalars['Float'];
  username: Scalars['String'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  storeId: Scalars['Float'];
  roleId: Scalars['Float'];
  statusId: Scalars['Float'];
  store: Stores;
  role: Roles;
  status: Status;
  clients: Array<Clients>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Stores = {
  __typename?: 'Stores';
  id: Scalars['Float'];
  name: Scalars['String'];
  users: Array<Users>;
  clients: Array<Clients>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Clients = {
  __typename?: 'Clients';
  id: Scalars['Float'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  razon_social: Scalars['String'];
  cuit: Scalars['String'];
  iva: Scalars['String'];
  email: Scalars['String'];
  phone_1: Scalars['String'];
  phone_2?: Maybe<Scalars['String']>;
  phone_3?: Maybe<Scalars['String']>;
  address_1: Scalars['String'];
  address_2?: Maybe<Scalars['String']>;
  address_3?: Maybe<Scalars['String']>;
  memo: Scalars['String'];
  storeId: Scalars['Float'];
  statusId: Scalars['Float'];
  userId: Scalars['Float'];
  store: Stores;
  status: Status;
  user: Users;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['Float'];
  name: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Roles = {
  __typename?: 'Roles';
  id: Scalars['Float'];
  name: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedUsersResponse = {
  __typename?: 'PaginatedUsersResponse';
  data?: Maybe<Array<Users>>;
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
  data?: Maybe<Array<Stores>>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: UserResponse;
  deleteAllUsers: Scalars['String'];
  createStore: StoreResponse;
  createRole: RoleResponse;
  createStatus: StatusResponse;
  createClient: ClientResponse;
};


export type MutationRegisterArgs = {
  data: RegisterFields;
};


export type MutationLoginArgs = {
  data: UsernamePasswordInput;
};


export type MutationCreateStoreArgs = {
  data: CreateStoreFields;
};


export type MutationCreateRoleArgs = {
  data: CreateRoleField;
};


export type MutationCreateStatusArgs = {
  data: CreateStatusFields;
};


export type MutationCreateClientArgs = {
  data: CreateFields;
};

export type RegisterFields = {
  name: Scalars['String'];
  last_name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  storeId: Scalars['Float'];
  roleId: Scalars['Float'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type StoreResponse = {
  __typename?: 'StoreResponse';
  data?: Maybe<Stores>;
  message?: Maybe<Scalars['String']>;
};

export type CreateStoreFields = {
  name: Scalars['String'];
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  data?: Maybe<Roles>;
  message?: Maybe<Scalars['String']>;
};

export type CreateRoleField = {
  name: Scalars['String'];
};

export type StatusResponse = {
  __typename?: 'StatusResponse';
  data?: Maybe<Status>;
  message?: Maybe<Scalars['String']>;
};

export type CreateStatusFields = {
  name: Scalars['String'];
};

export type ClientResponse = {
  __typename?: 'ClientResponse';
  data?: Maybe<Clients>;
  message?: Maybe<Scalars['String']>;
};

export type CreateFields = {
  name: Scalars['String'];
  last_name: Scalars['String'];
  razon_social: Scalars['String'];
  cuit: Scalars['String'];
  iva: Scalars['String'];
  email: Scalars['String'];
  phone_1: Scalars['String'];
  phone_2?: Maybe<Scalars['String']>;
  phone_3?: Maybe<Scalars['String']>;
  address_1: Scalars['String'];
  address_2?: Maybe<Scalars['String']>;
  address_3?: Maybe<Scalars['String']>;
  memo: Scalars['String'];
  storeId: Scalars['Float'];
  statusId: Scalars['Float'];
};

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
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username' | 'name' | 'last_name'>
      & { store: (
        { __typename?: 'Stores' }
        & Pick<Stores, 'id' | 'name'>
      ), role: (
        { __typename?: 'Roles' }
        & Pick<Roles, 'id' | 'name'>
      ) }
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
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username' | 'name' | 'last_name'>
      & { store: (
        { __typename?: 'Stores' }
        & Pick<Stores, 'id' | 'name'>
      ), role: (
        { __typename?: 'Roles' }
        & Pick<Roles, 'id' | 'name'>
      ), status: (
        { __typename?: 'Status' }
        & Pick<Status, 'id' | 'name'>
      ) }
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
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username' | 'name' | 'last_name'>
      & { store: (
        { __typename?: 'Stores' }
        & Pick<Stores, 'id' | 'name'>
      ), role: (
        { __typename?: 'Roles' }
        & Pick<Roles, 'id' | 'name'>
      ) }
    )> }
  ) }
);


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(data: {username: $username, password: $password}) {
    data {
      id
      username
      name
      last_name
      store {
        id
        name
      }
      role {
        id
        name
      }
    }
    message
  }
}
    `;
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
export const ListUsersDocument = gql`
    query ListUsers($search: String, $order_by: String, $order_type: String, $page: Float, $per_page: Float) {
  listUsers(
    vars: {search: $search, order_by: $order_by, order_type: $order_type, page: $page, per_page: $per_page}
  ) {
    data {
      id
      username
      name
      last_name
      store {
        id
        name
      }
      role {
        id
        name
      }
      status {
        id
        name
      }
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
      id
      username
      name
      last_name
      store {
        id
        name
      }
      role {
        id
        name
      }
    }
    message
  }
}
    `;

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