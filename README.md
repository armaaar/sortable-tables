# Sortable Tables Plugin
Sortable Tables is a vanilla js plugin to turn any `<table>` into a sortable one by just adding one class.

## Compitability
This package uses ECMAScript5. You can check [browsers that support ES5](https://caniuse.com/es5).

## Installation
There are 2 ways to install this package:
### NPM / Yarn
- Install using:
    ```
    npm install sortable-tables
    ```
    or
    ```
    yarn add sortable-tables
    ```
- Include scripts either by:
    ```js
    import 'sortable-tables/dist/sortable-tables.min';
    import 'sortable-tables/dist/sortable-tables.min.css';
    ```
    ```js
    require('sortable-tables/dist/sortable-tables.min');
    require('sortable-tables/dist/sortable-tables.min.css');
    ```
    
### Manually
- Download both `dist/sortable-tables.min` and `dist/sortable-tables.min.css` files and add them to your project
- Load both files to your document:
```html
<link rel="stylesheet" href="path/to/sortable-tables.min.css">
<script src="path/to/sortable-tables.min.js" type="text/javascript"></script>
```

## Usage
- Add `sortable-tables.js` and `sortable-tables.css` to your page -or their minified versions-.
- Add the class `scrollbar-outer` to the `<table>` you wanna make sortable.
- Add a `<thead>` to your table with one `<tr>` and make sure all cell elements in it are `<th>`
- Add a `<tbody>` to your table and make sure all cell elements in it are `<td>`

That's it. View the example file for a demo.

### Additional Tips
- If there is a column of data that is mainly a numerical value but has special symbols like `$` or `%` that would cause the alphabetical order to fail, add the class `numeric-sort` to the `<th>` element corresponding to that column
- If you are using FontAwesome v4 you can add class `sortable-fa-icons` to `<table>` to use FontAwesome sort icon instead of default unicode icons.



## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
