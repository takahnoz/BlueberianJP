import { React, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

import '../Article.scss';
import { functions } from '../commons/Functions.js';
import { hooks_functions } from '../commons/HooksFunctions.js';
import { FoodDataIndex } from '../assets/dataset.json';

// イミューダブル
const Article_tags_context = '効果タグ一覧';
const Article_summary_context = 'だいたいの効果';
const Article_table_context = '効果まとめ';

const Article = () => {
    const my_url_name = hooks_functions.getMyUrlName(useLocation);
    const my_food_data = FoodDataIndex[my_url_name];
    const this_food_jp = my_food_data.JpName;
    const Atticle_title_discription_context = my_food_data.TrueName;
    // 効果一覧用のListDOM取得
    const article_context_dom = my_food_data.description;
    const tag_list_dom = functions.createListDomForTags(my_food_data.Effects);

    // DOM描画が完了したタイミングで実行
    useEffect(() => {
        // タイトル再設定
        document.title = `${this_food_jp} | ぶるベリアン`;
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
                        {/* article_context_dom内の<br>タグをエスケープさせない */}
                        <p className="Article_context" dangerouslySetInnerHTML={{ __html: article_context_dom }}>
                        </p>
                    </div>

                    {/* 栄養詳細 */}
                    <div className="Article_nutrition_wrap">
                        <h2 className="Article_nutrition">{Article_table_context}</h2>
                        <div className="Article_context">
                            {/* <div ref={tableArea} /> */}
                            <Grid
                                columns={my_food_data.tableAssets.columns}
                                data={my_food_data.tableAssets.data}
                                search={true}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Article;
