const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Health Companion App API');
});

app.get('/api/features', (req, res) => {
    const features = [
        { id: 1, name: 'Personalized health plans' },
        { id: 2, name: 'Medication tracking' },
        { id: 3, name: 'Appointment reminders' },
        { id: 4, name: 'Motivational support' }
    ];
    res.json(features);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
