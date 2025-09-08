import { test} from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { ArticlePage } from '../src/pages/article.page';

const URL = 'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Пользователь может зарегистрироваться с навигацией через клавиатуру', async ({page}) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);
  });

  test('New article', async ({page}) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const articleName = faker.word.words();

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const articlePage = new ArticlePage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);
    await articlePage.createNewArticle(articleName);
  });

  test('Update article', async ({page}) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const articleName = faker.word.words();

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const articlePage = new ArticlePage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);
    await articlePage.createNewArticle(articleName);
    await articlePage.updateArticle(articleName);
  });


  test('post comment', async ({page}) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const articleName = faker.word.words();

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const articlePage = new ArticlePage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);
    await articlePage.createNewArticle(articleName);
    await articlePage.newPostComment();
  });

  test('Click favorite article', async ({page}) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const articleName = faker.word.words();

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const articlePage = new ArticlePage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);
    await articlePage.createNewArticle(articleName);
    await articlePage.favoriteArticle()
  });

  test('Favorite tab', async ({page}) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const articleName = faker.word.words();

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const articlePage = new ArticlePage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);
    await articlePage.createNewArticle(articleName);
    await articlePage.goToFavoriteTab()
  });
});

