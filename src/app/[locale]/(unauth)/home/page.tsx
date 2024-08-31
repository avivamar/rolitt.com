import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/templates/Navbar';
import { Timeline } from '@/components/ui/timeline';
import dynamic from 'next/dynamic';
import { Footer } from '@/templates/Footer';


  
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

      <section class="py-12 bg-gradient-to-r from-fuchsia-600 to-blue-600">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div class="xl:flex xl:items-center xl:justify-start">
                <img class="w-auto mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt-2.svg" alt="" />

                <p class="mt-5 text-sm text-white xl:ml-6 xl:mt-0">© Copyright 2021 Postcraft</p>
            </div>

            <div class="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
                <ul class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                    <li>
                        <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Services </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Support </a>
                    </li>
                </ul>

                <div class="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

                <ul class="flex items-center justify-center space-x-8 xl:justify-end">
                    <li>
                        <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">{t('pageTitle')}</h1>
          <Timeline data={timelineItems} />
        </div>
      </main>


<section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
            <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                    1 team.<br />
                    6+ years.<br />
                    300+ projects.<br />
                </h2>
                <p class="mt-6 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>

            <div class="lg:col-span-3 xl:col-span-4">
                <div class="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                    <div>
                        <img class="object-contain w-full h-6 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png" alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png" alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png" alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png" alt="" />
                    </div>

                    <div class="hidden lg:block">
                        <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png" alt="" />
                    </div>
                </div>

                <div class="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                    <div class="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-blue-100" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>
                    <svg class="absolute text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-orange-100" width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                    </svg>
                    <svg class="absolute text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-green-100" width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                    </svg>
                    <svg class="absolute text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-purple-100" width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                    </svg>
                    <svg class="absolute text-purple-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-gray-100" width="65" height="70" viewBox="0 0 65 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
                    </svg>
                    <svg class="absolute text-gray-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-yellow-100" width="78" height="78" viewBox="0 0 78 78" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
                    </svg>
                    <svg class="absolute text-yellow-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-gray-100" width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                    </svg>
                    <svg class="absolute text-gray-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-rose-100" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>
                    <svg class="absolute text-rose-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-lime-100" width="62" height="65" viewBox="0 0 62 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z" />
                    </svg>

                    <svg class="absolute text-lime-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    </div>
</section>


<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">Trusted by world class companies, design teams & popular designers</h2>
        </div>

        <div class="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
            <div>
                <img class="object-contain w-full h-6 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png" alt="" />
            </div>

            <div class="hidden md:block">
                <img class="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png" alt="" />
            </div>
        </div>

        <div class="flex items-center justify-center mt-10 space-x-3 md:hidden">
            <div class="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>

        <p class="mt-10 text-base text-center text-gray-500 md:mt-20">and, 1000+ more companies</p>
    </div>
</section>
<section>
    <div class="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl">You’ll be in great company</h2>
        </div>
    </div>

    <div class="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-11">
        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-2.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="bg-orange-500 aspect-w-1 aspect-h-1">
                <div class="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p class="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Floyd Miles</p>
                    <p class="mt-2 text-sm text-white truncate">Designer</p>
                </div>
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-5.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-6.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-7.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-8.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-9.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-10.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-11.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-12.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="bg-blue-500 aspect-w-1 aspect-h-1">
                <div class="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p class="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Bessie Cooper</p>
                    <p class="mt-2 text-sm text-white truncate">Marketer</p>
                </div>
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-13.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-14.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-15.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-16.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="bg-gray-700 aspect-w-1 aspect-h-1">
                <div class="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p class="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Annette Black</p>
                    <p class="mt-2 text-sm text-white truncate">Photographer</p>
                </div>
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-17.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-18.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-19.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-20.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-21.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-22.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-23.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-24.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="bg-green-400 aspect-w-1 aspect-h-1">
                <div class="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p class="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Leslie Alexander</p>
                    <p class="mt-2 text-sm text-white truncate">Developer</p>
                </div>
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-25.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-26.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-27.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="bg-red-500 aspect-w-1 aspect-h-1">
                <div class="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p class="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Wade Warren</p>
                    <p class="mt-2 text-sm text-white truncate">Founder</p>
                </div>
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-28.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-29.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="bg-gray-800 aspect-w-1 aspect-h-1">
                <div class="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p class="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Guy Hawkins</p>
                    <p class="mt-2 text-sm text-white truncate">SaaS Founder</p>
                </div>
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-30.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-31.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-32.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-33.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-34.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="bg-indigo-500 aspect-w-1 aspect-h-1">
                <div class="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p class="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Ralph Edwards</p>
                    <p class="mt-2 text-sm text-white truncate">Freelancer</p>
                </div>
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-35.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg" alt="" />
            </div>
        </div>

        <div>
            <div class="aspect-w-1 aspect-h-1">
                <img class="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg" alt="" />
            </div>
        </div>
    </div>
</section>

<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Meet the brains</h2>
            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Jenny Wilson</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Founder</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Darrell Steward</p>
                <p class="mt-1 text-base leading-tight text-gray-600">CTO</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Bessie Cooper</p>
                <p class="mt-1 text-base leading-tight text-gray-600">CMO</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Arlene McCoy</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Senior Developer</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Brooklyn Simmons</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Product Designer</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-6.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Jerome Bell</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Customer Success</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Dianne Russell</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Front-end Developer</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-8.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Kristin Watson</p>
                <p class="mt-1 text-base leading-tight text-gray-600">H.R</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Eleanor Pena</p>
                <p class="mt-1 text-base leading-tight text-gray-600">UI Designer</p>
            </div>
        </div>
    </div>
</section>

      <Footer />
    </>
  );
}