import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // need to wrap items array to be a lodash object using _()
    // .value() will convert it back to usual array
    return _(items).slice(startIndex).take(pageSize).value();
}