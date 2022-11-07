import React, { Component } from 'react'
import './App.css'
import Clock from '../src/components/Clock/index';
import TextArea from '../src/components/TextArea/index';
import Input from '../src/components/Input'
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './components/Footer';



class App extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <Header />
            <Clock />
            <TextArea />
            <Input />
            <Footer />
          </Box>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
