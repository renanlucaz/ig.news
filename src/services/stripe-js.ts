import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJs() {
    const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLICAL_KEY);

    return stripeJs;
}