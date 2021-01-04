import { Tab, Tabs } from '@material-ui/core/';
import { Link } from "react-router-dom";

//TODO

export default function NavTabs(props) {
    const allTabs = props.routes; 
    function handleChange(e) { }
    
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Tabs value={props.value} onChange={handleChange} centered aria-label="navigation tabs">
            <Tab label="最新信仰" value={allTabs[0]} component={Link} to={allTabs[0]} {...a11yProps(0)} />
            <Tab label="信仰成長路" value={allTabs[1]} component={Link} to={allTabs[1]} {...a11yProps(1)} />
            <Tab label="成人主日学" value={allTabs[2]} component={Link} to={allTabs[2]} {...a11yProps(2)} />
        </Tabs>
    );
}