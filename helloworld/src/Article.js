import { useRef, useEffect } from 'react'

import './Article.scss';
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Article_title_context = 'ごぼう is なに？';
const Atticle_title_discription_context = 'ゴボウ（牛蒡または牛旁、悪実、英: Burdock、学名： Arctium lappa L. ）';
const Article_tags_context = 'だいたいの効果一覧';
const Article_summary_context = 'さっくり tell me';


function App() {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ['Name', 'Email', 'Phone Number'],
    data: [
      ['John', 'john@example.com', '(353) 01 222 3333'],
      ['Mark', 'mark@gmail.com', '(01) 22 888 4444']
    ]
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
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
              <br/>
              ・水溶性食物繊維のイヌリン、不溶性食物繊維のリグニン、セルロース
              <br/>
              ・アミノ酸のアルギニン
              <br/>
              ・ポリフェノールのサポニン
            </p>
          </div>

          {/* 栄養詳細 */}
          <div className="Article_nutrition_wrap">
            <h2 className="Article_nutrition">一覧で tell me</h2>
            <p className="Article_context">
              <div ref={wrapperRef} />
            </p>

          </div>
        </section>
        <div>
          {/* <Link to="/">Home</Link> */}
        </div>
      </div>
    </div>
  );
}

export default App;
