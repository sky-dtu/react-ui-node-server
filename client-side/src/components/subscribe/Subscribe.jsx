import './Subscribe.css';

function Subscribe() {
    return (
        <div className="grid subs-comp">
            <div className="row subs-comp-row">
                <div className="col-10 email-col">
                    <input 
                        className="input-group input-group-lg input-group-place" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email ID"
                    />
                </div>

                <div className="col-2">
                    <button type="submit" 
                        className="btn btn-light btn-lg btn-green">
                            Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
