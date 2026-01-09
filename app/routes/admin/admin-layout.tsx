import React from 'react'
import {Outlet} from "react-router";

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            mobile sidebar
            <aside className='max-w-[270px] hidden lg:block w-full'>
                widescreen sidebar
            </aside>
            <aside className='children'>
                <Outlet />
            </aside>
        </div>
    )
}
export default AdminLayout
