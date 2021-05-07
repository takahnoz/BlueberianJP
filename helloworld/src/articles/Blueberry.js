import { React, useRef, useEffect } from 'react'

import '../Article.scss';

import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Article_title_context = 'ブルーベリー';
const Atticle_title_discription_context = 'ブルーベリー（英: blueberry）ツツジ科スノキ属シアノコカス節';
const Article_tags_context = '効果タグ一覧';
const Article_summary_context = 'だいたいの効果';
const Article_table_context = '効果まとめ';


function Article() {
    const tableArea = useRef(null);

    const grid = new Grid({
        columns: ['栄養', '主な効果', '補足 '],
        data: [
            ['アントシアニン', '抗酸化作用、抗炎症作用、眼精疲労回復', 'ポリフェノール'],
            ['食物繊維', '腸内環境改善、整腸作用', ''],
            ['ビタミンE', '抗酸化作用', 'ビタミン群'],
        ]
    });

    useEffect(() => {
        grid.render(tableArea.current);
    });


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

                    {/* 効果タグ */}
                    <div className="Article_tags_wrap">
                        <h2 className="Article_tags">{Article_tags_context}</h2>
                        <div className="Article_context">
                            <div className="Article_tag_wrap">
                                <div className="Article_tag">美容</div>
                                <div className="Article_tag">視機能改善作用</div>
                                <div className="Article_tag">アンチエイジング</div>
                            </div>
                        </div>
                    </div>

                    {/* 効果概要 */}
                    <div className="Article_summary_wrap">
                        <h2 className="Article_summary">{Article_summary_context}</h2>
                        <p className="Article_context">
                            ・視機能改善作用や強力な抗酸化作用のアントシアニン
                            <br />
                            ・食物繊維豊富！
                            <br />
                            ・抗酸化作用のあるビタミンC、ビタミンE
                        </p>
                    </div>

                    {/* 栄養詳細 */}
                    <div className="Article_nutrition_wrap">
                        <h2 className="Article_nutrition">{Article_table_context}</h2>
                        <p className="Article_context">
                            <div ref={tableArea} />
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Article;
