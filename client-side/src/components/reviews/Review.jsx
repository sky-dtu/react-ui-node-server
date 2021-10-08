import './Review.css'


function Review () {
    return (
        <div className="grid review-comp">
            <div className="row review-comp-row justify-self-center">

                <div className="col-1 arrow">
                    <img className="left-arrow size-arrow" src="https://img.icons8.com/ios-filled/50/000000/chevron-left.png"/>
                </div>


                <div className="col-2 pic">
                    <img className="pic-elem" src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"/>
                </div>


                <div className="col content-col">
                    <h3 className="h3-review">JON DEO</h3>
                    <p className="p-review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officia distinctio quibusdam laborum similique fugiat illo optio sequi, quod odio!</p>
                </div>


                <div className="col-1 arrow">
                    <img className="right-arrow size-arrow" src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png"/>
                </div>


            </div>
        </div>
    );
}

export default Review;