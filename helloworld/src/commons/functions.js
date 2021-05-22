export const createListDomForTags = (effects_list) => {
    let tag_list_dom = [];
    for (let i in effects_list) {
        tag_list_dom.push(<div className="Article_tag">{effects_list[i]}</div>);
    }
    return tag_list_dom;
}
