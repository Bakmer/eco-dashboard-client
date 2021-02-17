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
  listRoles: ListRolesResponse;
  listStates: ListStatesResponse;
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
  stateId: Scalars['Float'];
  store: Stores;
  role: Roles;
  state: States;
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
  stateId: Scalars['Float'];
  userId: Scalars['Float'];
  store: Stores;
  state: States;
  user: Users;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type States = {
  __typename?: 'States';
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

export type ListRolesResponse = {
  __typename?: 'ListRolesResponse';
  data?: Maybe<Array<Roles>>;
  message?: Maybe<Scalars['String']>;
};

export type ListStatesResponse = {
  __typename?: 'ListStatesResponse';
  data?: Maybe<Array<States>>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserResponse;
  login: UserResponse;
  changeUserState: ChangeStateResponse;
  updateUser: UserResponse;
  logout: UserResponse;
  deleteAllUsers: Scalars['String'];
  createStore: StoreResponse;
  createRole: RoleResponse;
  createState: StatesResponse;
  createClient: ClientResponse;
};


export type MutationCreateUserArgs = {
  data: CreateUserFields;
};


export type MutationLoginArgs = {
  data: UsernamePasswordInput;
};


export type MutationChangeUserStateArgs = {
  data: ChangeUserStateFields;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserFields;
};


export type MutationCreateStoreArgs = {
  data: CreateStoreFields;
};


export type MutationCreateRoleArgs = {
  data: CreateRoleField;
};


export type MutationCreateStateArgs = {
  data: CreateStatesFields;
};


export type MutationCreateClientArgs = {
  data: CreateFields;
};

export type CreateUserFields = {
  name: Scalars['String'];
  last_name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  storeId: Scalars['Float'];
  roleId: Scalars['Float'];
  stateId: Scalars['Float'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type ChangeStateResponse = {
  __typename?: 'ChangeStateResponse';
  data?: Maybe<StateFields>;
  message?: Maybe<Scalars['String']>;
};

export type StateFields = {
  __typename?: 'StateFields';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type ChangeUserStateFields = {
  id: Scalars['Float'];
};

export type UpdateUserFields = {
  id?: Maybe<Scalars['Float']>;
  user: CreateUserFields;
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

export type StatesResponse = {
  __typename?: 'StatesResponse';
  data?: Maybe<States>;
  message?: Maybe<Scalars['String']>;
};

export type CreateStatesFields = {
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
  stateId: Scalars['Float'];
};

export type ListRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListRolesQuery = (
  { __typename?: 'Query' }
  & { listRoles: (
    { __typename?: 'ListRolesResponse' }
    & Pick<ListRolesResponse, 'message'>
    & { data?: Maybe<Array<(
      { __typename?: 'Roles' }
      & Pick<Roles, 'id' | 'name'>
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
      { __typename?: 'States' }
      & Pick<States, 'id' | 'name'>
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
      { __typename?: 'Stores' }
      & Pick<Stores, 'id' | 'name'>
    )>> }
  ) }
);

export type ChangeUserStateMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type ChangeUserStateMutation = (
  { __typename?: 'Mutation' }
  & { changeUserState: (
    { __typename?: 'ChangeStateResponse' }
    & Pick<ChangeStateResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'StateFields' }
      & Pick<StateFields, 'id' | 'name'>
    )> }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  storeId: Scalars['Float'];
  roleId: Scalars['Float'];
  stateId: Scalars['Float'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Users' }
      & Pick<Users, 'username' | 'name' | 'last_name'>
    )> }
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
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username' | 'name' | 'last_name'>
      & { store: (
        { __typename?: 'Stores' }
        & Pick<Stores, 'id' | 'name'>
      ), role: (
        { __typename?: 'Roles' }
        & Pick<Roles, 'id' | 'name'>
      ), state: (
        { __typename?: 'States' }
        & Pick<States, 'id' | 'name'>
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

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Float'];
  username: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  last_name: Scalars['String'];
  storeId: Scalars['Float'];
  roleId: Scalars['Float'];
  stateId: Scalars['Float'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'message'>
    & { data?: Maybe<(
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username' | 'name' | 'last_name' | 'password'>
      & { store: (
        { __typename?: 'Stores' }
        & Pick<Stores, 'id' | 'name'>
      ), role: (
        { __typename?: 'Roles' }
        & Pick<Roles, 'id' | 'name'>
      ), state: (
        { __typename?: 'States' }
        & Pick<States, 'id' | 'name'>
      ) }
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
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username' | 'name' | 'last_name' | 'password'>
      & { store: (
        { __typename?: 'Stores' }
        & Pick<Stores, 'id' | 'name'>
      ), role: (
        { __typename?: 'Roles' }
        & Pick<Roles, 'id' | 'name'>
      ), state: (
        { __typename?: 'States' }
        & Pick<States, 'id' | 'name'>
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
      ), state: (
        { __typename?: 'States' }
        & Pick<States, 'id' | 'name'>
      ) }
    )> }
  ) }
);


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
      id
      name
    }
    message
  }
}
    `;
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
    mutation CreateUser($username: String!, $password: String!, $name: String!, $last_name: String!, $storeId: Float!, $roleId: Float!, $stateId: Float!) {
  createUser(
    data: {username: $username, password: $password, name: $name, last_name: $last_name, storeId: $storeId, roleId: $roleId, stateId: $stateId}
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
 *      storeId: // value for 'storeId'
 *      roleId: // value for 'roleId'
 *      stateId: // value for 'stateId'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
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
      state {
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
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Float!, $username: String!, $password: String!, $name: String!, $last_name: String!, $storeId: Float!, $roleId: Float!, $stateId: Float!) {
  updateUser(
    data: {id: $id, user: {username: $username, password: $password, name: $name, last_name: $last_name, storeId: $storeId, roleId: $roleId, stateId: $stateId}}
  ) {
    data {
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
    message
  }
}
    `;
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
 *      storeId: // value for 'storeId'
 *      roleId: // value for 'roleId'
 *      stateId: // value for 'stateId'
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
      state {
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