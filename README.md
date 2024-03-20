# Celestial Glow Router

The Celestial Glow Router is a lightweight, easy-to-use routing library designed specifically for the Celestial Glow framework. It provides a simple API to add and navigate routes in your Celestial Glow applications.

## Installation

To install the celestial-glow-router, run the following command in your project directory:

```sh
npm install celestial-glow-router
```

## Usage

First, import the `CelestialGlowRouter` in your application:

```javascript
const CelestialGlowRouter = require('celestial-glow-router');
```

Then, create a new router instance and define your routes:

```javascript
const router = new CelestialGlowRouter();

router.addRoute('/', () => {
console.log('Home Page');
});

router.addRoute('/about', () => {
console.log('About Page');
});
```

To navigate to a route, use the `navigate` method:

```javascript
router.navigate('/');
// Outputs: Home Page

router.navigate('/about');
// Outputs: About Page
```

## API

### addRoute(path, action)

- `path` \<String\>: The URL path to match.
- `action` \<Function\>: The function to execute when the route is navigated to.

Adds a new route to the router.

### navigate(path)

- `path` \<String\>: The URL path to navigate to.

Navigates to a given path if it exists in the router's routes; otherwise, it logs a message indicating the path does not exist.

## Contributing

Contributions to the Celestial Glow Router are welcome! Please feel free to submit issues, pull requests, or suggest features to enhance the library.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
