import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CoreCapabilities } from './components/CoreCapabilities';
import { TechStack } from './components/TechStack';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <Hero />
      <Features />
      <CoreCapabilities />
      <TechStack />
      <CallToAction />
    </div>
  );
}
