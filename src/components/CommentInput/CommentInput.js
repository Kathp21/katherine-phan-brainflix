import avatar from '../../assets/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import './CommentInput.scss';

function CommentInput ({variant, numberOfComment}) {
    return (
        <section className="comment-input">
            <p className="comment-input__count">{numberOfComment} Comments</p>
            <section className="comment-input__underline">
                <section className="comment-input__container">
                    <img src={avatar} alt="avatar" className="comment-input__avatar"/>
                    <div>
                        <form className="comment-input__comment-section">
                            <div className="comment-input__input-container">
                                <label htmlFor="addComment" className="comment-input__subheader">JOIN THE CONVERSATION</label>
                                <input type="text" name="addComment" id="addComment" placeholder="Add a new comment"/>
                            </div>
                            <div className="comment-input__button-container">
                                <Button buttonText="COMMENT" variant="button__comment"/>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default CommentInput;