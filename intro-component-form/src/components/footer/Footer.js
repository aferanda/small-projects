import React from 'react';
import { FooterStyle } from './styles';

export default function Footer() {
  return (
    <FooterStyle>
      <p>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='https://www.github.com/aferanda'>Amanda Fernandes</a>.
      </p>
    </FooterStyle>
  )
}
