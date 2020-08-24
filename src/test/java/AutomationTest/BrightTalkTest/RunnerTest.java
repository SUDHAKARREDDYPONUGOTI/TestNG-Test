package AutomationTest.BrightTalkTest;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

@CucumberOptions(
		
        features = "src/test/java/API-Test.feature",     // tags commented
        
       //  src/test/java/AutomationTest/BrightTalkTest/StepDefinition.java  - no need open browser us this path
       
        //  AutomationTest.BrightTalkTest
        glue = {"AutomationTest.BrightTalkTest"},
       
        tags = {"@AllScenario"},
        
        //to check the mapping  between feature file and step def file - Sudhakar
        dryRun = false,
        
        //display the console output in a proper readable format
        monochrome = true, 
        
       //It will check if any step is not defined in step definition file
    	//strict = true, 
     
        
        format = {
                "pretty",
                "html:test-output/cucumber-reports/cucumber-pretty",
                "json:test-output/cucumber-reports/CucumberTestReport.json",
                "rerun:test-output/cucumber-reports/rerun.txt"
        })
public class RunnerTest {

    private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() {
        testNGCucumberRunner.finish();
    }


}
