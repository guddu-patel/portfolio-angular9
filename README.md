# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

# Starting project
Clone the code from the [repo](https://github.com/guddu-patel/portfolio-angular9) then 

Enter inside folder portfolio-angular9-master

```bash
    cd portfolio-angular9-master
```

Update npm to install all dependency

```bash
    npm install
```
# Setup environment
add below lines in your environment file environment.ts at envirement const
```bash
    baseUrl: "https://node-js-resume-api.herokuapp.com",
    postCategory: ['News', 'Technical', 'Educational', 'Entertainment']
```
eg:
```bash
    export const environment = {
        production: false,
        baseUrl: "https://node-js-resume-api.herokuapp.com",
        postCategory: ['News', 'Technical', 'Educational', 'Entertainment']
    };
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

And that's it you are done navigate to your browser and see your running project

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
