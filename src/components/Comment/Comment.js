import './Comment.scss';
import formatTimestamp from '../Utilities/FormatTimestamp';

const Comment = ({comment}) => {
    return (
        <section className="comment">
            <div className="comment__container">
                <div className="comment__avatar"></div>
                <div className="comment__input-container">
                    <div className="comment__info">
                        <span className="comment__username">{comment.name}</span>
                        <span className="comment__date">{formatTimestamp(comment.timestamp)}</span>
                    </div>
                    <p className="comment__content">{comment.comment}</p>
                </div>
            </div>
        </section>
    )
}

export default Comment;