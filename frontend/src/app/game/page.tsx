'use client'

import dynamic from "next/dynamic";

const DynamicPhaserGame = dynamic(() => import('@/app/game/components/PhaserGame'), {ssr: false});

export default function Game() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex',
            flexDirection: 'column', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <DynamicPhaserGame />
        </main>
    )
}