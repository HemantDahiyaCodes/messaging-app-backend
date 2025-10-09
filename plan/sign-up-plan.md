# Sign up a user
- Create sign up route with a POST method that signs up a user
- Import prisma instance in the `sign-up-controller.js`
- Get the username and password from the body
- Validate username and password, return appropiate response if validation fails
- Add the user in db with `prisma.user.create`