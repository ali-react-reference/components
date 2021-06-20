import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
import faker from 'faker';

const App = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/surfreport-a52a0.appspot.com/o/boards%2Ffish.svg?alt=media&token=b39e68a2-1e74-454c-81c8-b5d3b79341e3",
    "https://firebasestorage.googleapis.com/v0/b/surfreport-a52a0.appspot.com/o/boards%2Ffunboard.svg?alt=media&token=a3c4914c-50c5-41b5-b4fc-87812ec8438e",
    "https://firebasestorage.googleapis.com/v0/b/surfreport-a52a0.appspot.com/o/boards%2Fgun.svg?alt=media&token=e08487ff-6e79-41a5-a8ff-5f0f1e36d589",
    "https://firebasestorage.googleapis.com/v0/b/surfreport-a52a0.appspot.com/o/boards%2Flongboard.svg?alt=media&token=bc902d1c-4b92-4048-a8e6-b65e75d7d24e",
    "https://firebasestorage.googleapis.com/v0/b/surfreport-a52a0.appspot.com/o/boards%2Fmini%20mal.svg?alt=media&token=9dc4d8cf-f55e-4332-898e-2a9e4c6bba70",
    "https://firebasestorage.googleapis.com/v0/b/surfreport-a52a0.appspot.com/o/boards%2Fshortboard.svg?alt=media&token=fd16f31d-59db-4d57-b857-0e85e303c79b"
  ]

  function getRandomItemFromArray(items){
    return items[Math.floor(Math.random()*items.length)];
  }

  return (
    <div className="ui container comments">
    {/* can pass any properties from the parent to the parent to the child */}
    {/* in this case im passing in a random image string */}
      <ApprovalCard>
        Are you sure?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          imageSrc={getRandomItemFromArray(images)} 
          author={faker.name.firstName()} 
          time="Yesterday at noneya" 
          comment="oooffff yaaasss"
        /> 
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          imageSrc={getRandomItemFromArray(images)} 
          author={faker.name.firstName()} 
          time="Yesterday at noneya" 
          comment="oooffff yaaasss"
        /> 
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          imageSrc={getRandomItemFromArray(images)} 
          author={faker.name.firstName()} 
          time="Yesterday at noneya" 
          comment="oooffff yaaasss"
        /> 
      </ApprovalCard>
    </div>
  )
}

// This enables hot reloading
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);