//The page folder suppose to be outside the tests folder

exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_field = page.getByPlaceholder('Username')
        this.password_field = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage() { 
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    async login(username, password){

        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click()
    }

}