import React from 'react'

export default function Input({ label, state, type = "text", setState }) {
    return (
        <div className='w-full'>
            <div className="form-floating mt-2">
                <input
                    type={type} 
                    autoComplete="off"
                    className="form-control"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    id="floatingInput"
                    placeholder={label} />
                <label htmlFor="floatingInput">{label}</label>
            </div>
        </div>
    )
}
