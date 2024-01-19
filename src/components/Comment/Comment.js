import avatar from '../../assets/images/Mohan-muruge.jpg';
import './Comment.scss';


function Comment () {
    return (
        <div className="comment">
            <p className="comment__count"> 3 Comments</p>
            <div>
                <div className="comment__container">
                    <img src={avatar} alt="avatar" className="comment__avatar"/>
                    <div>
                        <form className="comment__input">
                            <div className="comment__input-container">
                                <label for="addComment" className="comment__subheader">JOIN THE CONVERSATION</label>
                                <input type="text" name="addComment" id="addComment" placeholder="Add a new comment"/>
                            </div>
                            <div className="comment__button-container">
                                <button className="comment__button">COMMENT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

      
        </div>
    )
}

export default Comment;