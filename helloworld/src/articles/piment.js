import { React, useRef, useEffect } from 'react'

import '../Article.scss';

import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Article_title_context = 'ピーマン';
const Atticle_title_discription_context = 'ピーマンのあれこれ';
const Article_tags_context = '効果タグ一覧';
const Article_summary_context = 'だいたいの効果';
const Article_table_context = '効果まとめ';

const Article = () => {
    const tableArea = useRef(null);

    const grid = new Grid({
        columns: ['栄養', '主な効果', '補足 '],
        data: [
            ['イヌリン', '血糖値の急上昇を抑え、脂肪の蓄積を抑える', '水溶性食物繊維'],
            ['サポニン', '抗酸化作用、肥満予防', 'ポリフェノール'],
            ['アルギニン', '疲労回復、免疫力向上', 'アミノ酸'],
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
                                <div className="Article_tag">腸内環境改善</div>
                                <div className="Article_tag">アンチエイジング</div>
                            </div>
                        </div>
                    </div>

                    {/* 効果概要 */}
                    <div className="Article_summary_wrap">
                        <h2 className="Article_summary">{Article_summary_context}</h2>
                        <p className="Article_context">
                            ・食物繊維豊富！
                            <br />
                            ・水溶性食物繊維のイヌリン、不溶性食物繊維のリグニン、セルロース
                            <br />
                            ・アミノ酸のアルギニン
                            <br />
                            ・ポリフェノールのサポニン
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
