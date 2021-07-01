import { Link } from 'react-router-dom'

const createListDomForTags = (effects_list) => {
    let tag_list_dom = [];
    for (let i in effects_list) {
        tag_list_dom.push(
            <Link className="Article_tag_area" to="/">
                <div className="Article_tag" key={i.toString()}>{effects_list[i]}</div>
            </Link>
        );
    }
    return tag_list_dom;
}

const functions = { createListDomForTags };

export { functions };