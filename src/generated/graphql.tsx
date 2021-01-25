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
  hello: Scalars['String'];
  listStores: ListStoresResponse;
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
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Stores = {
  __typename?: 'Stores';
  id: Scalars['Float'];
  name: Scalars['String'];
  users: Array<Users>;
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

export type Status = {
  __typename?: 'Status';
  id: Scalars['Float'];
  name: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
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