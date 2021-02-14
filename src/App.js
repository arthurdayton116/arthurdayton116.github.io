import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import { Blogs } from './components/Blog';
import { Post } from './components/Post';
import { ThemeProvider } from '@emotion/react';

import theme from './components/Theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
              <Router>
                      <NavigationBar />
                      <Switch>
                          <Route exact path="/" component={About} />
                          <Route path="/about" component={About} />
                          <Route path="/blog" component={Blogs} />
                          <Route path="/post/*" component={Post} />
                          <Route component={NoMatch} />
                      </Switch>
              </Router>
          </React.Fragment>
        </ThemeProvider>
    )
}

// export default props => (
//     <MDXProvider components={components}>
//         <App {...props}></App>
//     </MDXProvider>
// )
export default App
