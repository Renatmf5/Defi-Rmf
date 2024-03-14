'use client';
import { ModeToggle } from './mode-toggle';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import React from 'react';

function IntroSection() {
  return (
    <section id='intro' className='space-y-6 py-8 md:py-12 lg:py-32 relative'>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
        aria-hidden='true'
      >
        <circle
          cx='512'
          cy='512'
          r='512'
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stopColor='#7775D6' />
            <stop offset='1' stopColor='#E935C1' />
          </radialGradient>
        </defs>
      </svg>
      <div className='container flex max-w-[64rem] flex-col items-center text-center gap-4'>
        <span className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center'>
          📅 Tema da pagina.
          <ModeToggle />
        </span>
        <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
          Rmf-Finance
          <br />
          Trading with AI <span className='text-primary'>AlphaTradeAI</span>
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Aproveite a volatilidade do mercado para aumentar seu patrimônio líquido com nossa plataforma de trading confiável e segura.
          Clique abaixo e conheça nossas opções para Pool de Trading.
        </p>
        <div className='space-x-4'>
          <a
            href='#investment'
            className='bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold'
          >
            Invista
          </a>
          <a
            href='#feature'
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            Compre seu ticket de acesso
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;