import avatar from '../../assets/images/Mohan-muruge.jpg';
import './CommentInput.scss';


function CommentInput () {
    return (
        <div className="comment-input">
            <p className="comment-input__count"> 3 Comments</p>
            <div>
                <div className="comment-input__container">
                    <img src={avatar} alt="avatar" className="comment-input__avatar"/>
                    <div>
                        <form className="comment-input__input">
                            <div className="comment-input__input-container">
                                <label for="addComment" className="comment-input__subheader">JOIN THE CONVERSATION</label>
                                <input type="text" name="addComment" id="addComment" placeholder="Add a new comment"/>
                            </div>
                            <div className="comment-input__button-container">
                                <button className="comment-input__button">COMMENT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

      
        </div>
    )
}

export default CommentInput;