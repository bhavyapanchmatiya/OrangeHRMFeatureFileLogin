package OrangeHRMFeatureFileLogin;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;

public class MyStepdefs {

    HomePage homePage = new HomePage();
    WelcomePageDashboard welcomePageDashboard = new WelcomePageDashboard();


    @Given("^User is on Homepage$")
    public void userIsOnHomepage() {

        homePage.userIsHomePage();




    }

    @When("^user enter invalid \"([^\"]*)\"$")
    public void userEnter(String UserName) {

        homePage.enterUserName(UserName);
    }

    @And("^or enters invalid \"([^\"]*)\"$")
    public void enters(String PassWord) {

        homePage.enterPassWord(PassWord);

    }


    @Then("^User should be able to see the \"([^\"]*)\"$")
    public void userShouldBeAbleToSeeThe(String Error_message)  {

        homePage.errorMessage(Error_message);


    }

    @And("^click Log in$")
    public void clickLogIn() {

        homePage.clickLogin();
    }

    @When("^User enters valid Username$")
    public void userEntersValidUsername() {
        homePage.validUserName();

    }

    @And("^enter valid password$")
    public void validPassword() {
        homePage.validPassword();

    }

    @Then("^user should be able to see the Dashboard$")
    public void userShouldBeAbleToSeeTheDashboard() {
        welcomePageDashboard.toVerifyUserIsOnDashBoard();



    }
}
