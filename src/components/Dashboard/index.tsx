import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Toolbar from '../Toolbar'
import TableComponent from '../TableComponent'
import MenuBar from '../Menubar'

function Dashboard() {
    const [exportBtnClicked, setExportBtnClicked] = useState<boolean>(false)
    return (
        <div>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className=' w-full'>
                    <MenuBar exportBtnClicked={exportBtnClicked} setExportBtnClicked={setExportBtnClicked} />
                   
                    <TableComponent exportBtnClicked={exportBtnClicked} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard