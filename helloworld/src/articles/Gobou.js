import { React, useRef, useEffect } from 'react'

import '../Article.scss';
import { createListDomForTags } from '../commons/functions.js';
import { FoodDataIndex } from '../assets/dataset.json';

import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

// イミューダブル
const Article_tags_context = '効果タグ一覧';
const Article_summary_context = 'だいたいの効果';
const Article_table_context = '効果まとめ';

const my_file_name = window.location.href.split('/').pop();
const my_food_data = FoodDataIndex['Gobou'];
const this_food_jp = my_food_data.JpName;
const Atticle_title_discription_context = my_food_data.TrueName;
// 効果一覧用のListDOM取得
const tag_list_dom = createListDomForTags(my_food_data.Effects);

const Article = () => {
    const tableArea = useRef(null);
    const grid = new Grid(
        my_food_data.tableAssets
    );

    // DOM描画が完了したタイミングで実行
    useEffect(() => {
        // タイトル再設定
        document.title = `${this_food_jp} | ぶるベリアン`;
        // 栄養テーブル描画
        grid.render(tableArea.current);
    });

    return (
        <div className="Article_wrap">
            <div className="Article_area">
                <section>
                    {/* タイトル */}
                    <div className="Article_title_wrap">
                        <h1 className="Article_title _font-bold">{this_food_jp}</h1>
                        <p className="Article_context">
                            {Atticle_title_discription_context}
                        </p>
                    </div>

                    {/* 効果タグ */}
                    <div className="Article_tags_wrap">
                        <h2 className="Article_tags">{Article_tags_context}</h2>
                        <div className="Article_context">
                            <div className="Article_tag_wrap">
                                {tag_list_dom}
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
