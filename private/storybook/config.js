import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <BrowserRouter>
    {story()}
  </BrowserRouter>
))

configure(loadStories, module)