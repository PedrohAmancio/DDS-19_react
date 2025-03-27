import {createBrowserRouter} from 'react-router-dom';
//import das paginas
import App from './App.jsx';
import Erro from './pages/Erro.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Contato from './pages/Contato.jsx';
import sobre from './pages/sobre.jsx';

const router = createBrowserRouter([
    {
        path:"/", //Rota 
        element:<App/>, // local que vai acessar quando acessar a rota
        errorElement:<Erro/>, // local que vai acessar quando acessar a rota e der erro
        // local que vai acessar quando acessar a rota so que mais organizado e com numero maior de componentes
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/cadastro",
                element:<Cadastro/>,
            },
            {
                path:"/sobre",
                element:<sobre/>,
         },
         {
            path:"/Contato",
            element:<Contato/>,
     },


    ],
    },
]);
export default router;