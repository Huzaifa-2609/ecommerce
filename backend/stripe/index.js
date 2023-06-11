
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Set up your API keys (publishable and secret keys)
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

module.exports = stripe;