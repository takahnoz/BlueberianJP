import './App.scss';
import { Bar } from 'react-chartjs-2';
console.log(Bar);

const graphData = {
  labels: [
    // 軸ラベル
    // 各ラベルを配列にすることで軸ラベルが改行されて表示される
    ['2019年', '1月'],
    ['2019年', '2月'],
    ['2019年', '3月'],
    ['2019年', '4月'],
    ['2019年', '5月'],
    ['2019年', '6月'],
    ['2019年', '7月'],
    ['2019年', '8月'],
    ['2019年', '9月'],
    ['2019年', '10月'],
    ['2019年', '11月'],
    ['2019年', '12月'],
  ],
  datasets: [
    // 表示するデータセット
    {
      data: [16, 42, 117.5, 90.5, 120.5, 225, 193, 110, 197, 529.5, 156.5, 76.5],
      label: '栄養含有量',
    },
  ],
};

function App() {
  return (
    <div className="Article_wrap">
      <div className="Article_area">
        <section>
          {/* タイトル */}
          <div className="Article_title_wrap">
            <h1 className="Article_title _font-bold">ごぼう</h1>
            <p className="Article_context">
              ゴボウ（牛蒡または牛旁、悪実、英: Burdock、学名： Arctium lappa L. ）
            </p>
          </div>

          {/* 効果概要 */}
          <div className="Article_summary_wrap">
            <h2 className="Article_summary">どんな効果があるの？</h2>
            <p className="Article_context">
              炒めもの、煮物、サラダに炊き込みご飯など、さまざまな料理で活躍するごぼう。
              食物繊維が豊富で体に良いというイメージを持たれている方も多いかもしれません。
              そのイメージ通り、ごぼうには食物繊維がたっぷり含まれています。
              ごぼうの食物繊維含有量は、生の状態のものであれば100gあたりに5.7g、茹でた状態のものであれば100gあたりに6.1g。
              実は、一般的に食物繊維が豊富なイメージのあるレタスやほうれん草、さつまいもなどと比べても、
              ごぼうのほうがより多くの食物繊維を含んでいるのです。
            </p>
          </div>

          {/* 栄養詳細 */}
          <div className="Article_nutrition_wrap">
            <h2 className="Article_nutrition">含まれる栄養素</h2>
            <p className="context_in_100g">
              ※可食部100gあたり
            </p>
            <div className="Article_context">
              <p>カロリー：65kcal</p>
              <p>タンパク質：1.8g</p>
              <p>脂質：0.1g</p>
              <p>のち食物繊維：5.7</p>
              <p>B2：0.04mg</p>
              <p>カロリー：65kcal</p>
              <p>B6：0.10mg</p>
              <p>C：3mg</p>
              <p>E：0.6mg</p>
              <p>ナイアシン：0.4mg</p>
              <p>葉酸：68μg</p>
              <p>ナトリウム：18mg</p>
              <p>カリウム：320mg</p>
              <p>カルシウム：46mg</p>
              <p>マグネシウム：54mg</p>
              <p>リン：62mg</p>
              <p>鉄：0.7mg</p>
            </div>
            <Bar data={graphData} />
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
