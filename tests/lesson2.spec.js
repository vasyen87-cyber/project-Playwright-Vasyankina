import { test, expect } from '@playwright/test';

const URL = 'file:///Users/elena.vasyankina/Downloads/demo.html';


test('Поиск элемента по ID', async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page.locator('#email').click();
  await page.locator('#email').fill('d@ya.ru');
  await page.locator('#password').click();
  await page.locator('#password').fill('superPassword');
  await page.locator('#btn').click();

  await expect(page.locator('#welcome-txt')).toContainText('Привет');
});

test('Поиск элемента по аттрибуту', async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page.locator('[name="email"]').click();
  await page.locator('[name="email"]').fill('d@ya.ru');
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill('superPassword');
  await page.locator('[id="btn"]').click();

  await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});

test('Поиск элемента по классу', async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  //await page.locator('[name="email"]').click();
  await page
      .locator('.el-input__wrapper')
      .filter({ has: page.locator('#email') })
      .click();
  await page.locator('[name="email"]').fill('d@ya.ru');
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill('superPassword');
  await page.locator('[id="btn"]').click();

  await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});

test.only('Поиск элемента по семантическим селекторы', async ({ page }) => {
  await page.goto(URL);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('d@ya.ru');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('superPassword');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});