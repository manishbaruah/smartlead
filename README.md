# Smartlead
Lead generation software in Java and Angular.

# Steps to run the microservices 
1. Import the provided SQL file to postgreSQL database under public schema or other schema 
2. Edit the below properties file- 
   a. user-microservice/src/main/resources/application.properties 
   b. project-microservice/src/main/resources/application.properties 
   c. lead-microservice/src/main/resources/application.properties 
   Uncomment the line below and comment the line after that if schema other than public is used: 
   #spring.datasource.url=jdbc:postgresql://localhost:5432/postgres?currentSchema=<schemaName>
   spring.datasource.url=jdbc:postgresql://localhost:5432/postgres spring.datasource.username=postgres spring.datasource.password=postgres 
3. Build the smartlead-common project by running mvn install inside the project directory 
4. Install the Angular project dependencies by running npm install inside the directory smartlead-ui/src/main/resources/smartlead/ 
5. Build the projects- smartlead-ui, user-microservice, project-microservice, lead-microservice by running mvn package inside the project directories 
6. Run the generated jars by executing java -jar <jar-filename> in a console inside <project-name>/target in the following order- smartlead-ui -> user-microservice -> project-microservice -> lead-microservice 
7. Make sure the jars run perfectly and no error appears in the console 
8. In a browser navigate to localhost:8080 and the login screen should appear
  
# Projects information
1. smartlead-ui contains the Angular 8 code and runs on port 8080. All API requests from the UI are made to user-microservice on port 8081. 
2. user-microservice is both a Spring Eureka server and a Netflix Zuul proxy server. It consumes all the rest API endpoints from the UI and redirects them to appropriate project and lead micro-services. It contains the User services and handles authentication/authorization and runs on port 8081. 
3. project-microservice is a Spring Eureka client and connects with user-microservice. It contains the Project services and runs on port 8082 
4. lead-microservice is a Spring Eureka client and connects with user-microservice. It contains the Lead services and runs on port 8083 
5. smartlead-common contains the common classes that are required by user-microservice, project-microservice and lead-microservice

# Users, Lead creation on applications startup
 On startup of user-microservices and lead-microservices, test data for users and leads are created if no existing records are found in the database. Users are created with username- user1, user2, user3 with common password- ‘changeme’ with a default organization and role- Employee. Changing the role of any of these users to Admin will have to be done manually by setting the ‘role_id’ value in ‘tbl_user_roles’ table.
