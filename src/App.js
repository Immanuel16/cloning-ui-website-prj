import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './content/Home/Home';
import PastorsComponent from './content/Church/Pastor/Pastor';
import GatsuPage from './content/Church/Gatsu/Gatsu';
import GroupPage from './content/Church/Group/Group';
import VisionMissionPage from './content/Church/VisionMission/VisionMission';
import HistoryPage from './content/Church/History/History';
import IbadahUmumPage from './content/Ministries/IbadahUmum/IbadahUmum';
import IbadahBPAPage from './content/Ministries/IbadahBPA/IbadahBPA';
import IbadahKhususPage from './content/Ministries/IbadahKhusus/IbadahKhusus';
import CoolPage from './content/Community/COOL/Cool';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} render={props => <HomePage {...props} />}></Route>
            <Route exact path="/pastors" component={PastorsComponent} render={props => <PastorsComponent {...props} />}></Route>
            <Route exact path="/gbi-gatot-subroto" component={GatsuPage} render={props => <GatsuPage {...props} />}></Route>
            <Route exact path="/history-ck7" component={HistoryPage} render={props => <HistoryPage {...props} />}></Route>
            <Route exact path="/vision-mission" component={VisionMissionPage} render={props => <VisionMissionPage {...props} />}></Route>
            <Route exact path="/ck7-group" component={GroupPage} render={props => <GroupPage {...props} />}></Route>
            <Route exact path="/ibadah-umum" component={IbadahUmumPage} render={props => <IbadahUmumPage {...props} />}></Route>
            <Route exact path="/ibadah-bpa" component={IbadahBPAPage} render={props => <IbadahBPAPage {...props} />}></Route>
            <Route exact path="/ibadah-khusus" component={IbadahKhususPage} render={props => <IbadahKhususPage {...props} />}></Route>
            <Route exact path="/cool" component={CoolPage} render={props => <CoolPage {...props} />}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
