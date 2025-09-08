import {th} from "@faker-js/faker";
import {expect} from "@playwright/test";

export class ArticlePage {
    constructor(page) {
        // техническое описание страницы
        //create
        this.newArticle = page.getByRole('link', { name: ' New Article' });
        this.articleTitle = page.getByRole('textbox', { name: 'Article Title' });
        this.articleAbout = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleWrite = page.getByRole('textbox', { name: 'Write your article (in' });
        this.enterTags = page.getByRole('textbox', { name: 'Enter tags' });
        this.articlePublish = page.getByText('Publish Article');
        //update
        this.editArticle = page.getByRole('link', { name: ' Edit Article' });
        this.articleUpdate = page.getByRole('button', { name: 'Update Article' });
        //post comment
        this.writeComment = page.getByRole('textbox', { name: 'Write a comment...' });
        this.postComment = page.getByRole('button', { name: 'Post Comment' });
        //favorite
        this.userProfile = page.locator('.user-pic');
        this.linkProfile = page.getByRole('link', { name: ' Profile' });
        this.chooseFavorite = page.getByRole('button', { name: ' ( 0 )' });
        this.favoriteTab = page.getByRole('link', { name: 'Favorited Articles' });
    }
    // бизнесовые действия со страницой
    async createNewArticle(articleName) {
        await this.newArticle.click();
        await this.articleTitle.click();
        await this.articleTitle.fill(articleName);
        await this.articleAbout.click();
        await this.articleAbout.fill('Новый Артикль');
        await this.articleWrite.click();
        await this.articleWrite.fill('тест');
        await this.enterTags.click();
        await this.enterTags.fill('Артикль123');
        await this.articlePublish.click();
    }

    async updateArticle(articleName) {
        await this.editArticle.nth(1).click();
        await this.articleTitle.click();
        await this.articleTitle.clear();
        await this.articleTitle.fill(articleName);
        await this.articleUpdate.click();
    }

    async newPostComment() {
        await this.writeComment.click();
        await this.writeComment.fill('новый коммент');
        await this.postComment.click();
    }

    async favoriteArticle() {
        await this.userProfile.click();
        await this.linkProfile.click();
        await this.chooseFavorite.click();
    }

    async goToFavoriteTab() {
        await this.userProfile.click();
        await this.linkProfile.click();
        await this.chooseFavorite.click();
        await this.favoriteTab.click();
    }
}