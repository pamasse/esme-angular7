
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('Ok');
        return false;
    }
}