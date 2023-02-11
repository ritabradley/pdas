import React from 'react';
import pdas from './pdas.js';
import ProfileCard from './components/ProfileCard';

function App() {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className=' text-3xl md:text-5xl text-secondary font-bold my-10'>Personal Digital Assistants</h1>
            <div className='flex flex-col justify-center md: mx-10 align-center md:flex-row space-y-10 md:space-x-10 md:space-y-0 max-w-full lg:w-3/4'>
                {pdas.map((pda) => {
                    return (
                        <ProfileCard
                            key={pda.name}
                            imgUrl={pda.imgUrl}
                            name={pda.name}
                            handle={pda.handle}
                            bio={pda.bio}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
