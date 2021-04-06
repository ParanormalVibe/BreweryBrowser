import rangeInclusive from 'range-inclusive'

export default {
    createPaginationResult(items, pages, currentPage) {
        return {
            items: items,
            pages: pages,
            currentPage: currentPage,
            totalResults: items.length
        }
    },

    getPage(collection, page, pageItems) {
        let items = collection.length
        let startIndex = this.getValidStartIndex(page, pageItems, items)
        let itemsOnPage = this.getItemsOnPage(startIndex, pageItems, items)
        let pages = this.getPages(items, pageItems)
        let currentPage = this.getPageNumber(startIndex, pageItems)
        let pageContent = this.getPageContent(collection, startIndex, itemsOnPage)
        return this.createPaginationResult(pageContent, pages, currentPage)
    },

    getValidStartIndex(page, itemsPerPage, itemCount) {
        let startIndex = (page - 1) > 0 ? (page - 1) * itemsPerPage : 0
        startIndex = startIndex >= itemCount ? 0 : startIndex
        return startIndex
    },

    getItemsOnPage(startIndex, itemsPerPage, items) {
        let isLastPage = startIndex + itemsPerPage >= items
        return isLastPage ? items - startIndex : itemsPerPage
    },

    getPages(items, itemsPerPage) {
        return Math.ceil(items / itemsPerPage)
    },

    getPageNumber(startIndex, pageItems) {
        return Math.ceil(startIndex / pageItems) + 1
    },

    getPageContent(collection, startIndex, pageItems) {
        let range = rangeInclusive(startIndex, startIndex + pageItems - 1)
        return range.map(index => collection[index])
    }
}