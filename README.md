# Decoupled Drupal Experiment with GraphQL, React and VueJS

## Prerequisites
- Docker
- DDEV: Local development environment using Docker 
  - DDEV GitHub:(https://github.com/drud/ddev)
  - DDEV Docs: (https://ddev.readthedocs.io/en/stable/)

## Installation

### Backend:

Clone the repository.
```
git clone git@github.com:mileslemon/decoupled-drupal-experiment.git
```

Initialize the backend with DDEV
```
cd backend
ddev config
ddev start
```

Install Drupal/modules
```
composer install
```

### Frontend:

Navigate to either the React or VueJS frontend
```
cd ../frontend-react
```
or
```
cd ../frontend-vue
```

Install the NPM packages
```
npm install
```

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

---

Navigate to `http://decoupled-drupal-backend.ddev.local:8000` to add some article content nodes.

These nodes will then be viewable in your frontend by navigating to your localhost.

