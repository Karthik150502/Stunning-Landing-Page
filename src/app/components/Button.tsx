import React from 'react'

export default function Button({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-br from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff]'>
            <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, white, transparent)]"></div>
                <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top, black, transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140, 69,255,.7)_inset] rounded-lg"></div>
            </div>
            <span>{children}</span>
        </button>
    )
}
