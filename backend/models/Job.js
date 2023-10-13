```js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
title: {
type: String,
required: true
},
company: {
type: String,
},
description: {
type: String,
required: true
},
status: {
type: String,
enum: ['open', 'closed'],
default: 'open'
},
userId: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User'
}
});

module.exports = mongoose.model('Job', jobSchema);
```

## Controllers

### authController.js

```js
const User = require('../models/User');

module.exports = {
register: async (req, res) => {
// register logic
},
login: async (req, res) => {
// login logic
}
}
```

# Frontend

## Components

### JobCard.jsx

```jsx
const JobCard = ({job}) => {
return (
<div className="job-card">
<h3>{job.title}</h3>
<p>{job.company}</p>

<Button
onClick={() => handleDelete(job._id)}
variant="danger">
Supprimer
</Button>
</div>
)
}

export default JobCard;
```

### Navbar.jsx

```jsx
// Navbar component with links and login button
```