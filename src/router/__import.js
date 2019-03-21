/**
 * @prefix_path {String} view下一级路径
 * @page {String} view下二级路径
 */
export default (prefix_path, page) => {
    return import(`views/${prefix_path}/${page}.vue`)
}