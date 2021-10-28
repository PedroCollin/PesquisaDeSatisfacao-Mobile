import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Cadastro from './src/screens/cadastro/cadastro';
import Login from './src/screens/login/login';
import Home from './src/screens/home/home';
import Form from './src/screens/form/Form';
import Form2 from './src/screens/form/Form2';
import Form3 from './src/screens/form/Form3';
import Form4 from './src/screens/form/Form4';
import Form5 from './src/screens/form/Form5';
import Form6 from './src/screens/form/Form6';
import Form7 from './src/screens/form/Form7';
import Form8 from './src/screens/form/Form8';
import Form9 from './src/screens/form/Form9';
import Form10 from './src/screens/form/Form10';
import Form11 from './src/screens/form/Form11';
import Form12 from './src/screens/form/Form12';
import Form13 from './src/screens/form/Form13';

const mainNavigation = createSwitchNavigator({
    // Cadastro,
    // Login,
    Home,
    Form,
    Form2,
    Form3,
    Form4,
    Form5,
    Form6,
    Form7,
    Form8,
    Form9,
    Form10,
    Form11,
    Form12,
    Form13,
});

const App = createAppContainer(mainNavigation);

export default App;