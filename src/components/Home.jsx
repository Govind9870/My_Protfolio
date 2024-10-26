import React from 'react'

const Home = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2'>
            <span>Welcome to My Portfolio</span>
            <div className='flex'>
                <h1>Hello, I'm a</h1>
                <span>Developer</span>
            </div>    
            <p>As a passionate and skilled developer, 
                I thrive on the challenge of translating complex ideas into 
                elegant and efficient code solutions. 
                With a strong foundation in [programming languages/technologies], 
                I am adept at designing, developing, and implementing 
                robust and scalable software applications. 
                My problem-solving abilities are honed through 
                years of experience in [relevant projects/domains], 
                enabling me to tackle technical challenges with 
                creativity and precision. I am a collaborative team player, 
                always eager to learn and contribute to innovative projects. 
                My dedication to clean code, best practices, 
                and continuous improvement drives me to deliver exceptional results 
                that exceed expectations.</p>       
            </div>
            <div className='md:w-1/2'>Right</div>
        </div>
    </div>
    </>
  )
}

export default Home
