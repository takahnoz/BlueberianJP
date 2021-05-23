// React Hooks系のメソッド
// 使用スコープに注意してください
// 必ずHooks Objectを渡すこと
const getMyUrlName = (myUseLocation) =>{
    const my_url_name = myUseLocation();
    const my_url_page_name = my_url_name.pathname.split('/').pop();
    return my_url_page_name;
}

const hooks_functions = { getMyUrlName };

export { hooks_functions };