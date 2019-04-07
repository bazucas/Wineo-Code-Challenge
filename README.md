![alt text](./src/assets/img/wineo_brand_medium.png)

# Wineo Code Challenge

Senior frontend developer code challenge.

## Demo
Coming soon...

[http://wineo.luisinacio.co.uk](http://wineo.luisinacio.co.uk/)

## Requirements

### A customer has requested a web-app that can keep track of the customer's wine or beer cellar.
* A list of bottles.
* Detail view.
* Possibility to add new bottles.

### The case is estimated to 2-4 hours.

### If you have more time, you may want to add more functionality:
* Sorting in list view (Sort by name, vineyard, year, etc.).
* Filtering in list view (filter on vineyard, year, etc.).
* Add the user's comment / notes / rating.
* Save entries on the device.

### Your solution will be evaluated on the following:
* Code quality.
* Code architecture and organization.
* Does the solution work?
* Implementing your own creative ideas.

### Rules:

* You can decide which tools you choose.
* It must be clearly noted if there are parts of the code you have not written yourself.
* You may want to use a build-setup - this setup is not included in the assessment (please
supply both source files and a compiled version that works out of the box).
* Your solution must be handed in as a git repository.
* Add a readme file to the root of the project, explaining your architecture considerations,
your priorities and whatever else you think could be important for us to know or pay
attention to.

## Running application

Git clone the repository and install all the dependencies

```bash
git clone git@github.com:bazucas/Wineo-Code-Challenge.git
npm install

``` 
Install [Json-Server](https://github.com/typicode/json-server) as a full fake REST API

```bash
npm install -g json-server

```
Open a terminal window and run json-server with the mocked data from the data folder

```bash
json-server --watch mockdata.json
```

Open another terminal windows and run the Angular application

```bash
npm start
```

## Architecture

### Structure

Due to the time constraints and relative complexity of the "good to have" functionalities, and to accommodate all, some decisions were made.

* Simple flat folder structure with a single main module, without any lazy children modules, or shared modules.
* Css used instead of pre-processors.
* Inline styles accompany some html tags (future fix).
* Mobile first concerns. 
* CRUD functionalities added.
* Generic API http verb methods.
* Local update without refresh or API calls after persistence.
* Images inside assets folder.
* Mock data outside of src folder, since it's an extrinsic component.

### Boilerplate code used

* PrimeNg
* PrimeFlex
* Bootstrap
* 404 page not found from [freefrontend](https://freefrontend.com/html-css-404-page-templates/)

### Images

The Wineo icon and images were custom made by me.

## Todo List

* Use SCSS pre-processor.
* Remove inline styles and add them to the styles.scss.
* Use real API and remove json-server.
* Create user login/logout and register functionalities.
* Better user comments.
* Insert list form validation, besides required.

## License
[MIT](https://choosealicense.com/licenses/mit/)
