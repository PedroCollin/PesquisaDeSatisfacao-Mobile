import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Cadastro from './src/screens/cadastro/cadastro';
import Login from './src/screens/login/login';
import Home from './src/screens/home/home';
import Form from './src/screens/form/Form';
import Form2 from './src/screens/form/Form2';

const mainNavigation = createSwitchNavigator({
    // Cadastro,
    // Login,
    Home,
    Form,
    Form2,
});

const App = createAppContainer(mainNavigation);

export default App;