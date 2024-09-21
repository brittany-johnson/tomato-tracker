# tomato-tracker [V1 in development]
> A self hosted pomodoro app that offers task creation and project organization. 

![7](https://github.com/user-attachments/assets/1456d76f-b93c-43c6-b83d-ce5e925c3b4c)

## Getting Started 
- create a free account and database on [turso](https://app.turso.tech/)
- `npm install`
- create a `.env` file in the root of your app with the keys `TURSO_CONNECTION_URL` and `TURSO_AUTH_TOKEN`
- create a token from the turso dashboard of your database by navigating to ... > Create token. Choose a desired experation and make it with read and write permissions.
- paste the token and connection url provided as the values to the keys in your `.env` file
- `npm run dev` to start the app locally
