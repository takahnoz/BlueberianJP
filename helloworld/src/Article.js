import './Article.scss';
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

function App() {
  return (
    <div className="Article_wrap">
      <div className="Article_area">
        <section>
          {/* タイトル */}
          <div className="Article_title_wrap">
            <h1 className="Article_title _font-bold">ごぼう is なに？</h1>
            <p className="Article_context">
              ゴボウ（牛蒡または牛旁、悪実、英: Burdock、学名： Arctium lappa L. ）
            </p>
          </div>

          {/* 効果タグ */}
          <div className="Article_tags_wrap">
            <h2 className="Article_tags">さっくり tell me</h2>
            <p className="Article_context">
              ※ここにタグ一覧
            </p>
          </div>

          {/* 効果概要 */}
          <div className="Article_summary_wrap">
            <h2 className="Article_summary">さっくり tell me</h2>
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
                ※ここにtable予定
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
