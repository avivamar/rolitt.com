'use client';

import { useTranslations } from 'next-intl';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";

const stripePromise = loadStripe('your_stripe_public_key');

export default function PreOrderPage() {
  const t = useTranslations('PreOrder');
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const handlePreOrder = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'robot_toy' }),
      });
      
      const session = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) console.error('Error:', error);
    } catch (error) {
      console.error('Failed to create checkout session:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden">
        <StarsBackground />
        <ShootingStars />
        <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="mb-8 text-5xl md:text-6xl font-bold text-center">
              {t('title')}
            </h1>
            <p className="mb-12 text-xl text-center">{t('description')}</p>
            
            <Carousel className="mb-12">
              <Image src="/about.png" alt="Robot Toy 1" width={800} height={600} className="rounded-lg shadow-2xl" />
              <Image src="/about.png" alt="Robot Toy 2" width={800} height={600} className="rounded-lg shadow-2xl" />
              <Image src="/about.png" alt="Robot Toy 3" width={800} height={600} className="rounded-lg shadow-2xl" />
            </Carousel>

            <Tabs defaultValue="features" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">{t('features')}</TabsTrigger>
                <TabsTrigger value="specs">{t('specs')}</TabsTrigger>
                <TabsTrigger value="rules">{t('preOrderRules')}</TabsTrigger>
              </TabsList>
              <TabsContent value="features">
                <Card>
                  <CardContent className="space-y-2 pt-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>{t('feature1')}</li>
                      <li>{t('feature2')}</li>
                      <li>{t('feature3')}</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="specs">
                <Card>
                  <CardContent className="space-y-2 pt-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>{t('spec1')}</li>
                      <li>{t('spec2')}</li>
                      <li>{t('spec3')}</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rules">
                <Card>
                  <CardContent className="space-y-2 pt-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>{t('rule1')}</li>
                      <li>{t('rule2')}</li>
                      <li>{t('rule3')}</li>
                      <li>{t('rule4')}</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold mb-4">{t('earlyBirdOffer')}</h3>
              <p className="text-xl mb-6">{t('offerDescription')}</p>
              <Badge variant="secondary" className="mb-4">{t('limitedTimeOffer')}</Badge>
              <Button
                onClick={handlePreOrder}
                disabled={isLoading}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition duration-300 shadow-lg"
              >
                {isLoading ? t('processing') : t('preOrderNow')}
              </Button>
            </div>

            <div className="text-center text-sm opacity-75">
              <p>{t('termsAndConditions')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}