import { test, expect} from '@playwright/test';
import { App } from '../src/pagesV2/app.pages';
import {UserBuilder} from "../src/helpers/builders/user.builder";

const URL = 'https://realworld.qa.guru/';

    test('Пользователь может зарегистрироваться с навигацией через клавиатуру', async ({page}) => {

        const randomUser = new UserBuilder()
            .addEmail()
            .addPassword()
            .addUsername()
            .generate()
        // todo спрятать app инициализацию
        let app = new App(page);

        await app.main.open();
        await app.main.gotoLogin();


        await app.register.signup(randomUser);
        await expect(app.yourFeed.profileNameField).toContainText(
            randomUser.username,
        );
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

    test('My tab', async ({page}) => {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
        const articleName = faker.finance.bic();

        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        const articlePage = new ArticlePage(page);

        await mainPage.gotoRegister();
        await registerPage.register(user);
        await articlePage.goToMyTab();
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
        await articlePage.goToFavoriteTab()
    });