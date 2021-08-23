/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private apollo: Apollo) {}

  login(email: string, password: string) {
    this.apollo
      .mutate({
        mutation: gql`
          mutation loginMutation($email: String!, $password: String!) {
            login(input: { email: $email, password: $password }) {
              id
              accessToken
              email
              firstName
              lastName
              refreshToken
            }
          }
        `,
        variables: { email, password },
      })
      .subscribe(
        ({ data }) => {
          console.log(data);
        },
        (error) => {
          console.error('Api error >>> login', error);
        },
      );
  }
}
