const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const METRICS_PORT = process.env.METRICS_PORT || 9091;

// Serve the static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Health check endpoint for container orchestration systems (like Kubernetes)
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Any other routes will be handled by the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the web server
app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

// Optional: Start a separate server for metrics, as specified in the Dockerfile
// For now, this is a dummy server that you can later replace with a real metrics library
app.listen(METRICS_PORT, () => {
    console.log(`Metrics server listening on port ${METRICS_PORT}`);
});
