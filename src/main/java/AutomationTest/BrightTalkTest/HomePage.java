package AutomationTest.BrightTalkTest;

import static AutomationTest.BrightTalkTest.LoadProp.getproperty;
// added by me sponugoti
public class HomePage extends BasePage {

    public static void homePage() {
        driver.get(getproperty("url"));
    }
}
