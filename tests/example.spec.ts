import { test, expect } from '@playwright/test';


test('TC-1 Verificacion de elementos visuales en la pagina de registro', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('input[name="firstName"]')).toBeVisible();
  await expect(page.locator('input[name="lastName"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.getByTestId('boton-registrarse')).toBeVisible();

});


test('TC-2 Verificar que boton de registrarse este desabilitado por default', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByTestId('boton-registrarse')).toBeDisabled();

});

test('TC-3 Verificar que boton de registrarse se habilite una vez que se llenaron los campos', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('input[name="firstName"]').fill('Juan');
  await page.locator('input[name="lastName"]').fill('Perez');
  await page.locator('input[name="email"]').fill('adrian@email.com');
  await page.locator('input[name="password"]').fill('Password123!');
  await expect(page.getByTestId('boton-registrarse')).toBeEnabled();

});

test('TC-4 Verificar redireccionamiento a la pagina de inicio de sesion al hacer click ', async ({ page }) => {

  await page.goto('http://localhost:3000/');
  await page.getByTestId('boton-login-header-signup').click();
  await expect(page).toHaveURL('http://localhost:3000/login');
 // await expect(page.getByTestId('boton-login')).toBeVisible();
  });

  
test('TC-5 Verificar registro existoso con datos validos', async ({ page }) => {
  const email = 'adrian'+Date.now().toString()+'@email.com';
  await page.goto('http://localhost:3000/');
  await page.locator('input[name="firstName"]').fill('Juan');
  await page.locator('input[name="lastName"]').fill('Perez');
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill('Password123!');
  await page.getByTestId('boton-registrarse').click();
  await expect(page.getByText('Registro exitoso')).toBeVisible();

  });


test('verificar que el usuario no se pueda registrar con un email ya existente', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('input[name="firstName"]').fill('Juan');
  await page.locator('input[name="lastName"]').fill('Perez');
  await page.locator('input[name="email"]').fill('adrian@email.com');
  await page.locator('input[name="password"]').fill('Password123!');
  await page.getByTestId('boton-registrarse').click();
  await expect(page.getByText('El email ya está en uso')).toBeVisible();

}); 