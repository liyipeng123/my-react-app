import {Link} from "react-router-dom";
import './index.scss';
import {Menu} from "@/commpoents/common/menu";

export default function IndexScreen() {
    return (
        <div>
            <Menu data={[{
                title: 'title1',
                children: [
                    {title: 'title1-1', path: '/about'},
                    {title: 'title1-1', path: '/about'},
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'}
                ]
            }, {
                title: 'title2',
                children: [
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'}
                ]
            }, {
                title: 'title3',
                path: '/about'
            }, {
                title: 'title4'
            }]}/>
            <div>Now in index</div>
            <Link to='/about'>about</Link>
            <div className='main'>
                <div className='box'>aa</div>
            </div>
        </div>
    )
}
