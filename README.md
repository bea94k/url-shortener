# CMyU - Cut My Url link shortener

Full-stack web app for shortening URLs - because nobody likes 150-character-long links.

Live at [cmyu.herokuapp.com](https://cmyu.herokuapp.com/)

## Tech

Built with:

- Node.js, Express
- MongoDB, Mongoose
- React - create-react-app
- axios
- FontAwesome
- hosted at Heroku

## To Run Locally

To run locally after cloning, follow these steps:

- in frontend/src/config-front.js, comment out the live link and uncomment the localhost line
- whenever you make changes in the frontend folder (including th eprevious step), in the **root** folder run

```bash
npm run build
```

- in the backend folder, create .env file with PORT (the same port number you had set in config-front file) and MONGO_DB_CONNECT (the connection string to your MongoDB)
- in **root** folder, run

```bash
npm run start:dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
