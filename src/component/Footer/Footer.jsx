import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="fixed bottom-0 w-fill-available pt-3 px-7 bg-page-bg-color shadow">
            <div className="w-full mx-auto py-6 flex justify-between">
                <span className="text-base font-normal text-footer-text-color">
                    Copyright © 2023 Qubrid - Quantum Computing Simplified
                </span>
                <ul className="flex gap-x-8 text-base font-normal text-footer-text-color">
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Help</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                    <li>
                        <Link>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link>Terms & conditions</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer