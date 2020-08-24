package AutomationTest.BrightTalkTest;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import edu.emory.mathcs.backport.java.util.concurrent.TimeUnit;
import gherkin.deps.com.google.gson.JsonObject;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.config.HttpClientConfig;
import io.restassured.http.ContentType;
import io.restassured.http.Method;
import io.restassured.matcher.ResponseAwareMatcher;
import io.restassured.path.json.JsonPath;
import io.restassured.response.ResponseBodyData;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;
import userdata.usersdata;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.Matchers.equalTo;
import static org.testng.Assert.assertEquals;
import static AutomationTest.BrightTalkTest.HomePage.homePage;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.collections.list.LazyList;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.impl.client.HttpClientBuilder;
import org.eclipse.jetty.util.security.Credential;
import org.eclipse.jetty.websocket.api.StatusCode;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.collections.Lists;

import com.fasterxml.jackson.databind.deser.impl.CreatorCandidate.Param;
import com.gargoylesoftware.htmlunit.javascript.host.fetch.Response;
import com.google.errorprone.annotations.Var;


public class StepDefinition<Sting> {
	
	private Response response;
	private RequestSpecification request;
	private static final String BASE_PATH = "/users";
	private static final String SECONDS = null;
	
	@Test
    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() {
        homePage();
    }

    @Test
    @Given("^I get the default list of users for on 1st page$")
    public void getAllusers() throws InterruptedException {

    	given()
    	.when()
    	.get("https://reqres.in/api/users?page=1")
    	    .then()
    		.statusCode(200)
    		.and()
    		.header("Content-Type", "application/json; charset=utf-8")
    		.log().all();
      }
    
    @Test
    @When("^I get the list of all users$")
    public void list_allusers() {
    	given()
    	.when()
    	.get("https://reqres.in/api/users?page=1&per_page=12")
    	    .then()
    		.statusCode(200)
    		.and()
    		.header("Content-Type", "application/json; charset=utf-8")
    		.log().all();

    }
    
    @Test
    @Then("^I should see total users count equals to number of user ids$")
    public void Total_user_count() throws ParseException {

    	List<Long> idList = get("https://reqres.in/api/users?page=1&per_page=12").jsonPath().getList("data.id"); 
    	
    	System.out.println("idList is " + idList);

    }
    
    
    @Test
    @Given("^I make a search for user 3$")
    public void Should_see_SINGLE_USER_data() {
    	
    	given()
    	.queryParam("id", 3)
    	.get("https://reqres.in/api/users/")
    	.then()
    	.log().all();
    		
    	// 
    	//  I should see following user data
   	
    	// .body("x.data.id", equalTo(3));	
    }
    
    @Test
    @Then("^I should see following user data$")
    public void followinguserdata(DataTable tabledata) {
    	
    	//usersdata data = get("https://reqres.in/api/users/3").as(usersdata.class);
    	
    	//System.out.println(data.getEmail());
    	//System.out.println(data.getFirstname());
    	//Assert.assertEquals(data.id, 3 );
 
         given()
    	.queryParam("id", 3)
    	.get("https://reqres.in/api/users/")
    	.then()
    	.body("data.first_name", equalTo("Emma"))
    	.body("data.email", equalTo("emma.wong@reqres.in"))
    	.log().all();
    }
    
    @Test
    @Given("^I make a search for user 55$")
    public void Searchuser55(DataTable tabledata) {
    	
         given()
    	.queryParam("id", 55)
    	.get("https://reqres.in/api/users/")
    	.then()
    	.log().all()
    	.statusCode(404);
         
    }
    
    @Test
    @Then("^I receive error code \"(.*)\" in response$")
    public void entervalueresp(String responce) {

  	given()
  	.contentType("application/json")
	.queryParam("id", 5)
	.get("https://reqres.in/api/users/")
	.then()
	.body(responce,equalTo("data.first_name") )
	.log().all()
	.statusCode(200);

    }
    
     @Test
     @Given("^I create user with following \"([^\"]*)\" \"([^\"]*)\"$")
     public void createuser(String first_name, String last_name) {
    
    	 usersdata data1 = new usersdata();
    	 
    	 data1.id= 1114;
    	 data1.firstname = first_name;
    	 data1.lastname = last_name;
    	 data1.email = "test@mail.com";
    	 data1.avatar = "test.png";
    	 
    	 given().contentType(ContentType.JSON)
    	 .when()
    	 .post("https://reqres.in/api/users")
    	 .then()
    	 .statusCode(201); 
     }
     
     @Test
     @Then("^response should contain folowing data$")
     public void responcecode(String first_name, String last_name, int id, String email) {
    	 
         given()
    	.queryParam("id", 1)
    	.get("https://reqres.in/api/users/")
    	.then()
    	.body("data.first_name", equalTo(first_name))
    	.body("data.last_name", equalTo(last_name))
    	.body("data.id", equalTo(id))
    	.body("data.email", equalTo(email))
    	.log().all();
    	 
     }
     
     @Test
     @Given("^I login succesfully with Email and Password$")
     public void Successfull_User(DataTable table) {
    	 
    	 List<List<String>> value = table.raw();
    	 
    	 usersdata data1 = new usersdata();
    
    	 data1.email = "value.get(1).get(0)";
    	 data1.password = "value.get(1).get(0)";
    	 
    	 given().
    	 header("Authorization", "Bearer "+"QpwL5tke4Pnpja7X4")
    	 .contentType(ContentType.JSON)
    	 .when()
    	 .post("https://reqres.in/api/api/login")
    	 .then()
    	 .statusCode(201); 
    	 
     }
     
     @Test
     @Given("^I login unsuccesfully with Email and Password$")
     public void Unsucecssful_login(DataTable table) {
    	 
    	 List<List<String>> value = table.raw();
      
     	usersdata user = new usersdata();
  
     	user.email = "value.get(1).get(0)";
     	user.password = "value.get(1).get(0)";
     	 
     	 given().
     	 header("Authorization", "Bearer "+"QpwL5tke4Pnpja7X4")
     	 .contentType(ContentType.JSON)
     	 .when()
     	 .body(value)
     	 .post("https://reqres.in/api/api/login")
     	 .then()
     	 .statusCode(201); 

     }
     
     @Test
     @Given("^I wait for user list to load$")
     public void Detlayed() {

    	 Long MAX_TIMEOUT = 3000l;
    		given()
        	.queryParam("id", 3)
        	.get("https://reqres.in/api/users?delay=3")
        	
        	.then()
        	.log().all();
     }
     
     @Test
     @Then("^I should see that every user has a unique id$")
     public void uniqueid() {
    	 
    	 List<Long> idList = get("https://reqres.in/api/users?page=1&per_page=12").jsonPath().getList("data.id"); 
     	
     	System.out.println("idList is " + idList);
    	 
     }
     
}
     
 
//   	List<List<String>> data = tabledata.raw();
//	//List<List<String>> mapData =  tabledata.raw();
//		
//    	 String email = given().contentType(ContentType.JSON).log().all()
//    	
//    	.get("/1")
//    	 
//    	.then()
//    	.body("data.first_name", equalTo("george")
//    	.extract().path("email");
//    	 
//    	 System.out.println("Test is  " + email);
    	

//    @Test
//    @When("^I get the list of all users$")
//    public void ListAllUsers() throws InterruptedException {
//    	
//    	RestAssured.baseURI = "https://reqres.in";
//
//        io.restassured.response.Response res  = given()
//          .param("page", "2")
//        .when()
//          .get("/api/users")
//        .then()
//          .assertThat()
//          .contentType(ContentType.JSON)
//          .and()
//          .statusCode(200).extract().response();
//
//        /*String data = res.jsonPath().getString("data[0].first_name");
//
//        System.out.println(data);
//        */
//
//        List<HashMap<String,Object>> allids = res.jsonPath().getList("data");
//
//        HashMap<String,Object> firstid = allids.get(0);
//
//        Object a =  firstid.get("id");
//
//        System.out.println("Alluser ID's  " + a);
//
//
//        }
//    
//		
//  
//	
//
//	@Test
//    @Then("^I should see total users count equals to number of user ids$")
//    public void allusercount() throws InterruptedException {
//    	
//		given()
//		.accept(ContentType.JSON)
//        .contentType(ContentType.JSON)
//        //.auth().principal(createPrincipal())
//        .when()
//        .get("/api/users")
//        .then()
//        .statusCode(200)
//        .body("data.id.size()", is(6))
//        .body("data.name.size()", is(6));
//
//}
//    
//	
//	@Test
//	@Given("^I make a search for user 3$")
//	public void singleuserdata() {
//				
//		RestAssured.baseURI = "https://reqres.in/api";
//		 
//        io.restassured.response.Response response = null;
// 
//        try {
//            response = RestAssured.given()
//                .when().queryParam("page", "1").queryParam("id", 3)
//                .get("/users");
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
// 
//        System.out.println("Response :" + response.asString());
//        System.out.println("Status Code :" + response.getStatusCode());
//        
// 
//    }
//		
//
//	@Test
//	@Then("^I should see following user data$")
//	public void Datatableusers(DataTable usercredentials) {
//		
//	//	List<List<String>> data = usercredentials.raw();
//	
//	
//		given()
//    	.when()
// 
//    	.get("https://reqres.in/api/users?page=1")
// 
//    		.then()
//    		.statusCode(200)
//    		//.body("data[2].id", equalTo("9"))
//    		.body("data.first_name", hasItems("George"))
//    		.body("data.email", hasItems("george.bluth@reqres.in"))
//    		.log().all();
//	}
//
//	  @Test
//      @Given("^I make a search for user 55$")
//      public void userid55() {
//    	  RestAssured.baseURI = "https://reqres.in/api";
// 		 
//          io.restassured.response.Response response = null;
//   
//          try {
//              response = RestAssured.given()
//                  .when().queryParam("page", "1").queryParam("id", 55)
//                  .get("/users");
//          } catch (Exception e) {
//              e.printStackTrace();
//          }
//   
//          System.out.println("Response :" + response.asString());
//          System.out.println("Status Code :" + response.getStatusCode());
//          Assert.assertEquals(200, "Correct status code");
// 
//      }
//	  
//	  @Test
//	  @Given("^I create user with following \"(.*)\" \"(.*)\"$")
//	  public void Createuser() {
//		  
//		  RestAssured.baseURI = "https://reqres.in/api/users?page=2";
//		  
//	        String requestBody = "{\n" + 
//	        		"            \"id\": 5001,\n" + 
//	        		"            \"email\": \"Sudhakar.ponugoti@reqres.in\",\n" + 
//	        		"            \"first_name\": \"Sudhakar Ponugoti\",\n" + 
//	        		"            \"last_name\": \"Bluth\",\n" + 
//	        		"            \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg\"\n" + 
//	        		"        }";
//	 
//	 
//	        io.restassured.response.Response response = null;
//	 
//	        try {
//	            response = RestAssured.given()
//	                .contentType(ContentType.JSON)
//	                .body(requestBody)
//	                .post("/create");
//	        } catch (Exception e) {
//	            e.printStackTrace();
//	        }
//	 
//	        System.out.println("Response :" + response.asString());
//	        System.out.println("Status Code :" + response.getStatusCode());
//	        System.out.println("Does Reponse contains 'Sudhakar Ponugoti'? :" + response.asString().contains("Sudhakar Ponugoti"));
//	 
//	 
//	        assertEquals(201, response.getStatusCode());
//	    }
//	  
//	  
//	  @Test
//	  
//	  @Given("^I login succesfully with following data$")
//	  public void Loginsuccessfully() {
//		  
//		  RestAssured.baseURI = "https://reqres.in/api/login";
//	        RequestSpecification httpRequest = RestAssured.given();
//	        httpRequest.header("Content-Type", "application/json");
//	        // Create new JSON Object
//	        JsonObject loginCredentials = new JsonObject();
//	        loginCredentials.addProperty("email", "eve.holt@reqres.in");
//	        loginCredentials.addProperty("password", "cityslicka");
//	        httpRequest.body(loginCredentials.toString());
//	        io.restassured.response.Response response = httpRequest.post("/login");
//	        
//	        String authorizationHeader = response.getHeader("Authorization");
//	        System.out.println("authorizationHeader is " + authorizationHeader);
//	        System.out.println("Status Code :" + response.getStatusCode());
//	        assertEquals(201, response.getStatusCode());
//	   
//	    }
//	  
//	  @Test
//	  @Given("^I login unsuccesfully with following data$")
//      public void LoginUnsuccessfully() {
//		  
//		  RestAssured.baseURI = "https://reqres.in/api/login";
//	        RequestSpecification httpRequest = RestAssured.given();
//	        httpRequest.header("Content-Type", "application/json");
//	        
//	        // Create new JSON Object
//	        JsonObject loginCredentials = new JsonObject();
//	        loginCredentials.addProperty("email", "0");
//	        loginCredentials.addProperty("password", "1");
//	        httpRequest.body(loginCredentials.toString());
//	        io.restassured.response.Response response = httpRequest.post("/login");
//	        
//	        String authorizationHeader = response.getHeader("Authorization");
//	        System.out.println("authorizationHeader is " + authorizationHeader);
//	        System.out.println("Status Code :" + response.getStatusCode());
//	        assertEquals(201, response.getStatusCode());
//
//	       // Assert.assertNotNull(authorizationHeader);
//	    }
//	  
//	  @Test
//	  @Given("^I wait for user list to load$")
//	  public void waitLoad() {
//		  
//		  RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(5000).setConnectionRequestTimeout(5000)
//	                .setSocketTimeout(5000).build();
//
//	        HttpClientConfig httpClientFactory = HttpClientConfig.httpClientConfig()
//	                .httpClientFactory(() -> HttpClientBuilder.create().setDefaultRequestConfig(requestConfig).build());
//
//	        RestAssured.config = RestAssured.config().httpClient(httpClientFactory);
//	  }
//	  
//	  @Test
//	  @Then("^I should see that every user has a unique id$")
//	  public void UniqueID() {
//		  
//		  RestAssured.rootPath = "page.data";
//		  
//			given()
//	    	.when()
//	 
//	    	.get("https://reqres.in/api/users?page=1")
//	 
//	    		.then()
//	    		.statusCode(200)
//	    	
//	    		//.body(arguments, responseAwareMatcher)
//	    		.body("data.id[0]", equalTo("1"))
//	    		.log().all();
//	
//	  }
	  
	 
	  
	  
	  
      
   


    

