# Decoupled Drupal Experiment with GraphQL, React and VueJS
<br>

---

### Prerequisites
- Docker
- DDEV: Local development environment using Docker 
[GitHub: DDEV](https://github.com/drud/ddev)
<br>

---

### Installation

##### Backend:

Clone the repository.
```
git clone git@github.com:mileslemon/decoupled-drupal-experiment.git
```
<br>

Initialize the backend with DDEV
```
cd backend
ddev config
ddev start
```
<br>

Install Drupal/modules
```
composer install
```
<br>

---

##### Frontend:

Navigate to either the React or VueJS frontend
```
cd ../frontend-react
```
or
```
cd ../frontend-vue
```
<br>

Install the NPM packages
```
npm install
```
<br>

Now start the development server for the frontend
`React`
```
npm run start
```
or
`VueJS`
```
npm run serve
```

Navigate to `http://decoupled-drupal-backend.ddev.local:8000` to add some article content nodes.

These nodes will then be viewable in your frontend by navigating to your localhost.

