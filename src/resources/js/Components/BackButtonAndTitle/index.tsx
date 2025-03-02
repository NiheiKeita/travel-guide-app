
import React from 'react'
import Button from '@/Components/Button'
import { router } from '@inertiajs/react'
type Props = {
    children: React.ReactNode,
    backURL?: string,
    showBackButton?: boolean
}

export const BackButtonAndTitle = React.memo<Props>(function BackButtonAndTitle({
    children,
    backURL = '/',
    showBackButton = true
}) {
    return (
        <div className="relative flex items-center py-3">
            {showBackButton &&
                <div className="absolute left-0">
                    <Button className='w-full' variant="default" onClick={() => router.visit(backURL)}>
                        戻る
                    </Button>
                </div>
            }
            <h1 className="mx-auto text-2xl font-bold text-gray-700">
                {children}
            </h1>
        </div>
    )

})
export default BackButtonAndTitle
