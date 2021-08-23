/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { Login } from '@auth/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: BehaviorSubject<Login | undefined>;
  isAuthenticated: BehaviorSubject<boolean>;

  constructor(private apollo: Apollo) {
    this.user = new BehaviorSubject<Login | undefined>(undefined);
    this.isAuthenticated = new BehaviorSubject<boolean>(
      Boolean(localStorage.getItem('token')),
    );
  }

  login(email: string, password: string) {
    this.apollo
      .mutate<{ login: Login }>({
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
          if (data) {
            localStorage.setItem('token', data.login.accessToken);
            localStorage.setItem('refreshToken', data.login.refreshToken);
            this.isAuthenticated.next(true);
            this.user.next(data.login);
          }
        },
        (error) => {
          throw new Error(error);
        },
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.isAuthenticated.next(false);
  }
}
