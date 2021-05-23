export const createListDomForTags = (effects_list) => {
    let tag_list_dom = [];
    for (let i in effects_list) {
        tag_list_dom.push(<div className="Article_tag" key={i.toString()}>{effects_list[i]}</div>);
    }
    return tag_list_dom;
}

export const getMyPathName = () =>{
    const my_file_name = window.location.href.split('/').pop();
    return my_file_name;
}

const functions = { createListDomForTags, getMyPathName };

export { functions };