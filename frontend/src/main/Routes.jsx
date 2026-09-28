import { Route, Routes } from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserCrud />} />
            <Route path="*" element={<Home />}/>
        </Routes>
    )
}