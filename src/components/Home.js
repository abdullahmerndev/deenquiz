// import { useState } from 'react';
import Header from './Header'

const Home = () => {
  const trivia = [
    { id: 1, postedBy: 'John Doe', qtn: 'Is it "Horse riding" or "Horse back riding"?', date: '31 Mar\'22', time: '19:08' },
    { id: 2, postedBy: 'Jake Moron', qtn: 'How can a square leave a circle?', date: '30 Mar\'22', time: '15:28'}
  ]

  return (
    <div className="home">
      <Header />
      <p className="mt-5 mb-0 ml-4 text-red-300 text-base font-medium">Greetings!</p>
      <h2 className="homepage__title m-4 text-3xl text-red-300 font-medium mt-2 ml-4 mb-10">Go ahead and take on the challenge..!<br/><span className="text-2xl">Answer the questions posted by your peers in the least amount of time possibe.</span></h2>
      <p className="m-4 text-sm text-amber-400 font-medium">Total questions: { trivia.length }</p>
      {trivia.map(post => (
        <div key={post.id} className="m-4 p-4 bg-slate-100 rounded">
          <h4>{ post.postedBy }</h4>
          <strong>{ post.qtn.substring(0, 30) }</strong>
          <p className="text-xs font-bold text-gray-400">{ post.date } - { post.time }</p>
        </div>
      ))}
      {/* <p className="copy text-slate-400 text-center p-4">Currently, there are no questions posted. You can add yours by clicking the add button!</p> */}
    </div>
  );
}

export default Home;
