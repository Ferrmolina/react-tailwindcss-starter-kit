## Intro
Just a very basic starter kit to work with React and TailwindCss.

## How to use?
- git clone
- npm run start
- Happy hacking :)

## Structure

> Save your assets in this folder, add your custom scss files and images.
```
/src/assets
|_ /src/assets/css/
|_ /src/assets/images/
|_ /src/assets/sass/
```

> Example of pages (BrowserRouter use it), create your owns here and call in `/src/templates/main/components/Section.js`
```
/src/pages/
|_ Home.js
|_ About.js
|_ Dashboard.js
```

> Basic page structure. 

```
/src/templates/
|_ header/
|_ Header.js
|_ _ components/
|_ _ _ Navigation.js

|_ main/
|_ Main.js
|_ components/
|_ _ Section.js
|_ _ Aside.js

|_ footer/
|_ Footer.js
|_ components/
|_ _ Widgets.js
```
