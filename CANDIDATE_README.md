## Notes from the candidate

### I never worked with next.js neither nest.js before. So I assume I did some things wrong or not in the proper way

### To populate the DB I used liquibase, so in order to run the project and have the proper records to show on the DB:

```bash
# development
$ npm run start:dev:db

$ npm run start:dev

$ npm run start:liquibase
```

### TESTING

I added testing on Both FE and BE. On the BE I completed the E2E tests that where already there to cover the 2 endpoints of the BE.
On the FE I tested 2 of the components of the app "ListItemCard" and "CoffeePage". For the testing on the FE I used react-testing-library.

### FE considerations

I decided to use React-query to handle all the requests to the BE using hooks
To handle the state of the app I decided to use the useContext hook from react to handle the state of the header options

There is an error on the Header when you try to navigate directly to the teas page: the wrong option is selected on the header. 
Tried to fix that but due to my un-expertise of nextjs I don't actually follow how the components lifecycle work compared to react. 
As far as I could see all the pages are "Rendered" even if it's not the one the user intended to visit. I assume that I did something wrong with the routing of the app. 
I decided to do my own CSS with SASS

I read that nextjs has an inbuilt system to load images from the public folder and just fetch them from there to render them in the Fe app. (Footer logo). 
Followed the documentation but didn't manage to make it work. Maybe it's related with the images loader that was in the next.js config file.  

### Improvement to be prod ready

- At least 80% test coverage on both FE and BE
- Add tslint and prettier on both FE and BE
- Security on the BE to authenticate the requests (AUTH header) with JWT token authentication
- Add minimum of security to the BE with something like helmet (not sure if it exists something similar for nestjs)
