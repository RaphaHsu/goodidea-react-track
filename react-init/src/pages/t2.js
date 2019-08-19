import React from 'react';
import Footer from '@/components/footer'
import Navigation from '@/components/navigation.js'
import News from '@/components/news.js'
import Sale from '@/components/sale.js'

import '@/assets/css/index.css'

class T2 extends React.Component {
  render() {
    return (<div>
      <Navigation />
      <News />
      <Sale />
      <Footer />
    </div>)
  }
}

export default T2;
