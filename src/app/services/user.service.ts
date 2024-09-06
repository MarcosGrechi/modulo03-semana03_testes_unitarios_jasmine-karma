import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: string[] = [];

  addUser(name: string) {
    this.users.push(name);
  }

  getUsers() {
    return this.users;
  }

  clearUsers() {
    this.users = [];
  }
}
