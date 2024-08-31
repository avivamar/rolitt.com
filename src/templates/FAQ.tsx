import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from '@/features/landing/Section';

const FAQ = () => {
  const t = useTranslations('FAQ');

  return (
    <Section className="flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {t('mainTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t('subTitle')}
        </p>
        <div className="w-full">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('question1')}</AccordionTrigger>
              <AccordionContent>{t('answer1')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('question2')}</AccordionTrigger>
              <AccordionContent>{t('answer2')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('question3')}</AccordionTrigger>
              <AccordionContent>{t('answer3')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t('question4')}</AccordionTrigger>
              <AccordionContent>{t('answer4')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>{t('question5')}</AccordionTrigger>
              <AccordionContent>{t('answer5')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>{t('question6')}</AccordionTrigger>
              <AccordionContent>{t('answer6')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>{t('question7')}</AccordionTrigger>
              <AccordionContent>{t('answer7')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>{t('question8')}</AccordionTrigger>
              <AccordionContent>{t('answer8')}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export { FAQ };