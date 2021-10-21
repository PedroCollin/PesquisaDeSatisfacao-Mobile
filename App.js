import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Cadastro from './src/screens/cadastro/cadastro';
import Login from './src/screens/login/login';
import Home from './src/screens/home/home';

const mainNavigation = createSwitchNavigator({
    // Cadastro,
    Login,
    Home,
});

const App = createAppContainer(mainNavigation);

export default App;