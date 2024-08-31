import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/templates/Navbar';
import { Timeline } from '@/components/ui/timeline';
import dynamic from 'next/dynamic';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Sponsors } from '@/templates/Sponsors';
import { Features } from '@/templates/Features';
import { Infinite } from '@/templates/Infinite';
import { CTA } from '@/templates/CTA';
import { AppSection } from '@/templates/AppSection';
import React from 'react';

  
export default async function TimelinePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Timeline');

  const timelineItems = [
    {
      date: '2023-01-01',
      title: t('item1.title'),
      description: t('item1.description'),
      image: '/images/timeline-item1.jpg',
    },
    {
      date: '2023-06-15',
      title: t('item2.title'),
      description: t('item2.description'),
      image: '/images/timeline-item2.jpg',
    },
    {
      date: '2023-12-31',
      title: t('item3.title'),
      description: t('item3.description'),
      image: '/images/timeline-item3.jpg',
    },
  ];

  return (
    <>
    <Navbar />
    <Hero />
    <CTA />
    <Sponsors />
    <Features />
    <AppSection />
    <Infinite />
    <CTA />
    <Footer />
    </>
  );
}