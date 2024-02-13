import { NextResponse } from 'next/server'


const middleware = (request) => {

}

export default middleware


// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail'
    ]
}