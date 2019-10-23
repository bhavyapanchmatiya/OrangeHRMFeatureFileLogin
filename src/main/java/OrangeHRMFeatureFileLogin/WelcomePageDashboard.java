package OrangeHRMFeatureFileLogin;

public class WelcomePageDashboard {


    public void toVerifyUserIsOnDashBoard(){

        UtilsPage.assert_URLMethod("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
    }
}
