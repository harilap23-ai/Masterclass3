import { configure } from '@genkit-ai/core';
import firebase from '@genkit-ai/firebase';
import googleAI from '@genkit-ai/googleai';
import nextjs from '@genkit-ai/next';

configure({
  plugins: [
    firebase(),
    googleAI(),
    nextjs(),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});