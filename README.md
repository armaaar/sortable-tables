# Sortable Tables Plugin
Sortable Tables is a vanilla js plugin to turn any `<table>` into a sortable one by just adding one class.

## Requirements
There is no requirements for this plugin. Just a browser that support javascript ES5

## How to create a Sortable Table
- Add `sortable-tables.js` and `sortable-tables.css` to your page -or their minified versions-.
- Add the class `scrollbar-outer` to the `<table>` you wanna make sortable.
- Add a `<thead>` to your table with one `<tr>` and make sure all cell elements in it are `<th>`
- Add a `<tbody>` to your table and make sure all cell elements in it are `<td>`

That's it.

If there is a column of data that is mainly a numerical value but has special symbols like `$` or `%` that would cause the alphabetical order to fail, add the class `numeric-sort` to the `<th>` element corresponding to that column

View the example file for a demo.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
