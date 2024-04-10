function Grow(){
    return (
        <div className="container mx-auto px-8 py-12">
            <h2 className="text-4xl font-bold mb-8">Grow in HeartArt</h2>

            <div className="mb-12">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.707 4.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L7 7.414V15a1 1 0 11-2 0V7.414L4.293 9.707a1 1 0 01-1.414-1.414l4-4zM3 2a1 1 0 011-1h6a1 1 0 011 1v1a1 1 0 11-2 0V3H5v1a1 1 0 11-2 0V3a1 1 0 011-1zm12.5 10.5a.5.5 0 00-1 0v4a.5.5 0 001 0v-4zM16 3a1 1 0 011-1h1a1 1 0 011 1v4a1 1 0 11-2 0V4h-1a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Unlock Your Creativity</h3>
                        <p className="text-lg">Explore various art forms and techniques to unlock your creative potential.</p>
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 11-2 0 1 1 0 012 0zm1-4a1 1 0 00-2 0v2a1 1 0 102 0V9zm1-3a1 1 0 00-2 0h2a1 1 0 100-2h-2zM9 7a1 1 0 110-2 1 1 0 010 2zm-4 3a1 1 0 100-2 1 1 0 000 2zm12-1a1 1 0 110-2 1 1 0 010 2zm-4 3a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 01-2 0 1 1 0 012 0zm1-3a1 1 0 100-2h-2a1 1 0 100 2h2zm-4-1a1 1 0 010 2 1 1 0 010-2zm-3 1a1 1 0 100 2h2a1 1 0 100-2H7zm1 4a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Learn from Experts</h3>
                        <p className="text-lg">Get insights and tips from experienced artists to enhance your skills.</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-16 h-16 flex-shrink-0 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.93 10a4.96 4.96 0 000 4H10a4.96 4.96 0 000-4H5.93zm0-4a4.96 4.96 0 000 4H10a4.96 4.96 0 000-4H5.93zm8.26 8a4.96 4.96 0 000-4H10a4.96 4.96 0 000 4h3.19zM10 7.07a2.93 2.93 0 100 5.86 2.93 2.93 0 000-5.86zM8 10a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Collaborate with Community</h3>
                        <p className="text-lg">Connect with other artists, share your work, and collaborate on projects.</p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <img src="https://via.placeholder.com/400" alt="HeartArt" className="mx-auto mb-8" />
                <p className="text-lg">Join HeartArt and embark on a journey of creativity, expression, and growth.</p>
            </div>

            <div className="text-center mt-12">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                    Join HeartArt
                </button>
            </div>
        </div>
    );
}
export default Grow;