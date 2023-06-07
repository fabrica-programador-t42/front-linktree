import { Route, Routes } from 'react-router-dom';
import { Login } from '../views/Login';
import { GuardedRoute } from './GuardedRoute';
import { Home } from '../views/Home';
import { Perfil } from '../views/Perfil';
import { MeusLinks } from '../views/MeusLinks';
import { Cadastro } from '../views/Cadastro';
import { RecuperarSenhaTelaEmail } from '../views/RecuperarSenhaTelaEmail';
import { CadastroNovaSenha } from '../views/CadastroNovaSenha';


export const HOME_ROUTE = '/dashboard'
export const PERFIL_ROUTE = '/dashboard/perfil'
export const MY_LINKS_ROUTE = '/dashboard/meus-links'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/cadastro'
export const PASSWORD_RECOVERY_ROUTE = '/recuperar-senha'
export const NEW_PASSWORD_ROUTE = '/nova-senha'

export function AppRoutes({ isAuthenticated = false }) {
    return (
        <Routes>
            {/* ROTAS SEM AUTENTICACAO */}
            <Route
                element={
                    <GuardedRoute
                        isRouteAccessible={!isAuthenticated}
                        isAuthenticated={isAuthenticated}
                        redirectRoute={HOME_ROUTE}
                    />
                }
            >
                <Route path={LOGIN_ROUTE} element={<Login></Login>} />
            </Route>
            <Route
                element={
                    <GuardedRoute
                        isRouteAccessible={!isAuthenticated}
                        isAuthenticated={isAuthenticated}
                        redirectRoute={HOME_ROUTE}
                    />
                }
            >
                <Route path={REGISTRATION_ROUTE} element={<Cadastro></Cadastro>} />
            </Route>
            <Route
                element={
                    <GuardedRoute
                        isRouteAccessible={!isAuthenticated}
                        isAuthenticated={isAuthenticated}
                        redirectRoute={HOME_ROUTE}
                    />
                }
            >
                <Route path={PASSWORD_RECOVERY_ROUTE} element={<RecuperarSenhaTelaEmail></RecuperarSenhaTelaEmail>} />
            </Route>

            <Route
                element={
                    <GuardedRoute
                        isRouteAccessible={!isAuthenticated}
                        isAuthenticated={isAuthenticated}
                        redirectRoute={HOME_ROUTE}
                    />
                }
            >
                <Route path={NEW_PASSWORD_ROUTE} element={<CadastroNovaSenha></CadastroNovaSenha>} />
            </Route>

            {/* ROTAS AUTENTICADAS */}
            <Route
                element={
                    <GuardedRoute
                        isRouteAccessible={isAuthenticated}
                        isAuthenticated={isAuthenticated}
                        redirectRoute={LOGIN_ROUTE}
                    />
                }>
                <Route path={HOME_ROUTE} element={<Home></Home>} />
            </Route>

            <Route
                element={
                    <GuardedRoute
                        isRouteAccessible={isAuthenticated}
                        isAuthenticated={isAuthenticated}
                        redirectRoute={LOGIN_ROUTE}
                    />
                }>
                <Route path={PERFIL_ROUTE} element={<Perfil></Perfil>} />
            </Route>
            <Route
                element={
                    <GuardedRoute
                        isRouteAccessible={isAuthenticated}
                        isAuthenticated={isAuthenticated}
                        redirectRoute={LOGIN_ROUTE}
                    />
                }>
                <Route path={MY_LINKS_ROUTE} element={<MeusLinks></MeusLinks>} />
            </Route>
        </Routes>
    )
}
