import { Account } from './account';
import { Accounts } from './mock-accounts';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{
    getProfile(): Promise<Account[]>{
        return Promise.resolve(Accounts)
    }
     login(email: string, password: string): Promise<Account> {
            return this.getProfile()
                .then(accounts => accounts.find(accounts => accounts.email === email))
        }
    }
