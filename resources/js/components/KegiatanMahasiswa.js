import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../css/reactkeg.css';

class KegiatanMahasiswa extends Component{

render(){
    const displayTabs = (
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
            <Tab className="text-tab-pane">Kegiatan<br></br>Mahasiswa</Tab>
            <Tab className="text-tab-pane">Lembaga<br></br>Semi Otonom</Tab>
            </TabList>

            <TabPanel>
            <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );

return(
    <div className="container-keg">
        {displayTabs}
    </div>
    );
}
}

export default KegiatanMahasiswa;

if (document.getElementById('keg')) {
    ReactDOM.render(<KegiatanMahasiswa />, document.getElementById('keg'));
}
