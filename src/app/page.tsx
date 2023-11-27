import Image from 'next/image'
import { appWindow } from '@tauri-apps/api/window'
import './css/page.css'

export default function Home() {
    return (
        <>
            <Window />
        </>
    )
}

function Window() {
    return (
        <div data-tauri-drag-region className='window-bar'>
            <div data-tauri-drag-region className='left-1'>
                <Image className='window-icon' src='/images/favicon.ico' width={20} height={20} alt={'app-icon'} />
                <span className='window-title'>Tauri</span>
            </div>
            <div data-tauri-drag-region className='left-2'>

            </div>
            <div data-tauri-drag-region className='center'>

            </div>
            <div data-tauri-drag-region className='right-2'>

            </div>
            <div data-tauri-drag-region className='right-1'>
                <div className='window-button minimize' onClick={() => appWindow.minimize()}>
                </div>
                <div className='window-button maximize' onClick={() => appWindow.toggleMaximize()}>
                </div>
                <div className='window-button close' onClick={() => appWindow.close()}>
                    <Image className='icon' src='/images/svg/window-bar/close.svg' alt={'close-icon'} />
                </div>
            </div>
        </div>
    )
}
