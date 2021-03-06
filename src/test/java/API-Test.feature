Feature: API test
  
  @AllScenario
  @Scenario1
  Scenario: Should see LIST USERS of all existing users
    Given I get the default list of users for on 1st page
    When I get the list of all users
    Then I should see total users count equals to number of user ids
  @AllScenario
  @Scenario2
  Scenario: Should see SINGLE USER data
    Given I make a search for user 3
    Then I should see following user data
      | first_name    | email         |
  
  @AllScenario  
  @Scenario-Test
  Scenario: Should see SINGLE USER NOT FOUND error code
    Given I make a search for user 55
    Then I receive error code "responce" in response
  
#  no 'name' and 'job' coumuns in the url - https://reqres.in/api/users
  @AllScenario
  @Scenario-Test1
  Scenario Outline: CREATE a user
    Given I create user with following "<first_name>" "<last_name>"
    Then response should contain folowing data
      | first_name | last_name | id | email |
      
    Examples:
      | first_name  | last_name|
      | Peter       | Manager |
      | Liza        | Sales   |
 
  @AllScenario
  @Login
  Scenario: LOGIN - SUCCESSFUL by a user
    Given I login succesfully with Email and Password 
      | Email                 |  Password  |
      | eve.holt@reqres.in    | cityslicka |
     
  @AllScenario
  @Login
  Scenario: LOGIN - UNSUCCESSFUL by a user
    Given I login unsuccesfully with Email and Password
        | Email               |  Password  |
        | eve.holt@reqres.in  |            |
   
 @AllScenario
 @Scenario-Test
  Scenario: Should see list of users with DELAYED RESPONSE
    Given I wait for user list to load
    Then I should see that every user has a unique id
