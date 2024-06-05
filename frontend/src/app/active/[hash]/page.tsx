'use client'
import axios from "axios"
import { useEffect } from "react";

export default function Page({ params }: { params: { hash: string } }) {

    useEffect(() => {
        const sendRequestActive = async () => {
            try {
                const result = await axios.post('http://localhost:3001/v1/auth/email/confirm', {
                    hash: params.hash
                });
                alert('Success')
            } catch (error) {
                alert('Error')
            }
        }
        sendRequestActive()
    }, [])
    return <div>Test</div>
}