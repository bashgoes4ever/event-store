import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom'
import {Header} from './base/Header'
import {Home} from "./pages/Home/Home";
import {Footer} from "./base/Footer";
import {MenuList} from './pages/Menu/List'
import {MenuDetail} from "./pages/Menu/Detail";
import ScrollToTop from './hooks/ScrollToTop'
import {EquipmentList} from './pages/Equipment/List'
import {EquipmentDetail} from './pages/Equipment/Detail'
import {SetsList} from "./pages/Sets/List";
import {SetsDetail} from "./pages/Sets/Detail";
import {TablewareSetsList} from "./pages/TablewareSets/List";
import {TablewareSetsDetail} from "./pages/TablewareSets/Detail";
import {Basket} from "./pages/Basket/Basket";
import {About} from "./pages/About/About";
import {Contacts} from './pages/Contacts'
import {Confident} from "./pages/Confident";
import {Delivery} from './pages/Delivery'
import {NoMatch} from './pages/NoMatch'
import {Search} from "./pages/Search";

import {MenuState} from "./context/menu/MenuState";
import {SetDetailState} from "./context/setDetail/SetDetailState";
import {TablewareSetDetailState} from "./context/tablewareSetDetail/TablewareSetDetailState";
import {BasketState} from "./context/basket/BasketState";
import {MenuPageState} from "./context/menuPage/MenuPageState";
import {SetPageState} from "./context/setPage/SetPageState";
import {EquipmentPageState} from "./context/equipment/EquipmentPageState";
import {TablewarePageState} from "./context/tableware/TablewarePageState";

function App() {

    return (
        <MenuState>
            <TablewarePageState>
                <EquipmentPageState>
                    <MenuPageState>
                        <SetPageState>
                            <SetDetailState>
                                <TablewareSetDetailState>
                                    <BasketState>
                                        <HashRouter>
                                            <ScrollToTop>
                                                <Header/>
                                                <Switch>
                                                    <Route path={'/'} exact component={Home}></Route>
                                                    <Route path={'/menu'} exact component={MenuList}></Route>
                                                    <Route path={'/menu/detail'} exact component={MenuDetail}></Route>
                                                    <Route path={'/equipment'} exact component={EquipmentList}></Route>
                                                    <Route path={'/equipment/detail'} exact
                                                           component={EquipmentDetail}></Route>
                                                    <Route path={'/sets'} exact component={SetsList}></Route>
                                                    <Route path={'/sets/detail'} exact component={SetsDetail}></Route>
                                                    <Route path={'/tableware'} exact
                                                           component={TablewareSetsList}></Route>
                                                    <Route path={'/tableware/detail'} exact
                                                           component={TablewareSetsDetail}></Route>
                                                    <Route path={'/basket'} exact component={Basket}></Route>
                                                    <Route path={'/about'} component={About}></Route>
                                                    <Route path={'/contacts'} exact component={Contacts}></Route>
                                                    <Route path={'/confident'} exact component={Confident}></Route>
                                                    <Route path={'/delivery'} exact component={Delivery}></Route>
                                                    <Route path={'/search'} exact component={Search}></Route>
                                                    <Route component={NoMatch} />
                                                </Switch>
                                                <Footer></Footer>
                                            </ScrollToTop>
                                        </HashRouter>
                                    </BasketState>
                                </TablewareSetDetailState>
                            </SetDetailState>
                        </SetPageState>
                    </MenuPageState>
                </EquipmentPageState>
            </TablewarePageState>
        </MenuState>
    );
}

export default App;
