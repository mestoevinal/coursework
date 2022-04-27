import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privateRoutes, adminPrivateRoutes} from "../../router/routes";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const AppRouter = observer (() => {

    const {user} = useContext(Context)

    return (
        user.isAuth ?
                <Switch>
                    {user.Role === "ADMIN" ?
                        <div>{adminPrivateRoutes.map(route =>
                            <Route
                                path={route.path}
                                component={route.component}
                                exact={route.exact}
                                key={route.path}
                            />
                        )}
                            <Redirect to="/ExursionCity"/>
                        </div>
                        :
                        <div>{privateRoutes.map(route =>
                                <Route
                                    path={route.path}
                                    component={route.component}
                                    exact={route.exact}
                                    key={route.path}
                                />
                            )}
                            <Redirect to="/ExursionCity"/>
                        </div>
                    }
                </Switch>
                :
                <Switch>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                    <Redirect to="/login"/>
                </Switch>
    );
});

export default AppRouter;