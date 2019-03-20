import React from 'react'
import { Avatar } from 'jxnblk'
import styled from 'styled-components'
import Link from './Link'

const Footer = styled.footer({
  display: 'flex',
  marginTop: '128px',
  marginBottom: '128px',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
})

export default () =>
  <Footer>
    <Avatar
      size={64}
      style={{
        display: 'inline-block'
      }}
    />
    <Link href='https://github.com/jxnblk/blog'>
      GitHub
    </Link>
    <Link href='https://jxnblk.com'>
      Made by Jxnblk
    </Link>
  </Footer>