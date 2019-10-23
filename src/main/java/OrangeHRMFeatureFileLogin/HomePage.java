package OrangeHRMFeatureFileLogin;

import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends UtilsPage{

    private By _userName = By.id("txtUsername");
    private By _passWord = By.id("txtPassword");
    private By _clickLogin = By.id("btnLogin");
    private By _errorMessage = By.id("spanMessage");



    public void userIsHomePage(){

        assert_URLMethod("https://opensource-demo.orangehrmlive.com/");


    }
    public void enterUserName(String text){

        enterText(_userName,text);
    }

    public void enterPassWord(String text){

        enterText(_passWord,text);
    }

    public void errorMessage(String text){

        String acutalResult = extractText(_errorMessage);
        String expectedResult = text;
        Assert.assertEquals(acutalResult,expectedResult);
        System.out.println(text);
    }

    public void clickLogin(){

        clickElement(_clickLogin);
    }

    public void validUserName(){

        enterText(_userName,getProperty("ValidName"));
    }

    public void validPassword(){

        enterText(_passWord,getProperty("ValidPassword"));
    }
}
