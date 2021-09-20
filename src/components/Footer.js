import React from 'react'

export default function Footer(props) {

    return (
        <footer className={`footer bg-${props.mode} text-${props.mode === 'light'?'dark':'light'} pt-3 pb-4 mt-4`}>
            <div className="text-center">
                <span>
                    Copyright &copy; sanjay-textutils.netlify.app
                </span>
            </div>
        </footer>
    )
}
