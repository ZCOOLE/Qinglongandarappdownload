import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CoreCapabilities } from './components/CoreCapabilities';
import { TechStack } from './components/TechStack';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50">
      <Hero />
      <Features />
      <CoreCapabilities />
      <TechStack />
      <CallToAction />
    </div>
  );
}