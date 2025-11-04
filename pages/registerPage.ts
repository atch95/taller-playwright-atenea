import {Page,Locator} from '@playwright/test';
import { read } from 'fs';

export class RegisterPage{
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
   readonly loginButton: Locator;
   readonly registerButton: Locator;




    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByTestId('boton-login-header-signup');
        this.registerButton = page.getByTestId('boton-registrarse');

    }

}
// ...existing code...