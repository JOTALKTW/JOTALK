// 文章視窗元件
function Post(props) {
    const { target, user_img, user_name, post_time, art_title, hashtag1, hashtag2, hashtag3, art_content, heart_num, comment_num, bookMark_num,
        time, user_url, userName, user_time, floor,content,heart_cmt,comment_cmt,
        time2, user_url2, userName2, user_time2,floor2,content2,heart_cmt2,comment_cmt2,
        time3,user_url3, userName3, user_time3,floor3,content3,heart_cmt3,comment_cmt3,
        time4, user_url4, userName4, user_time4, floor4,content4,heart_cmt4,comment_cmt4,
        time5, user_url5, userName5, user_time5, floor5,content5,heart_cmt5,comment_cmt5} = props;
    const artId = `content-${target}`;
    
    return (
        <>
            <div id="overlay" className="overlay"></div>

            <div id={artId} className="content hidden">
                <figure className="closebtn"><img src="./img/forum/account/iconmonstr-x.svg" alt="" /></figure>
                <div className="content_user">
                    <figure><img src={user_img} alt="" /></figure>
                    <h2>{user_name}</h2>
                    <small>{post_time}</small>
                </div>
                <h1>{art_title}</h1>
                <div id="hashtag">
                    <small>{hashtag1}</small>
                    <small>{hashtag2}</small>
                    <small>{hashtag3}</small>
                </div>
                <div className="padding">
                    <p id="p">{art_content}</p>                    
                    <div id="like">
                        <div id="heart">
                            <img id="heart_img" src="./img/forum/account/like/icon _heart_.svg" alt="" />
                            <p id="heart_num">{heart_num}</p>
                        </div>
                        <div id="comment">
                            <img id="comment_img" src="./img/forum/account/like/icon _comment square_.svg"
                                alt="" />
                            <p id="comment_num">{comment_num}</p>
                        </div>
                        <div id="bookMark">
                            <img id="bookMark_img" src="./img/forum/account/like/icon _bookmark_.svg" alt="" />
                            <p id="bookMark_num">{bookMark_num}</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="comment-section">
                    {/*排序按鈕區域*/}
                    <div className="sort-buttons">
                        <button className="sort-button sort-hot">熱門留言</button>
                        <button className="sort-button sort-newest">由新至舊留言</button>
                        <button className="sort-button sort-oldest">由舊至新留言</button>
                    </div>

                    <div id="comments1">
                        {/*留言區域*/}
                        <div className="comment" data-timestamp={time}>
                            <div className="comment_user">
                                <figure><img src={user_url} alt="" /></figure>
                                <h2>{userName}</h2>
                                <small>{user_time}</small>
                                <small>{floor}</small>
                            </div>
                            <p>{content}</p>
                            <div id="like">
                                <div id="heart">
                                    <img id="heart_img" src="./img/forum/account/like/icon _heart_.svg" alt="" />
                                    <p id="heart_num">{heart_cmt}</p>
                                </div>
                                <div id="comment">
                                    <img id="comment_img" src="./img/forum/account/like/icon _comment square_.svg" alt="" />
                                    <p id="comment_num">{comment_cmt}</p>
                                </div>
                                <small>查看更多回覆</small>
                            </div>
                            <hr />
                        </div>
                        <div className="comment" data-timestamp={time2}>
                            <div className="comment_user">
                                <figure><img src={user_url2} alt="" /></figure>
                                <h2>{userName2}</h2>
                                <small>{user_time2}</small>
                                <small>{floor2}</small>
                            </div>
                            <p>{content2}</p>
                            <div id="like">
                                <div id="heart">
                                    <img id="heart_img" src="./img/forum/account/like/icon _heart_.svg" alt="" />
                                    <p id="heart_num">{heart_cmt2}</p>
                                </div>
                                <div id="comment">
                                    <img id="comment_img" src="./img/forum/account/like/icon _comment square_.svg" alt="" />
                                    <p id="comment_num">{comment_cmt2}</p>
                                </div>
                                <small>查看更多回覆</small>
                            </div>
                            <hr />
                        </div>
                        <div className="comment" data-timestamp={time3}>
                            <div className="comment_user">
                                <figure><img src={user_url3} alt="" /></figure>
                                <h2>{userName3}</h2>
                                <small>{user_time3}</small>
                                <small>{floor3}</small>
                            </div>
                            <p>{content3}</p>
                            <div id="like">
                                <div id="heart">
                                    <img id="heart_img" src="./img/forum/account/like/icon _heart_.svg" alt="" />
                                    <p id="heart_num">{heart_cmt3}</p>
                                </div>
                                <div id="comment">
                                    <img id="comment_img" src="./img/forum/account/like/icon _comment square_.svg" alt="" />
                                    <p id="comment_num">{comment_cmt3}</p>
                                </div>
                                <small>查看更多回覆</small>
                            </div>
                            <hr />
                        </div>
                        <div className="comment" data-timestamp={time4}>
                            <div className="comment_user">
                                <figure><img src={user_url4} alt="" /></figure>
                                <h2>{userName4}</h2>
                                <small>{user_time4}</small>
                                <small>{floor4}</small>
                            </div>
                            <p>{content4}</p>
                            <div id="like">
                                <div id="heart">
                                    <img id="heart_img" src="./img/forum/account/like/icon _heart_.svg" alt="" />
                                    <p id="heart_num">{heart_cmt4}</p>
                                </div>
                                <div id="comment">
                                    <img id="comment_img" src="./img/forum/account/like/icon _comment square_.svg" alt="" />
                                    <p id="comment_num">{comment_cmt4}</p>
                                </div>
                                <small>查看更多回覆</small>
                            </div>
                            <hr />
                        </div>
                        <div className="comment" data-timestamp={time5}>
                            <div className="comment_user">
                                <figure><img src={user_url5} alt="" /></figure>
                                <h2>{userName5}</h2>
                                <small>{user_time5}</small>
                                <small>{floor5}</small>
                            </div>
                            <p>{content5}</p>
                            <div id="like">
                                <div id="heart">
                                    <img id="heart_img" src="./img/forum/account/like/icon _heart_.svg" alt="" />
                                    <p id="heart_num">{heart_cmt5}</p>
                                </div>
                                <div id="comment">
                                    <img id="comment_img" src="./img/forum/account/like/icon _comment square_.svg" alt="" />
                                    <p id="comment_num">{comment_cmt5}</p>
                                </div>
                                <small>查看更多回覆</small>
                            </div>
                            <hr />
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}