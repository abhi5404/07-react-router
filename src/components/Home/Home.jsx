import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-4xl flex flex-col items-center justify-center min-h-screen p-4">
            <aside className="relative w-full bg-white/80 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-6 mb-8">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Download Now
                        <span className="block text-xl md:text-2xl font-normal mt-1">Lorem Ipsum</span>
                    </h2>
                    <Link
                        className="inline-flex items-center px-6 py-3 font-medium bg-orange-700 text-white rounded-lg hover:opacity-80 transition"
                        to="/"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="mr-2"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        Download now
                    </Link>
                </div>
                <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        className="w-100 h-60 object-cover rounded-lg shadow-md"
                        src="https://imgs.search.brave.com/ogs1pcS919Y1_aghJJDvaidhrUkeuXsU06q5aSd6A-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzIzLzkwLzAx/LzM2MF9GXzYyMzkw/MDE4Ml82UTFCdHZ0/VUx2NUE1NUJGSkly/dmt1ZVJDMEpqTFFM/YS5qcGc"
                        alt="image1"
                    />
                </div>
            </aside>

            <div className="flex justify-center items-center w-full mb-8">
                <img
                    className="w-80 h-40 object-cover rounded-lg shadow-md"
                    src="https://imgs.search.brave.com/icbvGa7ukuQ4BNaKeK4QkuUmtLtVG90gfTITBaU4atU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzcyLzgyLzM1/LzM2MF9GXzQ3Mjgy/MzUxN19CRGZFUzlS/NGxYMjM0U1d1bnFP/eUhJSUxKSTNOYWFq/VS5qcGc"
                    alt="image2"
                />
            </div>

            <h1 className="text-center text-2xl md:text-4xl font-semibold py-4">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}