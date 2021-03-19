# QuizzApp

This application help HR to test the interviewee. It provides us to create a test and give it to the interviewee.

## Installation

Clone project

```bash
git clone https://github.com/maxpopovych/quizz_app.git
```
### Back-end

```bash
cd QuizzApp
```

Open appsettings.json and change "DefaultConnection" to your DB connection string.

Open appsettings.json and change "Secret" to your super secret key(you can random id)

Restore dependencies
```bash
dotnet restore
```
Build server
```bash
dotnet build
```
Run server
```bash
dotnet run
```
Run unit tests
```bash
dotnet test
```

### Front-end

Open environment.ts or environment.prod.ts and change "urlAddress" to server URL

```bash
cd QuizzAppFront/quizz-app
```
Install Angular
```bash
npm install -g @angular/cli
```
Restore dependencies
```bash
npm install
```
Build client
```bash
npm run-script build --prod
```
Run client
```bash
npm start
```

## Usage

Visit [swagger](https://localhost:5001/swagger/) to view WebApi.
Visit [angular client](http://localhost:4200/) to view program.


Please make sure to update tests as appropriate.
## Documentation
[Documentation](https://github.com/maxpopovych/quizz_app/tree/main/doc)

## License
[MIT](https://choosealicense.com/licenses/mit/)