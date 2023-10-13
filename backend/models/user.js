```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
email: {
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true
},
profile: {
skills: [String],
experience: String
}
});

userSchema.methods.toJSON = function() {
const user = this;
const userObject = user.toObject();

delete userObject.password;

return userObject;
}

module.exports = mongoose.model('User', userSchema);
```

### Project.js

```js
// Schema for project posts
```

## Routes

### user.js

```js
// Route handlers for user registration, login, update profile etc
```

### project.js

```js
// Route handlers for project listing, posting projects etc
```

# Dossier frontend

## Components

### UserForm.jsx

```jsx
// React form component to register/update users
```

### ProjectCard.jsx

```jsx
// UI component to display a project
```

## Pages

### Register.jsx

```jsx
// Register page with UserForm
```

### Projects.jsx

```jsx
// Projects listing page
```