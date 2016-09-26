import Comment from './Comment';import React, {Component} from 'react';import './CommentContainer.css';class CommentsContainer extends Component {    render() {        return (            <section className="comments">                <h4>Comments:</h4>                {this.props.comments.map(comment =>                    <Comment key={comment.id} email={comment.email} body={comment.body}/>                )}            </section>        );    }}CommentsContainer.propTypes = {    comments: React.PropTypes.arrayOf(        React.PropTypes.object    ).isRequired};export default CommentsContainer;