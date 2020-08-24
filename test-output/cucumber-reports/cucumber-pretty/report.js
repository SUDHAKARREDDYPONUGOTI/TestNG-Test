$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/API-Test.feature");
formatter.feature({
  "line": 1,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5794462200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@AllScenario"
    },
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I get the list of all users",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see total users count equals to number of user ids",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.getAllusers()"
});
formatter.result({
  "duration": 3436840800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.list_allusers()"
});
formatter.result({
  "duration": 231566100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Total_user_count()"
});
formatter.result({
  "duration": 1110299100,
  "status": "passed"
});
formatter.after({
  "duration": 4682360600,
  "status": "passed"
});
formatter.before({
  "duration": 5309886400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@AllScenario"
    },
    {
      "line": 10,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I should see following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Should_see_SINGLE_USER_data()"
});
formatter.result({
  "duration": 261201600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.followinguserdata(DataTable)"
});
formatter.result({
  "duration": 331646900,
  "status": "passed"
});
formatter.after({
  "duration": 711806300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 22,
      "value": "#  no \u0027name\u0027 and \u0027job\u0027 coumuns in the url - https://reqres.in/api/users"
    }
  ],
  "line": 25,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@AllScenario"
    },
    {
      "line": 24,
      "name": "@Scenario-Test1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create user with following \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "first_name",
        "last_name",
        "id",
        "email"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "first_name",
        "last_name"
      ],
      "line": 31,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 32,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 33,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5496593500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@AllScenario"
    },
    {
      "line": 24,
      "name": "@Scenario-Test1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create user with following \"Peter\" \"Manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "first_name",
        "last_name",
        "id",
        "email"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 30
    },
    {
      "val": "Manager",
      "offset": 38
    }
  ],
  "location": "StepDefinition.createuser(String,String)"
});
formatter.result({
  "duration": 712419200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.responcecode(String,String,int,String)"
});
formatter.result({
  "duration": 1493200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027AutomationTest.BrightTalkTest.StepDefinition.responcecode(String,String,int,String) in file:/F:/BDD%20Farmework%20Workspace/brighttalktech-automation-test-task-maven/target/test-classes/\u0027 with pattern [^response should contain folowing data$] is declared with 4 parameters. However, the gherkin step has 1 arguments [Table:[[first_name, last_name, id, email]]]. \nStep: Then response should contain folowing data\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat AutomationTest.BrightTalkTest.RunnerTest.feature(RunnerTest.java:49)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:131)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:570)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:170)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:790)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:143)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:763)\r\n\tat org.testng.TestRunner.run(TestRunner.java:594)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:398)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:392)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1146)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1067)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:997)\r\n\tat org.testng.TestNG.run(TestNG.java:965)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 672746500,
  "status": "passed"
});
formatter.before({
  "duration": 5469309300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@AllScenario"
    },
    {
      "line": 24,
      "name": "@Scenario-Test1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create user with following \"Liza\" \"Sales\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "first_name",
        "last_name",
        "id",
        "email"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 30
    },
    {
      "val": "Sales",
      "offset": 37
    }
  ],
  "location": "StepDefinition.createuser(String,String)"
});
formatter.result({
  "duration": 692629500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.responcecode(String,String,int,String)"
});
formatter.result({
  "duration": 929400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027AutomationTest.BrightTalkTest.StepDefinition.responcecode(String,String,int,String) in file:/F:/BDD%20Farmework%20Workspace/brighttalktech-automation-test-task-maven/target/test-classes/\u0027 with pattern [^response should contain folowing data$] is declared with 4 parameters. However, the gherkin step has 1 arguments [Table:[[first_name, last_name, id, email]]]. \nStep: Then response should contain folowing data\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat AutomationTest.BrightTalkTest.RunnerTest.feature(RunnerTest.java:49)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:131)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:570)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:170)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:790)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:143)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:763)\r\n\tat org.testng.TestRunner.run(TestRunner.java:594)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:398)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:392)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1146)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1067)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:997)\r\n\tat org.testng.TestNG.run(TestNG.java:965)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 675504600,
  "status": "passed"
});
formatter.before({
  "duration": 5354562800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@AllScenario"
    },
    {
      "line": 36,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I login succesfully with Email and Password",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 39
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 40
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Successfull_User(DataTable)"
});
formatter.result({
  "duration": 707776800,
  "status": "passed"
});
formatter.after({
  "duration": 774648200,
  "status": "passed"
});
formatter.before({
  "duration": 5518882400,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@AllScenario"
    },
    {
      "line": 43,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I login unsuccesfully with Email and Password",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 46
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ],
      "line": 47
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Unsucecssful_login(DataTable)"
});
formatter.result({
  "duration": 1030693300,
  "status": "passed"
});
formatter.after({
  "duration": 1838056100,
  "status": "passed"
});
formatter.before({
  "duration": 5437628600,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Should see list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@AllScenario"
    },
    {
      "line": 50,
      "name": "@Scenario-Test"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I wait for user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Detlayed()"
});
formatter.result({
  "duration": 178574400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.uniqueid()"
});
formatter.result({
  "duration": 184735800,
  "status": "passed"
});
formatter.after({
  "duration": 754082100,
  "status": "passed"
});
});