package OrangeHRMFeatureFileLogin;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;



public class Hooks extends BasePage {

BrowserSelector browserSelector = new BrowserSelector();
UtilsPage utilsPage = new UtilsPage();

@Before
    public void setUpBrowser3(){


        browserSelector.setUpBrowser();
        utilsPage.manageWindow();
        utilsPage.manageTimeoutImplicity();
        driver.get("https://opensource-demo.orangehrmlive.com/");

}
    @After
    public void closeBrowser(Scenario scenario){

        if(scenario.isFailed()){

            UtilsPage.takeSnapShot(scenario.getName());
        }
        driver.quit();
    }

}
