- Create login route with a POST method that authenticates the user
- Import `passport-local` strategy from the `auth` to verify
- Return `Incorrect password or username` if verification fails OR try to return passport's error
- Return user as response and create a cookie and store it in the database and return it as respsonse


# Create a cookie
- Create a variable `cookie` with the value of `Username+randomString`
- Send this cookie as the response and also store it in the database
- On protected routes, extract the cookie and let the client send it back to the server where the server will verify the cookie and allow/deny access

# Create passport-cookie strategy
- Set up passport's cookie strategy that will take the token sent by the client and verify it using functions