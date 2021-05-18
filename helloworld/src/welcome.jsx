import { React, useRef, useEffect } from 'react'

import './Article.scss';

const Article_title_context = 'はじめに',
    Atticle_title_discription_context = `元々自分用に"なんとなく"栄養のことを知れるような情報ページを作ろうとしました。
                                            この情報を皆さんに共有して、少しでも健康を手に入れらたらと思い公開しました。
                                            普段の食事の片手間に「あ、この食べ物にはこんな効果があるんだな〜」と見ていただけると幸いです。`,
     Article_tags_context = '効果タグ一覧',
     Article_summary_context = 'だいたいの効果';

const Article = () => {
    return (
        <div className="Article_wrap">
            <div className="Article_area">
                <section>
                    {/* タイトル */}
                    <div className="Article_title_wrap">
                        <h1 className="Article_title _font-bold">{Article_title_context}</h1>
                        <p className="Article_context">
                            {Atticle_title_discription_context}
                        </p>
                    </div>

                    {/* 最新情報 */}
                    <div className="Article_news_wrap">
                        <h2 className="Article_news">{Article_summary_context}</h2>
                        <p className="Article_context">
                            
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Article;
